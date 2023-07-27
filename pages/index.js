import Layout from "../components/layout";
import SideData from "../components/sideData";
import TimeLine from "../components/timeLine";
import Styles from "../styles/utils.module.css";
import {
  experience,
  education,
  interests,
  intereses,
  experiencia,
  educacion,
} from "../components/data";
import { useState } from "react";
import LangButton from "../components/langButton";


export default function Home() {
  const [lang, setLang] = useState("es");
  return (
    <Layout>
      <div className={Styles.homeContainer}>
        <SideData
          interests={interests}
          lang={lang}
          setLang={setLang}
          intereses={intereses}
        />

        <div className={Styles.mainCVContainer}>
          <section className={Styles.heading}>
            <h1 className={Styles.headingTitle}>Miguel Molina</h1>
            <p>Web Developer · Front end</p>
            <LangButton lang={lang} setLang={setLang} />
            {lang == "en" ? (
              <p style={{ whiteSpace: "pre-wrap" }}>{interests}</p>
            ) : (
              <p style={{ whiteSpace: "pre-wrap" }}>{intereses}</p>
            )}
          </section>

          <section className={Styles.section}>
            {lang == "en" ? (
              <>
                <h2 className={Styles.titleHistory}>Experience</h2>
                <span className={Styles.moreDetails}>Click for more details</span>
                <TimeLine history={experience} />
                <h2 className={Styles.titleHistory}>Education</h2>
                <span className={Styles.moreDetails}>Click for more details</span>
                <TimeLine history={education} />
              </>
            ) : (
              <>
                <h2 className={Styles.titleHistory}>Experiencia</h2>
                <span className={Styles.moreDetails}>Click para más detalles</span>
                <TimeLine history={experiencia} />
                <h2 className={Styles.titleHistory}>Educación</h2>
                <span className={Styles.moreDetails}>Click para más detalles</span>
                <TimeLine history={educacion} />
              </>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
}
