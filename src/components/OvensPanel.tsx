interface OvensPanelProps {
  ovens: number;
  ovenCost: number;
  canAfford: boolean;
  ovenTick: number;
  onBuy: () => void;
}

const MAX_SHOWN_OVENS = 12;

/** MMO mech-bay for passive ovens with per-second burst feedback. */
export function OvensPanel({
  ovens,
  ovenCost,
  canAfford,
  ovenTick,
  onBuy,
}: OvensPanelProps) {
  const shown = Math.min(ovens, MAX_SHOWN_OVENS);
  const hidden = ovens - shown;
  const powerLevel = ovens >= 10 ? "SSS" : ovens >= 5 ? "SS" : ovens >= 1 ? "S" : "—";

  return (
    <section
      className={`ovens-panel mmo-ovens${ovens > 0 ? " ovens-active" : ""}`}
      aria-label="Cookie ovens"
    >
      <span className="mmo-rays mmo-rays-small" aria-hidden="true" />
      <p className="mmo-kicker mmo-kicker-blue" aria-hidden="true">
        🤖 OVEN MECH BAY 🤖
      </p>
      <h2 className="govuk-heading-m govuk-!-margin-bottom-1">
        Ovens{" "}
        <strong className="govuk-tag power-tag">POWER {powerLevel}</strong>
      </h2>
      <p className="govuk-body-s govuk-!-margin-bottom-2">
        Ovens: <strong>{ovens.toLocaleString("en-GB")}</strong> · +
        {ovens.toLocaleString("en-GB")}/sec
      </p>

      {ovens > 0 && (
        <div
          className="oven-burst"
          aria-hidden="true"
          key={`oven-tick-${ovenTick}`}
        >
          +{ovens.toLocaleString("en-GB")} OVEN POWER!
        </div>
      )}

      <div className="furnace-core" aria-hidden="true">
        <span className="furnace-flame">🔥</span>
        <span className="furnace-ring" />
        <span className="furnace-ring furnace-ring-2" />
      </div>

      {ovens === 0 ? (
        <p className="govuk-body-s govuk-!-margin-bottom-2">
          No mechs deployed. Summon your first oven to start idle baking!
        </p>
      ) : (
        <ul className="oven-grid" aria-hidden="true">
          {Array.from({ length: shown }, (_, i) => (
            <li
              className="oven-unit"
              key={`${i}-${Math.floor(i / MAX_SHOWN_OVENS)}`}
              style={{ animationDelay: `${(i % 6) * 0.12}s` }}
            >
              🔥
            </li>
          ))}
          {hidden > 0 && <li className="oven-unit oven-more">+{hidden}</li>}
        </ul>
      )}

      <button
        className="govuk-button govuk-button--secondary summon-button govuk-!-margin-bottom-0 govuk-!-margin-top-2"
        type="button"
        onClick={onBuy}
        disabled={!canAfford}
      >
        ⚔️ SUMMON OVEN ({ovenCost.toLocaleString("en-GB")} cookies)
      </button>
    </section>
  );
}
