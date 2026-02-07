import { FaInstagram, FaWifi } from "react-icons/fa6";
import jenaLogo from "../images/jenaLogo.jpg";
import Button from "../ui/Button";
import Language from "./Language";
import { useTranslation } from "react-i18next";

function MenuHeader({ activeCategory, setActiveCategory }) {
  const { t } = useTranslation();
  const wifiPassword = "jena2020";
  const instagram = "jena_caffe";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3.5 ">
        <img
          src={jenaLogo}
          alt="Jena logo"
          className="w-[30%] rounded-full shadow-lg transform transition-all duration-500"
        />
        <h1 className="text-stone-900 mt-0.5 text-2xl font-normal">
          {t("welcome")}
        </h1>
      </div>

      <div className="text-gray-800 flex flex-col gap-1.5">
        {/* <div className=" text-base flex gap-6">
          <div className="flex gap-2 items-center">
            <FaWifi className="text-xl" />
            {t("wifi")}:
          </div>
          <span className="font-medium text-lg text-gray-800">
            {" "}
            {wifiPassword}
          </span>
        </div> */}
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-4">
          <div className="flex items-center gap-2 text-base">
            <FaWifi className="text-xl" />
            {t("wifi")}:
          </div>
          <span className="font-medium text-lg text-gray-800">
            {wifiPassword}
          </span>
        </div>

        {/* <div className="text-lg flex gap-6">
          <div className="flex gap-2 items-center text-base">
            <FaInstagram className="text-xl" /> Instagram:
          </div>
          <a
            className="text-gray-950 font-medium text-lg"
            href={`https://www.instagram.com/${instagram}`}
          >
            {" "}
            @{instagram}
          </a>
        </div> */}
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-4">
          <div className="flex items-center gap-2 text-base">
            <FaInstagram className="text-xl" />
            Instagram:
          </div>
          <a
            className="text-gray-950 font-medium text-lg"
            href={`https://www.instagram.com/${instagram}`}
          >
            @{instagram}
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between mt-1">
        {/* LEVO – dugmad */}
        <div className="flex gap-1">
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

        {/* DESNO – jezik */}
        <div className="flex items-center gap-2">
          <Language />
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
