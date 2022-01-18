import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

const SideData = () => {
  return (
    <div className={utilStyles.sideContainer}>
      <Image
        priority
        src="/images/pp.jpeg"
        className={utilStyles.profilePicture}
        height={300}
        width={300}
        alt={"Miguel Molina"}
      />

      <section className={utilStyles.headingMobile}>
        <h1 className={utilStyles.headingTitle}>Miguel Molina</h1>
        <p>Web Developer · Front end</p>
        <p>
          Developer and technology enthusiast. Always seeking to improve new
          technics, practices and skills.
        </p>
      </section>

      <section className={utilStyles.section}>
        <p>
          <b className={utilStyles.boldPersonalInfo}>Location</b>
          <br />
          Rosario - Santa Fe, Argentina
        </p>
        <p>
          <b className={utilStyles.boldPersonalInfo}>Phone</b>
          <br />
          <a href="tel:+543416475901" className={utilStyles.linkedInfo}>(+54) 341 6475901</a>
        </p>
        <p>
          <b className={utilStyles.boldPersonalInfo}>Email</b>
          <br />
          <a href="miguem1994@gmail.com" className={utilStyles.linkedInfo}>miguem1994@gmail.com</a>
        </p>
      </section>

      <section className={utilStyles.section}>
        <h2 className={utilStyles.titleInfo}>Languages</h2>
        <p>English</p>
        <p>Spanish</p>
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
  );
};

export default SideData;
