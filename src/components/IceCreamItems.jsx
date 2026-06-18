import { useState } from "react";
import { useTranslation } from "react-i18next";
import icecream from "../data/icecream";

function IceCreamItems() {
  const [loadedImages, setLoadedImages] = useState({});
  const { t } = useTranslation();

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="mt-5 pb-4 grid grid-cols-2 gap-2">
      {icecream.map((element) => (
        <div
          key={element.id}
          className="bg-[var(--asparagus-950)] text-[var(--asparagus-100)] text-center rounded-2xl shadow-md p-1"
        >
          <div className="w-full h-40 relative rounded-t-2xl flex items-center justify-center">
            {!loadedImages[element.id] && (
              <div className="absolute z-10 w-10 h-10 border-4 border-t-lime-950 border-gray-300 rounded-full animate-spin" />
            )}
            <img
              src={element.photo}
              alt={t(element.category)}
              className="w-full h-full object-cover object-bottom rounded-2xl"
              style={{ display: loadedImages[element.id] ? "block" : "none" }}
              onLoad={() => handleImageLoad(element.id)}
            />
          </div>

          <p className="font-light text-lg mt-1 leading-snug px-1 h-14 flex items-center justify-center">
            {t(element.category)}
          </p>

          <div className="flex justify-center gap-3 mt-1 mb-1">
            <span className="text-sm font-normal text-[var(--asparagus-200)]">
              {t("icecream_size_s")}: <span className="font-semibold text-[var(--asparagus-100)]">210 din</span>
            </span>
            <span className="text-sm font-normal text-[var(--asparagus-200)]">
              {t("icecream_size_m")}: <span className="font-semibold text-[var(--asparagus-100)]">370 din</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IceCreamItems;
