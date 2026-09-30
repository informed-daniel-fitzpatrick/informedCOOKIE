interface MilestoneBannerProps {
  milestone: number;
  rankTitle: string;
  onDismiss: () => void;
}

/** Epic MMO rank-up celebration built on the GOV.UK success banner. */
export function MilestoneBanner({
  milestone,
  rankTitle,
  onDismiss,
}: MilestoneBannerProps) {
  return (
    <div
      className="govuk-notification-banner govuk-notification-banner--success mmo-rankup"
      role="region"
      aria-labelledby="milestone-title"
    >
      <span className="mmo-rays" aria-hidden="true" />
      <div className="govuk-notification-banner__header">
        <h2 className="govuk-notification-banner__title" id="milestone-title">
          Rank up
        </h2>
      </div>
      <div className="govuk-notification-banner__content">
        <p className="mmo-rankup-kicker" aria-hidden="true">
          ⚔️ SSR PULL — NEW TITLE UNLOCKED ⚔️
        </p>
        <p className="govuk-notification-banner__heading mmo-rankup-title">
          {milestone.toLocaleString("en-GB")} cookies — {rankTitle}!
        </p>
        <button
          className="govuk-button govuk-button--secondary govuk-!-margin-bottom-0"
          type="button"
          onClick={onDismiss}
        >
          Claim
        </button>
      </div>
    </div>
  );
}
