interface CookieCounterProps {
  currentCookies: number;
  bakedThisVisit: number;
  rankTitle: string;
  nextRankTitle: string | null;
  cookiesToNextRank: number | null;
  rankProgress: number;
  combo: number;
  comboMultiplier: number;
  luckyFlash: string | null;
  lastGain: number | null;
  isLucky: boolean;
  onBake: () => void;
  onReset: () => void;
}

/** Displays the current total and the controls that change it. */
export function CookieCounter({
  currentCookies,
  bakedThisVisit,
  rankTitle,
  nextRankTitle,
  cookiesToNextRank,
  rankProgress,
  combo,
  comboMultiplier,
  luckyFlash,
  lastGain,
  isLucky,
  onBake,
  onReset,
}: CookieCounterProps) {
  const epicTier = isLucky ? "legendary" : comboMultiplier >= 3 ? "epic" : comboMultiplier >= 2 ? "rare" : "common";
  const cookieClass = [
    "ascii-cookie",
    "cookie-pop",
    isLucky ? "cookie-golden" : "",
    comboMultiplier > 1 ? "cookie-frenzy" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={`cookie-counter bakery-stage mmo-stage tier-${epicTier}${isLucky ? " stage-lucky" : ""}${combo >= 10 ? " stage-frenzy" : ""}`}
      aria-label="Cookie bakery"
    >
      <span className="mmo-rays" aria-hidden="true" />
      <span className="govuk-visually-hidden">An ASCII art cookie</span>

      <p className="mmo-kicker" aria-hidden="true">
        ⚔️ COOKIE REALM — SEASON 1 ⚔️
      </p>

      {isLucky && (
        <p className="mmo-crit" aria-hidden="true">
          ✨ LEGENDARY CRIT ✨
        </p>
      )}
      {comboMultiplier >= 3 && !isLucky && (
        <p className="mmo-crit mmo-crit-epic" aria-hidden="true">
          🔥 EPIC FRENZY x3 🔥
        </p>
      )}

      <pre className={cookieClass} aria-hidden="true" key={currentCookies}>{String.raw`
      .--------.
    .'  o    o  '.
   / o    o     o \
  |    o     o     |
  | o      o     o |
   \   o       o  /
    '.  o   o   .'
      '--------'
      `}</pre>

      {lastGain !== null && (
        <span
          className={`float-gain dmg-${epicTier}`}
          aria-hidden="true"
          key={`gain-${currentCookies}`}
        >
          +{lastGain.toLocaleString("en-GB")}
          {isLucky ? "!!" : comboMultiplier > 1 ? ` x${comboMultiplier}` : ""}
        </span>
      )}

      <p className="govuk-body govuk-!-margin-bottom-1">
        Current cookies{" "}
        <strong className="govuk-tag rank-tag govuk-!-margin-left-1">
          ⭐ {rankTitle}
        </strong>
      </p>
      <output
        className={`govuk-heading-l govuk-!-margin-bottom-1 cookie-total total-${epicTier}${isLucky ? " total-lucky" : ""}`}
        aria-live="polite"
      >
        {currentCookies.toLocaleString("en-GB")}
        <span className="govuk-visually-hidden"> cookies in jar</span>
      </output>

      <div
        className="rank-progress mmo-bar"
        role="progressbar"
        aria-label="Progress to next rank"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(rankProgress * 100)}
      >
        <div
          className="rank-progress__fill"
          style={{ width: `${Math.round(rankProgress * 100)}%` }}
        />
      </div>

      <p className="govuk-body-s govuk-!-margin-bottom-1 govuk-!-margin-top-2">
        🍪 Baked this visit:{" "}
        <strong>{bakedThisVisit.toLocaleString("en-GB")}</strong>
      </p>
      {nextRankTitle !== null && cookiesToNextRank !== null && (
        <p className="govuk-body-s govuk-!-margin-bottom-1">
          🎖️ {cookiesToNextRank.toLocaleString("en-GB")} to go until{" "}
          <strong>{nextRankTitle}</strong>
        </p>
      )}
      {combo >= 2 && (
        <div className="combo-wrap">
          <p
            className={`govuk-body-s govuk-!-margin-bottom-1 combo-pill combo-x${comboMultiplier}`}
            aria-live="off"
          >
            🔥 Combo x{comboMultiplier} ({combo} HITS!)
          </p>
          <div className="combo-timer" aria-hidden="true" key={`combo-${combo}`}>
            <div className="combo-timer__fill" />
          </div>
        </div>
      )}
      {luckyFlash !== null && (
        <p
          className="govuk-body-s lucky-flash govuk-!-margin-bottom-1"
          aria-live="polite"
        >
          🍀 {luckyFlash}
        </p>
      )}

      <div className="cookie-actions govuk-!-margin-top-3">
        <button
          className="govuk-button bake-button mmo-bake govuk-!-margin-bottom-0"
          type="button"
          onClick={onBake}
        >
          🍪 BAKE COOKIE
        </button>
        <button
          className="govuk-button govuk-button--secondary govuk-!-margin-bottom-0"
          type="button"
          onClick={onReset}
          disabled={currentCookies === 0}
        >
          Reset cookies
        </button>
      </div>
    </section>
  );
}
