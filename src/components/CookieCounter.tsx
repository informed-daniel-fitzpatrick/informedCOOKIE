interface CookieCounterProps {
  currentCookies: number;
  onBake: () => void;
}

/** Displays the current total and the controls that change it. */
export function CookieCounter({
  currentCookies,
  onBake,
}: CookieCounterProps) {
  return (
    <section className="cookie-counter" aria-label="Cookie bakery">
      <span className="govuk-visually-hidden">An ASCII art cookie</span>
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

      <p className="govuk-body govuk-!-margin-bottom-1">Current cookies</p>
      <output
        className="govuk-heading-l govuk-!-margin-bottom-4 cookie-total"
        aria-live="polite"
      >
        {/* TODO(EXERCISE): Format large totals with thousands separators. */}
        {currentCookies}
      </output>

      <div className="cookie-actions">
        <button
          className="govuk-button govuk-!-margin-bottom-0"
          type="button"
          onClick={onBake}
        >
          Bake Cookie
        </button>
        {/* TODO(EXERCISE): Reset the cookie count when this is selected. */}
        <button
          className="govuk-button govuk-button--secondary govuk-!-margin-bottom-0"
          type="button"
        >
          Reset cookies
        </button>
      </div>
    </section>
  );
}
