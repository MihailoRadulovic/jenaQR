import Items from "./Items";
import MenuHeader from "./MenuHeader";
import drinks from "../data/drinks";
import { useEffect, useRef, useState } from "react";
import Items2 from "./Items2";

function Menu() {
  const ANIM_MS = 500;

  const [activeCategory, setActiveCategory] = useState("Piće");
  const [openCategory, setOpenCategory] = useState(null);
  const [pendingCategory, setPendingCategory] = useState(null);

  const scrollContainerRef = useRef(null);
  const headerRefs = useRef({}); // { [category]: HTMLElement }

  const SCROLL_OFFSET = 24; // koliko da bude "još malo više" iznad headera

  const scrollToHeader = (cat) => {
    const container = scrollContainerRef.current;
    const el = headerRefs.current[cat];
    if (!container || !el) return;

    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();

    // koliko je element udaljen od vrha container-a trenutno
    const delta = eRect.top - cRect.top;

    // trenutni scroll + delta - offset
    const targetTop = container.scrollTop + delta - SCROLL_OFFSET;

    container.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
  };

  const handleToggle = (cat) => {
    // klik na otvoren -> zatvori
    if (openCategory === cat) {
      setOpenCategory(null);
      return;
    }

    // ako ništa otvoreno -> otvori i skroluj
    if (!openCategory) {
      setOpenCategory(cat);
      requestAnimationFrame(() => scrollToHeader(cat));
      return;
    }

    // nešto je otvoreno -> prvo zatvori, pa otvori traženi
    setPendingCategory(cat);
    setOpenCategory(null);
  };

  useEffect(() => {
    if (openCategory === null && pendingCategory) {
      const cat = pendingCategory;

      const id = setTimeout(() => {
        setOpenCategory(cat);
        setPendingCategory(null);

        // skrol tek kad je novi header renderovan
        requestAnimationFrame(() => {
          requestAnimationFrame(() => scrollToHeader(cat));
        });
      }, ANIM_MS);

      return () => clearTimeout(id);
    }
  }, [openCategory, pendingCategory]);

  return (
    <div
      ref={scrollContainerRef}
      className="bg-[var(--asparagus-100)] w-[95%] max-h-[100%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-4xl shadow-2xl p-4 flex flex-col z-10 overflow-auto font-['Montserrat']"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <MenuHeader
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {activeCategory === "Piće" &&
        drinks.map((drink) => (
          <Items
            key={drink.id}
            typeOfDrink={drink.category}
            photo={drink.photo}
            icon={drink.icon}
            isOpen={openCategory === drink.category}
            onToggle={() => handleToggle(drink.category)}
            setHeaderRef={(el) => {
              if (el) headerRefs.current[drink.category] = el;
            }}
          />
        ))}

      {activeCategory === "Pekara" && <Items2 />}
    </div>
  );
}

export default Menu;
