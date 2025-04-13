import { useTranslation } from "react-i18next";

function Language() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language;

  return (
    <div className="flex items-center gap-2">
      <p className="text-lg font-normal">{t("language")}</p>
      <div className="flex">
        {/*rounded-2xl shadow-md dark:bg-gray-800 bg-white w-fit px-1*/}
        <div className="flex rounded-2xl w-full gap-2 px-2 py-2 items-baseline">
          <button
            title="Srpski"
            onClick={() => changeLanguage("sr")}
            className={`border-2 p-1.5 bg-gray-100 dark:bg-gray-700 rounded-full  ${
              currentLang === "sr" ? "border-lime-800" : "border-transparent"
            }`}
          >
            <img
              src="https://flagcdn.com/24x18/rs.png"
              srcSet="https://flagcdn.com/48x36/rs.png 2x"
              width="25"
              height="24"
              alt="Srpska zastava"
            />
          </button>
          <button
            title="English"
            onClick={() => changeLanguage("en")}
            className={`border-2 p-1.5 bg-gray-100 dark:bg-gray-700 rounded-full ${
              currentLang === "en" ? "border-lime-800" : "border-transparent"
            }`}
          >
            <img
              src="https://flagcdn.com/24x18/us.png"
              srcSet="https://flagcdn.com/48x36/us.png 2x"
              width="25"
              height="24"
              alt="US Flag"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Language;
