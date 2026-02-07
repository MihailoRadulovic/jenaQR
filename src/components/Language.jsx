import { useTranslation } from "react-i18next";

function Language() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language;

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {/*rounded-2xl shadow-md dark:bg-gray-800 bg-white w-fit px-1*/}
        <div className="flex rounded-2xl gap-2 items-baseline">
          <button
            title="Srpski"
            onClick={() => changeLanguage("sr")}
            className={`w-11 h-11 rounded-full flex items-center justify-center ${
              currentLang === "sr"
                ? "bg-[var(--asparagus-600)]"
                : "bg-[var(--asparagus-900)]"
            }`}
          >
            <img
              src="https://flagcdn.com/24x18/rs.png"
              srcSet="https://flagcdn.com/48x36/rs.png 2x"
              width="24"
              height="24"
              alt="Srpska zastava"
            />
          </button>
          <button
            title="English"
            onClick={() => changeLanguage("uk")}
            className={`w-11 h-11 rounded-full flex items-center justify-center ${
              currentLang === "uk"
                ? "bg-[var(--asparagus-600)]"
                : "bg-[var(--asparagus-900)]"
            }`}
          >
            <img
              src="https://flagcdn.com/16x12/gb.png"
              srcSet="https://flagcdn.com/32x24/gb.png 2x,
    https://flagcdn.com/48x36/gb.png 3x"
              width="24"
              height="24"
              alt="United Kingdom"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Language;
