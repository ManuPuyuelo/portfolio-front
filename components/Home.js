import styles from "../styles/Home.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.firstSection}>
        <div className={styles.container1}>
          <h1 className={styles.title}>
            Développeur freelance<br></br>7 ans d'XP en Marketing
          </h1>
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
        <div className={styles.container2}></div>
      </div>
    </main>
  );
}

export default Home;
