import styles from "../styles/Home.module.css";

import IntroductionSection from "../components/IntroductionSection";
import ProjectsSection from "../components/ProjectsSection";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <main className={styles.main}>
      <IntroductionSection />
      <ProjectsSection />
    </main>
  );
}

export default Home;
