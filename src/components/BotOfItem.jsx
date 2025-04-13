import { useRef } from "react";
import drinks from "../data/drinks";
import "./animation.css";
import { useTranslation } from "react-i18next";

function BotOfItem({ typeOfDrink, loadedData }) {
  const nodeRef = useRef(null);

  const { t } = useTranslation();

  if (!loadedData) {
    return null; // Ne prikazuj ništa dok podaci nisu učitani
  }

  const drinkType = drinks.find((drink) => drink.category === typeOfDrink);
  const lastDrink = drinkType.items.at(-1);

  return (
    <div className="bg-[var(--asparagus-700)] w-[83%] mx-auto h-auto rounded-b-3xl p-3 font-['Montserrat']">
      <div ref={nodeRef}>
        <ul>
          {drinkType.items.map((drink) => (
            <li
              key={drink.name}
              className={`text-[var(--asparagus-100)] text-xl p-1.5 font-medium  ${drink === lastDrink ? "" : "border-b-1 border-[var(--asparagus-200)] border-dotted"}`}
            >
              {t(drink.name)}{" "}
              <span>
                <span className="italic text-lg font-light">
                  {drink.capacity}
                </span>{" "}
                - <span className="font-medium">{drink.price}</span>
              </span>
            </li>
          ))}
        </ul>
        {drinkType.category === "Piva" && (
          <div className="border-t-1 border-[var(--asparagus-300)] mt-1 ">
            <p className="text-[var(--asparagus-300)] text-3xl p-1.5 font-semibold italic mt-1">
              {t("Točeno pivo")}
            </p>
            <ul>
              {drinkType.items2.map((drink) => (
                <li
                  key={drink.name}
                  className="text-[var(--asparagus-100)] text-xl p-1.5 font-medium"
                >
                  {t(drink.name)}{" "}
                  <span>
                    <span className="italic text-lg font-medium">
                      {drink.capacity}
                    </span>{" "}
                    - <span className="font-semibold">{drink.price}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default BotOfItem;
