import Layout from "../components/layout";
import SideData from "../components/sideData";
import TimeLine from "../components/timeLine";
import utilStyles from "../styles/utils.module.css";
import { experience, education, interests } from "../components/data";

export default function Home() {
  return (
    <Layout>
      <div className={utilStyles.homeContainer}>
        <SideData />

        <div className={utilStyles.mainCVContainer}>
          <section className={utilStyles.heading}>
            <h1 className={utilStyles.headingTitle}>Miguel Molina</h1>
            <p>Web Developer · Front end</p>
            <p style={{whiteSpace: 'pre-wrap'}}>{interests}</p>
          </section>

          <section className={utilStyles.section}>
            <h2 className={utilStyles.titleHistory}>Experience</h2>
            <TimeLine history={experience} />
            <h2 className={utilStyles.titleHistory}>Education</h2>
            <TimeLine history={education} />
          </section>
        </div>
      </div>
    </Layout>
  );
}
