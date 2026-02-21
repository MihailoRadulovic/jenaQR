import Items from "./Items";
import MenuHeader from "./MenuHeader";
import drinks from "../data/drinks";
import { useEffect, useRef, useState } from "react";
import Items2 from "./Items2";

function Menu() {
  const ANIM_MS = 350;    // čekanje da se zatvori (malo više od 320ms grid animacije)
  const OPEN_DELAY = 80;  // pauza između snap skrola i otvaranja

  const [activeCategory, setActiveCategory] = useState("Piće");
  const [openCategory, setOpenCategory] = useState(null);
  const [pendingCategory, setPendingCategory] = useState(null);

  const scrollContainerRef = useRef(null);
  const headerRefs = useRef({}); // { [category]: HTMLElement }

  const SCROLL_OFFSET = 24; // koliko da bude iznad vrha

  const snapToHeader = (cat) => {
    const container = scrollContainerRef.current;
    const el = headerRefs.current[cat];
    if (!container || !el) return;
    const delta = el.getBoundingClientRect().top - container.getBoundingClientRect().top;
    container.scrollTop = Math.max(0, container.scrollTop + delta - SCROLL_OFFSET);
  };

  const handleToggle = (cat) => {
    // klik na otvoren -> samo zatvori
    if (openCategory === cat) {
      setOpenCategory(null);
      return;
    }

    // ništa otvoreno -> snap skrol pa otvori
    if (!openCategory) {
      snapToHeader(cat);
      setTimeout(() => setOpenCategory(cat), OPEN_DELAY);
      return;
    }

    // nešto je otvoreno -> zatvori, useEffect čeka pa snap + otvori
    setPendingCategory(cat);
    setOpenCategory(null);
  };

  useEffect(() => {
    if (openCategory === null && pendingCategory) {
      const cat = pendingCategory;
      let openTimeout;

      const closeTimeout = setTimeout(() => {
        snapToHeader(cat);
        openTimeout = setTimeout(() => {
          setOpenCategory(cat);
          setPendingCategory(null);
        }, OPEN_DELAY);
      }, ANIM_MS);

      return () => {
        clearTimeout(closeTimeout);
        clearTimeout(openTimeout);
      };
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
