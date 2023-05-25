import styles from "../styles/Home.module.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

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
          <div className={styles.projectImage1}>
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_0sjsnpsr.json"
              style={{ height: "35vw", width: "35vw" }}
            ></Player>
            <div className={styles.projectImage2}></div>
          </div>

          <div className={styles.projectDescription1}>
            <h2>Ourson</h2>
            <p>
              Ourson est la 1ère app intelligente qui vous donne un coup de
              patte concernant l’éveil de votre enfant sur 3 aspects :
              nutrition, suivi du sommeil et activités.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
