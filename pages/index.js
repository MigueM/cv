import Layout from "../components/layout";
import SideData from "../components/sideData";
import TimeLine from "../components/timeLine";
import utilStyles from "../styles/utils.module.css";
import {
  experience,
  education,
  interests,
  intereses,
  experiencia,
  educacion,
} from "../components/data";
import { useState } from "react";

const LangButton = ({ setLang, lang }) => {
  return lang == "en" ? (
    <button onClick={() => setLang("es")} className={utilStyles.langButton}>
      🇪🇸
    </button>
  ) : (
    <button onClick={() => setLang("en")} className={utilStyles.langButton}>
      🇬🇧
    </button>
  );
};

export default function Home() {
  const [lang, setLang] = useState("en");
  return (
    <Layout>
      <LangButton lang={lang} setLang={setLang} />
      <div className={utilStyles.homeContainer}>
        <SideData
          interests={interests}
          lang={lang}
          setLang={setLang}
          intereses={intereses}
        />

        <div className={utilStyles.mainCVContainer}>
          <section className={utilStyles.heading}>
            <h1 className={utilStyles.headingTitle}>Miguel Molina</h1>
            <p>Web Developer · Front end</p>
            {lang == "en" ? (
              <p style={{ whiteSpace: "pre-wrap" }}>{interests}</p>
            ) : (
              <p style={{ whiteSpace: "pre-wrap" }}>{intereses}</p>
            )}
          </section>

          <section className={utilStyles.section}>
            {lang == "en" ? (
              <>
                <h2 className={utilStyles.titleHistory}>Experience</h2>
                <TimeLine history={experience} />
                <h2 className={utilStyles.titleHistory}>Education</h2>
                <TimeLine history={education} />
              </>
            ) : (
              <>
                <h2 className={utilStyles.titleHistory}>Experiencia</h2>
                <TimeLine history={experiencia} />
                <h2 className={utilStyles.titleHistory}>Educación</h2>
                <TimeLine history={educacion} />
              </>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
}
