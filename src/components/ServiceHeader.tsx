import { PlaceholderLink } from "./PlaceholderLink";

/** Displays the service identity at the top of every page. */
export function ServiceHeader() {
  return (
    <header className="govuk-header" data-module="govuk-header">
      <div className="govuk-header__container govuk-width-container app-header__container">
        <div className="govuk-header__logo">
          <PlaceholderLink className="govuk-header__homepage-link app-header__brand">
            InformedCOOKIE
          </PlaceholderLink>
        </div>
      </div>
    </header>
  );
}
