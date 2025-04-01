import Items from "./Items";
import MenuHeader from "./MenuHeader";
import drinks from "../data/drinks";
import { useState } from "react";
import Items2 from "./Items2";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Piće");

  return (
    <div
      className="bg-gray-400 w-[90%] max-h-[90%] top-[5%] bottom-[5%] left-[5%] right-[5%] absolute rounded-4xl shadow-2xl p-4 flex flex-col z-10 overflow-auto "
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
          />
        ))}
      {activeCategory === "Pekara" && <Items2 />}
    </div>
  );
}

export default Menu;
