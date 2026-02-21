import { useState } from "react";
import { FaInstagram, FaWifi } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
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
          className="grid grid-cols-[auto_1fr] items-center gap-x-4 cursor-pointer active:opacity-70 transition-opacity"
          onClick={handleCopyWifi}
        >
          <div className="flex items-center gap-2 text-base">
            <FaWifi className="text-xl" />
            {t("wifi")}:
          </div>
          <span className="font-medium text-lg text-gray-800 flex items-center gap-2">
            {wifiPassword}
            {copied && (
              <span className="text-sm text-[var(--asparagus-600)] flex items-center gap-1">
                <FaCheck className="text-xs" />
              </span>
            )}
          </span>
        </div>

        <div className="grid grid-cols-[auto_1fr] items-center gap-x-4">
          <div className="flex items-center gap-2 text-base">
            <FaInstagram className="text-xl" />
            Instagram:
          </div>
          <a
            className="text-gray-950 font-medium text-lg"
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{instagram}
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between mt-1">
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

        <div className="flex items-center gap-2">
          <Language />
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
