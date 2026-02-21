import Items from "./Items";
import MenuHeader from "./MenuHeader";
import drinks from "../data/drinks";
import { useEffect, useRef, useState } from "react";
import Items2 from "./Items2";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Piće");
  const [openCategory, setOpenCategory] = useState(null);
  const [pendingCategory, setPendingCategory] = useState(null);

  const scrollContainerRef = useRef(null);
  const headerRefs = useRef({}); // { [category]: HTMLElement }

  const SCROLL_OFFSET = 24;

  const scrollToHeader = (cat) => {
    const container = scrollContainerRef.current;
    const el = headerRefs.current[cat];
    if (!container || !el) return;

    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();

    const delta = eRect.top - cRect.top;
    const targetTop = container.scrollTop + delta - SCROLL_OFFSET;

    container.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
  };

  const handleToggle = (cat) => {
    // klik na otvoren -> zatvori
    if (openCategory === cat) {
      setOpenCategory(null);
      return;
    }

    // nista nije otvoreno -> otvori
    if (!openCategory) {
      setOpenCategory(cat);
      return;
    }

    // nesto je otvoreno -> prvo zatvori, pa otvori trazeni
    setPendingCategory(cat);
    setOpenCategory(null);
  };

  // kada se zatvori stara kategorija, otvori pending
  const handleExited = () => {
    if (pendingCategory) {
      const cat = pendingCategory;
      setPendingCategory(null);
      setOpenCategory(cat);
    }
  };

  // skroluj do novootvorene kategorije
  useEffect(() => {
    if (openCategory) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToHeader(openCategory));
      });
    }
  }, [openCategory]);

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
            onExited={handleExited}
            onEntered={() => scrollToHeader(drink.category)}
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
