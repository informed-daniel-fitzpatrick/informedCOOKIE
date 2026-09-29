import { PlaceholderLink } from "./PlaceholderLink";

/** Identifies the service as beta and provides a future feedback entry point. */
export function PhaseBanner() {
  return (
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
          This is a new service. Your{" "}
          <PlaceholderLink className="govuk-link">feedback</PlaceholderLink>{" "}
          will help us to improve it.
        </span>
      </p>
    </div>
  );
}
