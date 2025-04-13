import { useRef, useState } from "react";
import drinks from "../data/drinks";
import { CSSTransition } from "react-transition-group";
import "./animation.css";
import { useTranslation } from "react-i18next";

function BotOfItem({ typeOfDrink, loadedData }) {
  const [activeMenu] = useState("main");
  const nodeRef = useRef(null);

  const { t } = useTranslation();

  if (!loadedData) {
    return null; // Ne prikazuj ništa dok podaci nisu učitani
  }

  const drinkType = drinks.find((drink) => drink.category === typeOfDrink);

  return (
    <div className="bg-gray-600 w-[83%] mx-auto h-auto rounded-b-3xl p-3 font-['Montserrat']">
      <div ref={nodeRef}>
        <ul>
          {drinkType.items.map((drink) => (
            <li
              key={drink.name}
              className="text-gray-300 text-xl p-1.5 font-medium"
            >
              {t(drink.name)}{" "}
              <span>
                <span className="italic text-lg font-light">
                  {drink.capacity}
                </span>{" "}
                - <span className="font-semibold">{drink.price}</span>
              </span>
            </li>
          ))}
        </ul>
        {drinkType.category === "Piva" && (
          <div className="border-t-1 border-gray-400 ">
            <p className="text-gray-950 text-3xl p-1.5 font-semibold mt-1 italic">
              {t("Točeno pivo")}
            </p>
            <ul>
              {drinkType.items2.map((drink) => (
                <li
                  key={drink.name}
                  className="text-gray-300 text-xl p-1.5 font-medium"
                >
                  {t(drink.name)}{" "}
                  <span>
                    <span className="italic text-lg font-light">
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
