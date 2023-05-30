import styles from "../styles/IntroductionSection.module.css";

function IntroductionSection() {
  return (
    <div className={styles.firstSection}>
      <div className={styles.firstContainer}>
        <h1 className={styles.title}>Développeur Fullstack</h1>
        <p className={styles.titleText}>
          JS, HTML, CSS<br></br>React, React Native, Express
        </p>
        <div className={styles.heroButtons}>
          <div className={styles.heroButton}>
            <a href="#projects">
              <p>DERNIERS PROJETS</p>
            </a>
          </div>
          <div className={styles.heroButton}>
            <a href="/contact">
              <p>ME CONTACTER</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionSection;
