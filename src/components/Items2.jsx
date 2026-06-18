import { useState } from "react";
import store from "../data/store";
import { useTranslation } from "react-i18next";

function Items2() {
  const [loadedImages, setLoadedImages] = useState({});
  const { t } = useTranslation();

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
      <div className="mt-5 pb-4 flex flex-col gap-4">
        {store.map((element) => (
          <div
            key={element.id}
            className="relative w-full rounded-3xl overflow-hidden shadow-xl bg-[var(--asparagus-950)]"
            style={{ height: "220px" }}
          >
            {/* Spinner */}
            {!loadedImages[element.id] && (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--asparagus-950)] z-10">
                <div className="w-10 h-10 border-4 border-t-[var(--asparagus-300)] border-[var(--asparagus-800)] rounded-full animate-spin" />
              </div>
            )}

            {/* Slika */}
            <img
              src={element.photo}
              alt={t(element.category)}
              className="w-full h-full object-contain"
              style={{ display: loadedImages[element.id] ? "block" : "none" }}
              onLoad={() => handleImageLoad(element.id)}
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(22,36,15,0.92) 0%, rgba(22,36,15,0.4) 50%, transparent 100%)",
              }}
            />

            {/* Tekst */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 flex items-end justify-between">
              <p
                className="text-[var(--asparagus-100)] font-normal leading-tight"
                style={{ fontSize: "1.25rem", letterSpacing: "0.01em" }}
              >
                {t(element.category)}
              </p>
              <span
                className="text-[var(--asparagus-300)] font-semibold tracking-wide"
                style={{ fontSize: "1.1rem" }}
              >
                {element.price}
              </span>
            </div>

          </div>
        ))}
      </div>
  );
}

export default Items2;
