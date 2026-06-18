import { useState } from "react";
import { FaInstagram, FaWifi } from "react-icons/fa6";
import { FaCheck, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { LuCroissant } from "react-icons/lu";
import { GiIceCreamCone } from "react-icons/gi";
import jenaLogo from "../images/jenaLogo.jpg";
import Button from "../ui/Button";
import Language from "./Language";
import { useTranslation } from "react-i18next";

function MenuHeader({ activeCategory, setActiveCategory }) {
  const { t } = useTranslation();
  const wifiPassword = "jena2020";
  const instagram = "jena_caffe";
  const [copied, setCopied] = useState(false);

  const handleCopyWifi = async () => {
    try {
      await navigator.clipboard.writeText(wifiPassword);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = wifiPassword;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3.5">
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
        <div
          className="grid grid-cols-[auto_1fr] items-center gap-x-4 cursor-pointer active:opacity-70 transition-opacity select-none"
          onClick={handleCopyWifi}
        >
          <div className="flex items-center gap-2 text-base font-light">
            <FaWifi className="text-3xl" />
            {t("wifi")}:
          </div>
          <span className="font-normal text-lg text-gray-800 flex items-center gap-2">
            {wifiPassword}
            {copied ? (
              <span className="text-sm text-[var(--asparagus-600)] flex items-center gap-1">
                <FaCheck className="text-xs" />
                Kopirano!
              </span>
            ) : (
              <IoCopyOutline className="text-base text-gray-400" />
            )}
          </span>
        </div>

        <div className="grid grid-cols-[auto_1fr] items-center gap-x-4">
          <div className="flex items-center gap-2 text-base font-light">
            <FaInstagram className="text-3xl" />
            Instagram:
          </div>
          <a
            className="text-gray-950 font-normal text-lg underline underline-offset-2 decoration-gray-400 hover:decoration-[var(--asparagus-700)] hover:text-[var(--asparagus-700)] active:text-[var(--asparagus-800)] transition-colors duration-200 flex items-center gap-1.5"
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{instagram}
            <FaArrowUpRightFromSquare className="text-xs text-gray-400" />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Language />
        </div>
      </div>

      <div className="flex items-center mt-1 gap-1">
        <Button
          active={activeCategory === "Piće"}
          setActive={() => setActiveCategory("Piće")}
        >
          <BiSolidCoffeeBean className="text-3xl" />
        </Button>
        <Button
          active={activeCategory === "Pekara"}
          setActive={() => setActiveCategory("Pekara")}
        >
          <LuCroissant className="text-3xl" />
        </Button>
        <div className="relative">
          <Button
            active={activeCategory === "Sladoled"}
            setActive={() => setActiveCategory("Sladoled")}
          >
            <GiIceCreamCone className="text-3xl" />
          </Button>
          {activeCategory !== "Sladoled" && (
            <span className="absolute -top-2 -right-1 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none shadow">
              NOVO
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
