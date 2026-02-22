import Items from "./Items";
import MenuHeader from "./MenuHeader";
import drinks from "../data/drinks";
import { useCallback, useEffect, useRef, useState } from "react";
import Items2 from "./Items2";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { FaArrowUp } from "react-icons/fa6";
import "./animation.css";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Piće");
  const [openCategory, setOpenCategory] = useState(null);
  const [pendingCategory, setPendingCategory] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollContainerRef = useRef(null);
  const headerRefs = useRef({}); // { [category]: HTMLElement }
  const tabContentRef = useRef(null);

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

  // scroll-to-top visibility
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowScrollTop(container.scrollTop > 200);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll reset pri promeni taba
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [activeCategory]);

  const scrollToTop = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

      <SwitchTransition mode="out-in">
        <CSSTransition
          key={activeCategory}
          classNames="tab-fade"
          timeout={250}
          nodeRef={tabContentRef}
        >
          <div ref={tabContentRef}>
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
        </CSSTransition>
      </SwitchTransition>

      {/* Scroll to top button */}
      <div className="h-0 overflow-visible sticky bottom-4 z-20 flex justify-end pr-2">
        <button
          onClick={scrollToTop}
          className={`w-10 h-10 -translate-y-14 rounded-full bg-[var(--asparagus-600)] text-[var(--asparagus-100)] shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[var(--asparagus-700)] active:scale-95 ${
            showScrollTop
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-sm" />
        </button>
      </div>
    </div>
  );
}

export default Menu;
