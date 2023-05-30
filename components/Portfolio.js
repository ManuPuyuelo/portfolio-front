import styles from "../styles/Portfolio.module.css";
import ProjectsSection from "../components/ProjectsSection";

function Portfolio() {
  return (
    <main className={styles.main}>
      <div className={styles.container}></div>
      <ProjectsSection />
    </main>
  );
}

export default Portfolio;
