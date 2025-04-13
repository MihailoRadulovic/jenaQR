import Items from "./Items";
import MenuHeader from "./MenuHeader";
import drinks from "../data/drinks";
import { useState } from "react";
import Items2 from "./Items2";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Piće");

  return (
    <div
      className="bg-[var(--asparagus-100)] w-[95%] max-h-[97%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-4xl shadow-2xl p-4 flex flex-col z-10 overflow-auto font-['Montserrat']"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <MenuHeader
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {activeCategory === "Piće" &&
        drinks.map((drink) => (
          <Items
            typeOfDrink={drink.category}
            photo={drink.photo}
            key={drink.id}
            icon={drink.icon}
          />
        ))}
      {activeCategory === "Pekara" && <Items2 />}
    </div>
  );
}

export default Menu;
