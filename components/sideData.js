import Image from "next/image";
import styles from "./sideData.module.css";
import LangButton from "./langButton";

const SideData = ({ interests, intereses, setLang, lang }) => {

  /* English */
  return lang == "en" ? (
    <div className={styles.sideContainer}>
      <div className={styles.containerProfilePicture}>
        <Image
          priority
          src="/images/profilePic.jpeg"
          className={styles.profilePicture}
          height={300}
          width={300}
          alt={"Miguel Molina profile pic"}
        />
      </div>
      <section className={styles.heading}>
        <h1 className={styles.headingTitle}>Miguel Molina</h1>
        <p>Web Developer · Front end</p>
        <LangButton lang={lang} setLang={setLang} />
        <p className={styles.interestDescription}>{interests}</p>
      </section>

      <section className={styles.section}>
        <p>
          <b className={styles.boldPersonalInfo}>Location</b>
          <br />
          Neuquen - Neuquen, Argentina
        </p>
        <p>
          <b className={styles.boldPersonalInfo}>Phone</b>
          <br />
          <a href="tel:+5493416475901" className={styles.linkedInfo}>
            (+54) 9 341 6475901
          </a>
        </p>
        <p>
          <b className={styles.boldPersonalInfo}>Email</b>
          <br />
          <a href="mailto:miguem1994@gmail.com" className={styles.linkedInfo}>
            miguem1994@gmail.com
          </a>
        </p>
        <div className={styles.socialLinksContainer}>
          <a href="https://github.com/MigueM" target="_blank">
            <Image
              priority
              src="/images/github.svg"
              height={24}
              width={24}
              alt={"github"}
            />
          </a>
          <a href="www.linkedin.com/in/miguel-molina-7143b61b5" target="_blank">
            <Image
              priority
              src="/images/linkedIn.svg"
              height={24}
              width={24}
              alt={"linkedIn"}
            />
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.titleInfo}>Languages</h2>
        <p style={{cursor: "pointer"}} onClick={() => setLang("en")}>English</p>
        <p style={{cursor: "pointer"}} onClick={() => setLang("es")}>Spanish</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.titleInfo}>Skills</h2>
        <p>ReactJS</p>
        <p>NextJS</p>
        <p>JavaScript</p>
        <p>Typescript</p>
        <p>Figma 
          <a className={styles.cvButton} href='https://www.figma.com/file/22dODX0ZQ8vu1JZhtCQM5y/CV?type=design&node-id=576%3A149&mode=design&t=G0jlLjheQZ8cwVvm-1' target="_blank">
          CV
          </a>
        </p>
        <p>ARcore</p>
        <p>HTML / CSS</p>
        <p>Git</p>
        <p>CI/CD</p>
        <p>Agile and SCRUM methodologies</p>
        <p>Adobe Design Suite</p>
        <p>Blender</p>
        <p>Fusion360</p>
      </section>
    </div>

  ) : (

    /* Español */
    <div className={styles.sideContainer}>
      <div className={styles.containerProfilePicture}>
        <Image
          priority
          src="/images/profilePic.jpeg"
          className={styles.profilePicture}
          height={300}
          width={300}
          alt={"Miguel Molina profile pic"}
        />
      </div>

      <section className={styles.heading}>
        <h1 className={styles.headingTitle}>Miguel Molina</h1>
        <p>Web Developer · Front end</p>
        <LangButton lang={lang} setLang={setLang} />
        <p className={styles.interestDescription}>{intereses}</p>
      </section>

      <section className={styles.section}>
        <p>
          <b className={styles.boldPersonalInfo}>Locación</b>
          <br />
          Neuquen - Neuquen, Argentina
        </p>
        <p>
          <b className={styles.boldPersonalInfo}>Telefono</b>

          <br />
          <a href="tel:+5493416475901" className={styles.linkedInfo}>
            (+54) 9 341 6475901
          </a>
        </p>
        <p>
          <b className={styles.boldPersonalInfo}>Email</b>
          <br />
          <a href="miguem1994@gmail.com" className={styles.linkedInfo}>
            miguem1994@gmail.com
          </a>
        </p>
        <div className={styles.socialLinksContainer}>
          <a href="https://github.com/MigueM" target="_blank">
            <Image
              priority
              src="/images/github.svg"
              height={24}
              width={24}
              alt={"github"}
            />
          </a>
          <a href="www.linkedin.com/in/miguel-molina-7143b61b5" target="_blank">
            <Image
              priority
              src="/images/linkedIn.svg"
              height={24}
              width={24}
              alt={"linkedIn"}
            />
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.titleInfo}>Lenguajes</h2>
        <p style={{cursor: "pointer"}} onClick={() => setLang("en")}>Ingles</p>
        <p style={{cursor: "pointer"}} onClick={() => setLang("es")}>Español</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.titleInfo}>Skills</h2>
        <p>ReactJS</p>
        <p>NextJS</p>
        <p>JavaScript</p>
        <p>Typescript</p>
        <p>Figma 
          <a className={styles.cvButton} href='https://www.figma.com/file/22dODX0ZQ8vu1JZhtCQM5y/CV?type=design&node-id=576%3A149&mode=design&t=G0jlLjheQZ8cwVvm-1' target="_blank">
            CV
          </a>
        </p>
        <p>ARcore</p>
        <p>HTML / CSS</p>
        <p>Git</p>
        <p>CI/CD</p>
        <p>Agile y SCRUM methodologies</p>
        <p>Adobe Design Suite</p>
        <p>Fusion360</p>
        <p>Blender</p>
      </section>
    </div>
  );
};

export default SideData;
