import { useRef } from "react";
import drinks from "../data/drinks";
import "./animation.css";
import { useTranslation } from "react-i18next";

function BotOfItem({ typeOfDrink, loadedData }) {
  const nodeRef = useRef(null);
  const { t } = useTranslation();

  if (!loadedData) return null;

  const drinkType = drinks.find((drink) => drink.category === typeOfDrink);
  if (!drinkType) return null;

  const renderList = (items) => (
    <ul>
      {items.map((drink, index) => {
        const isLast = index === items.length - 1;

        // Key: mora da bude stabilan i unikatan čak i kad imaš isti name (Limunada x2)
        const key = `${drink.name}-${drink.capacity ?? "noCap"}-${drink.price}`;

        return (
          <li
            key={key}
            className={`text-[var(--asparagus-100)] px-2 py-2
              ${
                isLast
                  ? ""
                  : "border-b border-[var(--asparagus-600)] border-dotted"
              }`}
          >
            <div className="flex items-start justify-between gap-3">
              {/* Naziv + varijante */}
              <div className="min-w-0">
                <span className="block text-[1.05rem] leading-snug font-normal">
                  {t(drink.name)}
                </span>

                {drink.variants?.length > 0 && (
                  <span className="mt-0.5 block text-sm leading-relaxed text-[var(--asparagus-200)]/85">
                    {drink.variants.map((v) => t(`variants.${v}`)).join(", ")}
                  </span>
                )}
              </div>

              {/* Cena */}
              <span className="shrink-0 text-[1.05rem] font-semibold tabular-nums">
                {drink.price}
              </span>
            </div>

            {/* Kapacitet */}
            {drink.capacity && (
              <div className="mt-1">
                <span
                  className="inline-block rounded-full px-2 py-0.5 text-xs
                             bg-[var(--asparagus-100)]/10 text-[var(--asparagus-200)]"
                >
                  {drink.capacity}
                </span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="bg-[var(--asparagus-600)] rounded-b-3xl w-[100%] mx-auto h-auto  p-3 font-['Montserrat']">
      <div ref={nodeRef}>
        {renderList(drinkType.items)}

        {drinkType.category === "Piva" && drinkType.items2?.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px flex-1 bg-[var(--asparagus-300)]/25" />
              <span
                className="px-3 py-1 rounded-full text-xs tracking-widest uppercase
                           bg-[var(--asparagus-100)]/10 text-[var(--asparagus-200)]"
              >
                {t("Točeno pivo")}
              </span>
              <div className="h-px flex-1 bg-[var(--asparagus-300)]/25" />
            </div>

            {renderList(drinkType.items2)}
          </div>
        )}
      </div>
    </div>
  );
}

export default BotOfItem;
