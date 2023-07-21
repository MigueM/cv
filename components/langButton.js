import utilStyles from "../styles/utils.module.css";

const LangButton = ({ setLang, lang }) => {
    return lang == "en" ? (
      <button onClick={() => setLang("es")} className={utilStyles.langButton}>
        Español
      </button>
    ) : (
      <button onClick={() => setLang("en")} className={utilStyles.langButton}>
        Ingles
      </button>
    );
  };

  export default LangButton;