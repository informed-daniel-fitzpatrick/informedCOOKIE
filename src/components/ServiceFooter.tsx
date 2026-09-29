import { PlaceholderLink } from "./PlaceholderLink";

const SUPPORT_LINKS = ["Privacy", "Accessibility statement", "Help", "Contact"];

/** Displays supporting service links and the demonstration disclaimer. */
export function ServiceFooter() {
  return (
    <footer className="govuk-footer">
      <div className="govuk-width-container">
        <div className="govuk-footer__meta">
          <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
            <h2 className="govuk-visually-hidden">Support links</h2>
            <ul className="govuk-footer__inline-list">
              {SUPPORT_LINKS.map((label) => (
                <li className="govuk-footer__inline-list-item" key={label}>
                  <PlaceholderLink className="govuk-footer__link">
                    {label}
                  </PlaceholderLink>
                </li>
              ))}
            </ul>
            <span className="govuk-footer__licence-description">
              InformedCOOKIE is not a real service - sorry if you were hungry
            </span>
          </div>
          <div className="govuk-footer__meta-item app-footer__copyright">
            <PlaceholderLink className="govuk-footer__link">
              © Informed Solutions
            </PlaceholderLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
