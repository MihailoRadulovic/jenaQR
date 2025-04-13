import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa6";
import drinksIcons from "../data/drinksIcons";

function TopOfItem({ photo, typeOfDrink, icon }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation();

  const drink = drinksIcons.find((drink) => drink.category === typeOfDrink);
  const Icon = drink ? drink.icon : null;

  return (
    <>
      <div
        className="bg-[var(--asparagus-950)] w-full mx-auto h-23 mt-5 rounded-3xl 
      flex items-center  relative  shadow-lg"
      >
        {/* {!isLoaded && (
          // <div className="absolute z-10 w-10 h-10 border-4 border-t-lime-950 border-gray-300 rounded-full animate-spin"></div>
          <div className="absolute inset-0 mt-[5%] ml-[5%] z-10">
            <div className="w-10 h-10 border-4 border-t-lime-950 border-gray-300 rounded-full animate-spin"></div>
          </div>
        )}

        <img
          src={photo}
          alt="cup of coffe"
          onLoad={() => setIsLoaded(true)}
          className="h-full aspect-square rounded-l-3xl object-cover"
        /> */}
        {Icon && (
          <Icon className="text-5xl ml-[5%] text-[var(--asparagus-100)]" />
        )}

        <div className="ml-auto pr-2 h-full flex items-center justify-end w-full text-2xl text-[var(--asparagus-100)] ">
          <p className=" mr-2 font-normal text-right break-words pr-2">
            {t(typeOfDrink)}
          </p>
          <FaChevronDown className="text-xl" />
        </div>
      </div>
    </>
  );
}

export default TopOfItem;
