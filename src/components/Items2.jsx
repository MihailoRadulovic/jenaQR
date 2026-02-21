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
    <div className="grid grid-cols-2 mt-5 gap-2">
      {store.map((element) => (
        <div
          key={element.id}
          className="bg-[var(--asparagus-950)] text-[var(--asparagus-100)]
          text-center rounded-2xl shadow-md p-1"
        >
          <div
            className="w-full h-40 relative rounded-t-2xl
          flex items-center justify-center"
          >
            {!loadedImages[element.id] && (
              <div
                className="absolute z-10 w-10 h-10 border-4 border-t-lime-950
               border-gray-300 rounded-full animate-spin"
              ></div>
            )}
            <img
              src={element.photo}
              alt={t(element.category)}
              className="w-full h-full object-cover rounded-2xl"
              style={{ display: loadedImages[element.id] ? "block" : "none" }}
              onLoad={() => handleImageLoad(element.id)}
            />
          </div>
          <p className="font-light text-xl">{t(element.category)}</p>
          <p className="font-light text-xl mt-1">{element.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Items2;
