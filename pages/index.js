import Layout from "../components/layout";
import SideData from "../components/sideData";
import TimeLine from "../components/timeLine";
import utilStyles from "../styles/utils.module.css";

const education = [
  {
    date: "2021",
    title: "UX UI design",
    subtitle: "Coder House",
  },
  {
    date: "2020",
    title: "Advanced Javascript",
    subtitle: "Educacion IT",
  },
  {
    date: "2019",
    title: "International Bartender",
    subtitle: "Liceo Gastronomico",
  },
  {
    date: "2014 - Today",
    title: "Computer systems analyst",
    subtitle: "IPS",
  },
  {
    date: "2011 - 2014",
    title: "Systems Engineering (unfinished)",
    subtitle: "UTN (Universidad Tecnologica Nacional)",
  },
  {
    date: "2006 - 2011",
    title: "Natural Science bachelor",
    subtitle: "Jean Piaget",
  },
  {
    date: "2011",
    title: "C1 Advanced English",
    subtitle: "CES (Center of English Studies)",
  },
];

const experience = [
  {
    date: "2021",
    title: "Fullstack ecommerce",
    subtitle: "Psychedelic seeds",
  },
  {
    date: "2020",
    title: "Backend and mailing functionality",
    subtitle: "Vanzini propiedades",
  },
  {
    date: "2019",
    title: "AR demo",
    subtitle: "Penca",
  },
  {
    date: "2019",
    title: "Fullstack Intranet",
    subtitle: "Fundar",
  },
  {
    date: "2018",
    title: "Frontend Lab analisys system",
    subtitle: "Hospital Britanico",
  },
  {
    date: "2017",
    title: "Frontend Stock control system",
    subtitle: "321 distribuciones",
  },
  {
    date: "2016",
    title: "Frontend Showroom",
    subtitle: "Fortuna Muebles",
  },
  {
    date: "2016",
    title: "Frontend ecommerce",
    subtitle: "Ahorrativa",
  },
];

export default function Home() {
  return (
    <Layout>
      <div className={utilStyles.homeContainer}>
        <SideData />

        <div className={utilStyles.mainCVContainer}>
          <section className={utilStyles.heading}>
            <h1 className={utilStyles.headingTitle}>Miguel Molina</h1>
            <p>Web Developer · Front end</p>
            <p>
              Developer and technology enthusiast. Always seeking to improve new
              technics, practices and skills.
            </p>
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
