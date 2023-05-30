import styles from "../styles/Portfolio.module.css";
import ProjectsSection from "../components/ProjectsSection";

function Portfolio() {
  return (
    <main className={styles.main}>
      <ProjectsSection />
    </main>
  );
}

export default Portfolio;
