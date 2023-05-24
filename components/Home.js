import styles from "../styles/Home.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.firstSection}>
        <div className={styles.container1}>
          <h1 className={styles.title}>Développeur Fullstack</h1>
          <p className={styles.titleText}>
            JS, HTML, CSS<br></br>React, React Native, Express
          </p>
          <div className={styles.heroButtons}>
            <div className={styles.heroButton}>
              <a href="/portfolio">
                <p>DERNIERS PROJETS</p>
              </a>
            </div>
            <div className={styles.heroButton}>
              <a href="/contact">
                <p>CONTACTEZ-MOI</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.container2}>
          <div className={styles.projectImage1}></div>
          <div className={styles.projectDescription1}>
            <h2>L'expérience home cinéma Devialet.</h2>
            <p>
              Oubliez tout ce que vous avez vu et entendu jusqu'à présent. En
              proposant des configurations home-cinéma, conçues pour vous
              immerger au plus profond du son, Devialet vous embarque dans des
              expériences audiovisuelles hors du commun.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
