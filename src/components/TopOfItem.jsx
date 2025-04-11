import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa6";

function TopOfItem({ photo, typeOfDrink }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <div className="bg-lime-950 w-full mx-auto h-23 mt-5 rounded-3xl flex items-center relative border-3 border-gray-300 shadow-lg">
        {!isLoaded && (
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
        />

        <div className="ml-auto pr-2 h-full flex items-center justify-end w-full text-2xl text-gray-300 ">
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
