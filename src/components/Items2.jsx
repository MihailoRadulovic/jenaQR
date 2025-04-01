import { useEffect, useState } from "react";
import store from "../data/store";

function Items2() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-3 mt-5 gap-2">
      {store.map((element) => (
        <div
          key={element.id}
          className="border-3 border-lime-950 bg-gray-300 text-center rounded-2xl shadow-md p-0.5"
        >
          <img
            src={element.photo}
            alt="element"
            className="w-full h-40 object-cover rounded-2xl"
            onLoad={handleImageLoad}
            style={{ filter: isLoading ? "blur(10px)" : "none" }}
          />
          <p className="font-semibold text-xl">{element.category}</p>
          <p className="font-bold text-xl mt-2 ">{element.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Items2;
