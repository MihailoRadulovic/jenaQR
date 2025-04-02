import { useRef, useState } from "react";
import drinks from "../data/drinks";
import { CSSTransition } from "react-transition-group";
import "./animation.css";

function BotOfItem({ typeOfDrink, loadedData }) {
  const [activeMenu] = useState("main");
  const nodeRef = useRef(null);

  if (!loadedData) {
    return null; // Ne prikazuj ništa dok podaci nisu učitani
  }

  const drinkType = drinks.find((drink) => drink.category === typeOfDrink);

  return (
    <div className="bg-gray-600 w-[83%] mx-auto h-auto rounded-b-3xl p-3 font-['Montserrat']">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames={"menu-primary"}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <ul>
            {drinkType.items.map((drink) => (
              <li
                key={drink.name}
                className="text-gray-300 text-xl p-1.5 font-medium"
              >
                {drink.name}{" "}
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
      </CSSTransition>
    </div>
  );
}

export default BotOfItem;
