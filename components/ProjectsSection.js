import styles from "../styles/ProjectsSection.module.css";
import ProjectCard from "../components/ProjectCard";
import TopProjectCard from "../components/TopProjectCard";

import firstProject from "../variables/firstProject";
import projects from "../variables/projects";

function ProjectsSection() {
  const topProject = <TopProjectCard {...firstProject} />;

  let leftProjects = [];
  let rightProjects = [];

  projects.map((project, i) => {
    if (
      project.title === "Mymoviz" ||
      project.title === "Trainlife" ||
      project.title === "Sweetweet"
    ) {
      leftProjects = [...leftProjects, <ProjectCard key={i} {...project} />];
    } else if (project.title === "Freshnews" || project.title === "123Soleil") {
      rightProjects = [...rightProjects, <ProjectCard key={i} {...project} />];
    }
  });

  return (
    <div className={styles.projectSection} id="projects">
      <div className={styles.projectContainerLeft}>
        <div className={styles.projectTextLeft}>
          <p>Découvrez mes</p>
          <br></br>
          <p style={{ fontWeight: "bold" }}>derniers projets.</p>
        </div>
        {leftProjects}
      </div>
      <div className={styles.projectContainerRight}>
        <div className={styles.projectTextRight}>
          <p>Découvrez mes</p>
          <br></br>
          <p style={{ fontWeight: "bold" }}>derniers projets.</p>
        </div>
        {topProject}
        {rightProjects}
      </div>
    </div>
  );
}

export default ProjectsSection;
