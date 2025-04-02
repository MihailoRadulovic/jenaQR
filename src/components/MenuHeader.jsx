import { FaInstagram, FaWifi } from "react-icons/fa6";
import jenaLogo from "../images/jenaLogo.jpg";
import Button from "../ui/Button";

function MenuHeader({ activeCategory, setActiveCategory }) {
  const wifiPassword = "jena2020";
  const instagram = "jena_caffe";

  return (
    <>
      <div className="flex items-start gap-3.5 ">
        <img src={jenaLogo} alt="Jena logo" className="w-[40%] rounded-full " />
        <h1 className="text-gray-800 mt-[5%] text-3xl font-bold ">
          Dobrodošli u Jena Kafe!
        </h1>
      </div>
      <div className="text-gray-800">
        <p className="mt-3 text-xl flex gap-2">
          <div className="flex gap-2 items-center">
            <FaWifi className="text-3xl" />
            Wi-Fi password:
          </div>
          <span className="font-bold text-2xl text-gray-800">
            {" "}
            {wifiPassword}
          </span>
        </p>
        <p className="mt-3 text-xl flex gap-2">
          <div className="flex gap-2 items-center">
            <FaInstagram className="text-3xl" /> Instagram:
          </div>
          <a
            className="text-gray-800 hover:text-gray-950 font-semibold text-2xl"
            href={`https://www.instagram.com/${instagram}`}
          >
            {" "}
            @{instagram}
          </a>
        </p>
      </div>

      <div className="flex gap-3.5 mt-4">
        <Button
          active={activeCategory === "Piće"}
          setActive={() => setActiveCategory("Piće")}
        >
          Piće
        </Button>
        <Button
          active={activeCategory === "Pekara"}
          setActive={() => setActiveCategory("Pekara")}
        >
          Pekara
        </Button>
      </div>
    </>
  );
}

export default MenuHeader;
