import { type MouseEvent, useEffect, useState } from "react";

const STORAGE_KEY = "currentCookies";

function getSavedCookieCount() {
  const savedCount = Number(window.localStorage.getItem(STORAGE_KEY));

  return Number.isSafeInteger(savedCount) && savedCount >= 0 ? savedCount : 0;
}

function preventNavigation(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
}

function App() {
  const [currentCookies, setCurrentCookies] = useState(getSavedCookieCount);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(currentCookies));
  }, [currentCookies]);

  function bakeCookie() {
    setCurrentCookies((count) => count + 1);
  }

  return (
    <>
      <a className="govuk-skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="govuk-header" data-module="govuk-header">
        <div className="govuk-header__container govuk-width-container app-header__container">
          <div className="govuk-header__logo">
            <a
              className="govuk-header__homepage-link app-header__brand"
              href="#"
              onClick={preventNavigation}
            >
              InformedCOOKIE
            </a>
          </div>
        </div>
      </header>

      <div
        className="govuk-phase-banner govuk-width-container"
        aria-label="Phase banner"
      >
        <p className="govuk-phase-banner__content">
          <strong
            className="govuk-tag govuk-phase-banner__content__tag"
            aria-label="Beta phase"
          >
            Beta
          </strong>
          <span className="govuk-phase-banner__text">
            This is a new service. Your {" "}
            <a
              className="govuk-link"
              href="#"
              onClick={preventNavigation}
            >
              feedback
            </a>{" "}
            will help us to improve it.
          </span>
        </p>
      </div>

      <main className="govuk-width-container app-main" id="main-content">
        <div className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h1 className="govuk-heading-xl govuk-!-margin-bottom-2">
                InformedCOOKIE
              </h1>
              <p className="govuk-body-l">Cookies for the civil service</p>

              <section className="cookie-counter" aria-label="Cookie bakery">
                <span className="govuk-visually-hidden">
                  An ASCII art cookie
                </span>
                <pre className="ascii-cookie" aria-hidden="true">{String.raw`
      .--------.
    .'  o    o  '.
   / o    o     o \
  |    o     o     |
  | o      o     o |
   \   o       o  /
    '.  o   o   .'
      '--------'
                `}</pre>

                <p className="govuk-body govuk-!-margin-bottom-1">
                  Current cookies
                </p>
                <output
                  className="govuk-heading-l govuk-!-margin-bottom-4 cookie-total"
                  aria-live="polite"
                >
                  {currentCookies}
                </output>

                <button
                  className="govuk-button govuk-!-margin-bottom-0"
                  type="button"
                  onClick={bakeCookie}
                >
                  Bake Cookie
                </button>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="govuk-footer">
        <div className="govuk-width-container">
          <div className="govuk-footer__meta">
            <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
              <h2 className="govuk-visually-hidden">Support links</h2>
              <ul className="govuk-footer__inline-list">
                {[
                  "Privacy",
                  "Accessibility statement",
                  "Help",
                  "Contact",
                ].map((label) => (
                  <li className="govuk-footer__inline-list-item" key={label}>
                    <a
                      className="govuk-footer__link"
                      href="#"
                      onClick={preventNavigation}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <span className="govuk-footer__licence-description">
                InformedCOOKIE is a demonstration service from Informed
                Solutions.
              </span>
            </div>
            <div className="govuk-footer__meta-item app-footer__copyright">
              <a
                className="govuk-footer__link"
                href="#"
                onClick={preventNavigation}
              >
                © Informed Solutions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
