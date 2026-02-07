import { useRef, useState } from "react";
import BotOfItem from "./BotOfItem";
import TopOfItem from "./TopOfItem";
import { CSSTransition } from "react-transition-group";
import "./animation.css";
import drinks from "../data/drinks";

function Items({ typeOfDrink, photo, icon, isOpen, onToggle, setHeaderRef }) {
  const [loadedData, setLoadedData] = useState(null);
  const nodeRef = useRef(null);

  const handleOpen = () => {
    onToggle();

    if (!loadedData) {
      const drinkData = drinks.find((item) => item.category === typeOfDrink);
      setLoadedData(drinkData);
    }
  };

  return (
    <div>
      <div ref={setHeaderRef} onClick={handleOpen} className="cursor-pointer">
        <TopOfItem
          typeOfDrink={typeOfDrink}
          photo={photo}
          icon={icon}
          isOpen={isOpen}
        />
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
    </div>
  );
}

export default Items;
