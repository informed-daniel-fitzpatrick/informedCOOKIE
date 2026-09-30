import { useEffect, useState } from "react";
import { CookieCounter } from "./components/CookieCounter";
import { PhaseBanner } from "./components/PhaseBanner";
import { ServiceFooter } from "./components/ServiceFooter";
import { ServiceHeader } from "./components/ServiceHeader";
import { getSavedCookieCount, saveCookieCount } from "./cookieStorage";

function App() {
  const [currentCookies, setCurrentCookies] = useState(getSavedCookieCount);

  // Keep browser storage in sync whenever the displayed total changes.
  useEffect(() => {
    saveCookieCount(currentCookies);
  }, [currentCookies]);

  function bakeCookie() {
    setCurrentCookies((count) => count + 2);
  }

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

              <CookieCounter
                currentCookies={currentCookies}
                onBake={bakeCookie}
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
