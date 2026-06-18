import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa6";
import drinksIcons from "../data/drinksIcons";

function TopOfItem({ typeOfDrink, isOpen }) {
  const { t } = useTranslation();

  const drink = drinksIcons.find((drink) => drink.category === typeOfDrink);
  const Icon = drink ? drink.icon : null;

  return (
    <div
      className={`
        bg-[var(--asparagus-900)]
        w-full mx-auto h-[68px] mt-5
        flex items-center gap-3 px-4 shadow-lg
        transition-all duration-300
        ${isOpen ? "rounded-t-3xl" : "rounded-3xl"}
      `}
    >
      {Icon && (
        <Icon className="text-[40px] text-[var(--asparagus-100)] shrink-0" />
      )}

      <div className="flex-1 flex items-center justify-end gap-2 text-2xl text-[var(--asparagus-100)]">
        <p className="font-normal text-right leading-snug line-clamp-2">
          {t(typeOfDrink)}
        </p>
        <FaChevronDown
          className={`text-xl shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default TopOfItem;
