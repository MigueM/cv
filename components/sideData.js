import Image from "next/image";
import utilStyles from "./sideData.module.css";

const SideData = ({ interests, intereses, setLang, lang }) => {
  /* English */
  return lang == "en" ? (
    <div className={utilStyles.sideContainer}>
      <div className={utilStyles.containerProfilePicture}>
        <Image
          priority
          src="/images/profilePic.jpeg"
          className={utilStyles.profilePicture}
          height={300}
          width={300}
          alt={"Miguel Molina profile pic"}
        />
      </div>
      <section className={utilStyles.heading}>
        <h1 className={utilStyles.headingTitle}>Miguel Molina</h1>
        <p>Web Developer · Front end</p>
        <p className={utilStyles.interestDescription}>{interests}</p>
      </section>

      <section className={utilStyles.section}>
        <p>
          <b className={utilStyles.boldPersonalInfo}>Location</b>
          <br />
          Neuquen - Neuquen, Argentina
        </p>
        <p>
          <b className={utilStyles.boldPersonalInfo}>Phone</b>
          <br />
          <a href="tel:+5493416475901" className={utilStyles.linkedInfo}>
            (+54) 9 341 6475901
          </a>
        </p>
        <p>
          <b className={utilStyles.boldPersonalInfo}>Email</b>
          <br />
          <a href="mailto:miguem1994@gmail.com" className={utilStyles.linkedInfo}>
            miguem1994@gmail.com
          </a>
        </p>
      </section>

      <section className={utilStyles.section}>
        <h2 className={utilStyles.titleInfo}>Languages</h2>
        <p style={{cursor: "pointer"}} onClick={() => setLang("en")}>English</p>
        <p style={{cursor: "pointer"}} onClick={() => setLang("es")}>Spanish</p>
      </section>

      <section className={utilStyles.section}>
        <h2 className={utilStyles.titleInfo}>Skills</h2>
        <p>ReactJS</p>
        <p>NextJS</p>
        <p>JavaScript</p>
        <p>Typescript</p>
        <p>Figma</p>
        <p>ARcore</p>
        <p>HTML / CSS</p>
        <p>Git</p>
        <p>Agile and SCRUM methodologies</p>
      </section>
    </div>
  ) : (
    /* Español */
    <div className={utilStyles.sideContainer}>
      <div className={utilStyles.containerProfilePicture}>
        <Image
          priority
          src="/images/profilePic.jpeg"
          className={utilStyles.profilePicture}
          height={300}
          width={300}
          alt={"Miguel Molina profile pic"}
        />
      </div>

      <section className={utilStyles.heading}>
        <h1 className={utilStyles.headingTitle}>Miguel Molina</h1>
        <p>Web Developer · Front end</p>

        <p className={utilStyles.interestDescription}>{intereses}</p>
      </section>

      <section className={utilStyles.section}>
        <p>
          <b className={utilStyles.boldPersonalInfo}>Locación</b>
          <br />
          Rosario - Santa Fe, Argentina
        </p>
        <p>
          <b className={utilStyles.boldPersonalInfo}>Telefono</b>

          <br />
          <a href="tel:+5493416475901" className={utilStyles.linkedInfo}>
            (+54) 9 341 6475901
          </a>
        </p>
        <p>
          <b className={utilStyles.boldPersonalInfo}>Email</b>
          <br />
          <a href="miguem1994@gmail.com" className={utilStyles.linkedInfo}>
            miguem1994@gmail.com
          </a>
        </p>
      </section>

      <section className={utilStyles.section}>
        <h2 className={utilStyles.titleInfo}>Lenguajes</h2>
        <p style={{cursor: "pointer"}} onClick={() => setLang("en")}>Ingles</p>
        <p style={{cursor: "pointer"}} onClick={() => setLang("es")}>Español</p>
      </section>

      <section className={utilStyles.section}>
        <h2 className={utilStyles.titleInfo}>Skills</h2>
        <p>ReactJS</p>
        <p>NextJS</p>
        <p>JavaScript</p>
        <p>Typescript</p>
        <p>Figma</p>
        <p>ARcore</p>
        <p>HTML / CSS</p>
        <p>Git</p>
        <p>Agile y SCRUM methodologies</p>
      </section>
    </div>
  );
};

export default SideData;
