import { useEffect, useState } from "react";
import { CookieCounter } from "./components/CookieCounter";
import { MilestoneBanner } from "./components/MilestoneBanner";
import { OvensPanel } from "./components/OvensPanel";
import { PhaseBanner } from "./components/PhaseBanner";
import { ServiceFooter } from "./components/ServiceFooter";
import { ServiceHeader } from "./components/ServiceHeader";
import {
  getSavedCookieCount,
  getSavedOvenCount,
  saveCookieCount,
  saveOvenCount,
} from "./cookieStorage";
import { getNextRank, getRank } from "./ranks";

const COMBO_WINDOW_MS = 2000;
const LUCKY_CHANCE = 0.1;
const LUCKY_MULT = 10;

function comboMultiplier(combo: number): number {
  if (combo >= 20) {
    return 3;
  }
  if (combo >= 10) {
    return 2;
  }
  return 1;
}

function App() {
  const [currentCookies, setCurrentCookies] = useState(getSavedCookieCount);
  const [bakedThisVisit, setBakedThisVisit] = useState(0);
  const [ovens, setOvens] = useState(getSavedOvenCount);
  const [combo, setCombo] = useState(0);
  const [lastBakeAt, setLastBakeAt] = useState<number | null>(null);
  const [luckyFlash, setLuckyFlash] = useState<string | null>(null);
  const [lastGain, setLastGain] = useState<number | null>(null);
  const [ovenTick, setOvenTick] = useState(0);
  const [dismissedMilestone, setDismissedMilestone] = useState<number | null>(
    null,
  );

  // Keep browser storage in sync whenever the displayed total changes.
  useEffect(() => {
    saveCookieCount(currentCookies);
  }, [currentCookies]);

  useEffect(() => {
    saveOvenCount(ovens);
  }, [ovens]);

  // Ovens bake passively once per second.
  useEffect(() => {
    if (ovens === 0) {
      return;
    }
    const timer = window.setInterval(() => {
      setCurrentCookies((count) => count + ovens);
      setOvenTick((tick) => tick + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [ovens]);

  // Clear the lucky message after a short celebration.
  useEffect(() => {
    if (luckyFlash === null) {
      return;
    }
    const timer = window.setTimeout(() => setLuckyFlash(null), 3000);
    return () => window.clearTimeout(timer);
  }, [luckyFlash]);

  function bakeCookie() {
    const now = Date.now();
    const nextCombo =
      lastBakeAt !== null && now - lastBakeAt < COMBO_WINDOW_MS ? combo + 1 : 1;
    const mult = comboMultiplier(nextCombo);
    const isLucky = Math.random() < LUCKY_CHANCE;
    const gain = mult * (isLucky ? LUCKY_MULT : 1);

    setCombo(nextCombo);
    setLastBakeAt(now);
    setLastGain(gain);
    setCurrentCookies((count) => count + gain);
    setBakedThisVisit((count) => count + gain);
    if (isLucky) {
      setLuckyFlash(`Lucky bake! +${gain.toLocaleString("en-GB")} cookies`);
    }
  }

  function buyOven() {
    const cost = 50 * (ovens + 1);
    if (currentCookies < cost) {
      return;
    }
    setCurrentCookies((count) => count - cost);
    setOvens((count) => count + 1);
  }

  function resetCookies() {
    if (
      currentCookies >= 100 &&
      !window.confirm(
        `Reset ${currentCookies.toLocaleString("en-GB")} cookies to zero?`,
      )
    ) {
      return;
    }
    setCurrentCookies(0);
    setBakedThisVisit(0);
    setOvens(0);
    setCombo(0);
    setLastBakeAt(null);
    setLuckyFlash(null);
    setLastGain(null);
  }

  const milestone = [1000, 100, 10].find(
    (target) => currentCookies >= target,
  );
  const rank = getRank(currentCookies);
  const nextRank = getNextRank(currentCookies);
  const ovenCost = 50 * (ovens + 1);
  const rankProgress = nextRank
    ? Math.min(1, currentCookies / nextRank.threshold)
    : 1;

  return (
    <>
      <a className="govuk-skip-link" href="#main-content">
        Skip to main content
      </a>

      <ServiceHeader />
      <PhaseBanner />

      <main className="govuk-width-container app-main" id="main-content">
        <div className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h1 className="govuk-heading-xl govuk-!-margin-bottom-2">
                InformedCOOKIE
              </h1>
              <p className="govuk-body-l">CMS (cookie management service)</p>

              {milestone !== undefined && dismissedMilestone !== milestone && (
                <MilestoneBanner
                  milestone={milestone}
                  rankTitle={rank.title}
                  onDismiss={() => setDismissedMilestone(milestone)}
                />
              )}

              <CookieCounter
                currentCookies={currentCookies}
                bakedThisVisit={bakedThisVisit}
                rankTitle={rank.title}
                nextRankTitle={nextRank?.title ?? null}
                cookiesToNextRank={
                  nextRank ? nextRank.threshold - currentCookies : null
                }
                rankProgress={rankProgress}
                combo={combo}
                comboMultiplier={comboMultiplier(combo)}
                luckyFlash={luckyFlash}
                lastGain={lastGain}
                isLucky={luckyFlash !== null}
                onBake={bakeCookie}
                onReset={resetCookies}
              />

              <OvensPanel
                ovens={ovens}
                ovenCost={ovenCost}
                canAfford={currentCookies >= ovenCost}
                ovenTick={ovenTick}
                onBuy={buyOven}
              />
            </div>
          </div>
        </div>
      </main>

      <ServiceFooter />
    </>
  );
}

export default App;
