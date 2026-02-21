import Items from "./Items";
import MenuHeader from "./MenuHeader";
import drinks from "../data/drinks";
import { useEffect, useRef, useState } from "react";
import Items2 from "./Items2";

function Menu() {
  const ANIM_MS = 350;

  const [activeCategory, setActiveCategory] = useState("Piće");
  const [openCategory, setOpenCategory] = useState(null);
  const [pendingCategory, setPendingCategory] = useState(null);

  const scrollContainerRef = useRef(null);
  const headerRefs = useRef({}); // { [category]: HTMLElement }
  const pendingScrollTarget = useRef(null);

  const SCROLL_OFFSET = 24; // koliko da bude "još malo više" iznad headera

  const scrollToHeader = (cat, layoutShiftUp = 0) => {
    const container = scrollContainerRef.current;
    const el = headerRefs.current[cat];
    if (!container || !el) return null;

    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    const delta = eRect.top - cRect.top;
    const targetTop = Math.max(0, container.scrollTop + delta - SCROLL_OFFSET - layoutShiftUp);

    container.scrollTo({ top: targetTop, behavior: "smooth" });
    return targetTop;
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

    // nešto je otvoreno -> izračunaj layout shift pa skroluj simultano sa zatvaranjem
    const openEl = headerRefs.current[openCategory];
    const targetEl = headerRefs.current[cat];
    let layoutShift = 0;

    if (openEl && targetEl) {
      const openIsAbove =
        openEl.getBoundingClientRect().top < targetEl.getBoundingClientRect().top;
      if (openIsAbove) {
        const inner = openEl.parentElement?.querySelector(
          ".accordion-grid .accordion-inner"
        );
        layoutShift = inner ? inner.scrollHeight : 0;
      }
    }

    setPendingCategory(cat);
    setOpenCategory(null);

    requestAnimationFrame(() => {
      pendingScrollTarget.current = scrollToHeader(cat, layoutShift);
    });
  };

  useEffect(() => {
    if (openCategory === null && pendingCategory) {
      const cat = pendingCategory;

      const id = setTimeout(() => {
        // Snap na tačnu poziciju pre otvaranja (u slučaju da smooth scroll još traje)
        if (pendingScrollTarget.current !== null) {
          const container = scrollContainerRef.current;
          if (container) {
            container.scrollTo({ top: pendingScrollTarget.current, behavior: "instant" });
          }
          pendingScrollTarget.current = null;
        }

        setOpenCategory(cat);
        setPendingCategory(null);
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
