import { useRef, useState } from "react";
import BotOfItem from "./BotOfItem";
import TopOfItem from "./TopOfItem";
import { CSSTransition } from "react-transition-group";
import "./animation.css";
import drinks from "../data/drinks";

function Items({ typeOfDrink, photo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loadedData, setLoadedData] = useState(null);
  const nodeRef = useRef(null);

  // Kada se klikne na TopOfItem, odloži učitavanje podataka
  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!loadedData) {
      // Učitavanje podataka iz store samo kad je potrebno
      const drinkData = drinks.find((item) => item.category === typeOfDrink);
      setLoadedData(drinkData);
    }
  };

  return (
    <>
      <div onClick={handleOpen} className="cursor-pointer">
        <TopOfItem typeOfDrink={typeOfDrink} photo={photo} />
      </div>
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <BotOfItem typeOfDrink={typeOfDrink} loadedData={loadedData} />
        </div>
      </CSSTransition>
    </>
  );
}

export default Items;
