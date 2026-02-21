import { useState } from "react";
import BotOfItem from "./BotOfItem";
import TopOfItem from "./TopOfItem";
import "./animation.css";

function Items({ typeOfDrink, icon, isOpen, onToggle, setHeaderRef }) {
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpen = () => {
    if (!hasOpened) setHasOpened(true);
    onToggle();
  };

  return (
    <div>
      <div ref={setHeaderRef} onClick={handleOpen} className="cursor-pointer">
        <TopOfItem
          typeOfDrink={typeOfDrink}
          icon={icon}
          isOpen={isOpen}
        />
      </div>

      <div className={`accordion-grid ${isOpen ? "open" : ""}`}>
        <div className="accordion-inner">
          {hasOpened && (
            <BotOfItem typeOfDrink={typeOfDrink} loadedData={true} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Items;
