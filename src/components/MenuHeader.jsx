import { FaInstagram, FaWifi } from "react-icons/fa6";
import jenaLogo from "../images/jenaLogo.jpg";
import Button from "../ui/Button";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import { IoLanguageOutline } from "react-icons/io5";

function MenuHeader({ activeCategory, setActiveCategory }) {
  const { t } = useTranslation();
  const wifiPassword = "jena2020";
  const instagram = "jena_caffe";

  return (
    <>
      <div className="flex items-start gap-3.5 ">
        <img
          src={jenaLogo}
          alt="Jena logo"
          className="w-[30%] rounded-full shadow-lg transform transition-all duration-500"
        />
        <h1 className="text-stone-900 mt-0.5 text-[2rem] font-normal">
          {t("welcome")}
        </h1>
      </div>
      <div className="text-gray-800 mt-3 ">
        <div className="flex items-center gap-2 ">
          <IoLanguageOutline className="text-2xl" /> <Language />
        </div>
        <div className=" text-lg flex gap-2">
          <div className="flex gap-2 items-center">
            <FaWifi className="text-2xl" />
            {t("wifi")}:
          </div>
          <span className="font-medium text-xl text-gray-800">
            {" "}
            {wifiPassword}
          </span>
        </div>
        <div className="mt-3 text-lg flex gap-2">
          <div className="flex gap-2 items-center">
            <FaInstagram className="text-2xl" /> Instagram:
          </div>
          <a
            className="text-gray-950 font-semibold text-xl"
            href={`https://www.instagram.com/${instagram}`}
          >
            {" "}
            @{instagram}
          </a>
        </div>
      </div>

      <div className="flex gap-3.5 mt-2">
        <Button
          active={activeCategory === "Piće"}
          setActive={() => setActiveCategory("Piće")}
        >
          {t("drinks")}
        </Button>
        <Button
          active={activeCategory === "Pekara"}
          setActive={() => setActiveCategory("Pekara")}
        >
          {t("bakery")}
        </Button>
      </div>
    </>
  );
}

export default MenuHeader;
