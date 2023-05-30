import styles from "../styles/Home.module.css";
import ProjectCard from "../components/ProjectCard";
import TopProjectCard from "../components/TopProjectCard";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const projects = [
    {
      title: "Freshnews",
      shortDescription: "Site web & mobile d’actualité en temps réel",
      pictureURL: "/card/Freshnews.png",
      longDescription: [
        "Flux d’info via API : newsapi",
        "Selection du flux d’info de The Verge",
        "Possibilité de s’inscrire / se connecter",
        "Possibilité d’enregistrer des articles",
      ],
      githubFrontLink: "https://github.com/ManuPuyuelo/freshnews-frontend",
      githubBackLink: "https://github.com/ManuPuyuelo/freshnews-backend",
      URL: "https://freshnews.manupuyuelo.com/",
      technologies: [
        `/card/technologo/React.png`,
        `/card/technologo/CSS.png`,
        `/card/technologo/Javascript.png`,
        `/card/technologo/Next.png`,
        `/card/technologo/Node.png`,
        `/card/technologo/Express.png`,
        `/card/technologo/MongoDB.png`,
      ],
    },
    {
      title: "Mymoviz",
      shortDescription: "Webapp de suivi de ses films préférés",
      pictureURL: "/card/Mymoviz.png",
      longDescription: [
        "Flux de films via API : themoviedb",
        "Possibilité de créer une wishlist",
        "Possibilité d’ajouter les films vus",
        "Possibilité d’évaluer les films vus",
      ],
      githubFrontLink: "https://github.com/ManuPuyuelo/mymoviz-frontend",
      githubBackLink: "https://github.com/ManuPuyuelo/mymoviz-backend",
      URL: "https://mymoviz.manupuyuelo.com/",
      technologies: [
        `/card/technologo/React.png`,
        `/card/technologo/CSS.png`,
        `/card/technologo/Javascript.png`,
        `/card/technologo/Next.png`,
        `/card/technologo/Node.png`,
        `/card/technologo/Express.png`,
      ],
    },
    {
      title: "123Soleil",
      shortDescription: "Site web de suivi météorologique",
      pictureURL: `/card/123soleil.png`,
      longDescription: [
        "Flux météo via API : openweathermap",
        "Possibilité d’ajout de villes",
        "Possibilité de suppression de villes",
        "Enregistrement de la météo en bdd",
      ],
      githubFrontLink: "https://github.com/ManuPuyuelo/123soleil-frontend",
      githubBackLink: "https://github.com/ManuPuyuelo/123soleil-backend",
      URL: "https://123soleil.manupuyuelo.com/",
      technologies: [
        `/card/technologo/HTML.png`,
        `/card/technologo/CSS.png`,
        `/card/technologo/Javascript.png`,
        `/card/technologo/Node.png`,
        `/card/technologo/Express.png`,
        `/card/technologo/MongoDB.png`,
      ],
    },
    {
      title: "Sweetweet",
      shortDescription: "Webapp sociale d’échange d’opinion",
      pictureURL: "/card/Sweetweet.png",
      longDescription: [
        "Possibilité de s’inscrire / se connecter",
        "Possibilité de voir les tweets échangés",
        "Possibilité de liker les tweets",
        "Possibilité de voir les tendances via #",
      ],
      githubFrontLink: "https://github.com/ManuPuyuelo/sweetweet-frontend",
      githubBackLink: "https://github.com/ManuPuyuelo/sweetweet-backend",
      URL: "https://sweetweet.manupuyuelo.com/",
      technologies: [
        `/card/technologo/React.png`,
        `/card/technologo/CSS.png`,
        `/card/technologo/Javascript.png`,
        `/card/technologo/Next.png`,
        `/card/technologo/Node.png`,
        `/card/technologo/Express.png`,
        `/card/technologo/MongoDB.png`,
      ],
    },
    {
      title: "Trainlife",
      shortDescription: "Site web & mobile de réservation de train",
      pictureURL: `/card/Trainlife.png`,
      longDescription: [
        "Possibilité de rechercher un train",
        "Possibilité de selection du trajet",
        "Possibilité d’ajout dans le panier",
        "Possibilité de ’réservation’",
      ],
      githubFrontLink: "https://github.com/ManuPuyuelo/trainlife-frontend",
      githubBackLink: "https://github.com/ManuPuyuelo/trainlife-backend",
      URL: "https://trainlife.manupuyuelo.com/",
      technologies: [
        `/card/technologo/HTML.png`,
        `/card/technologo/CSS.png`,
        `/card/technologo/Javascript.png`,
        `/card/technologo/Node.png`,
        `/card/technologo/Express.png`,
        `/card/technologo/MongoDB.png`,
      ],
    },
  ];

  const firstProject = {
    title: "Ourson",
    shortDescription:
      "App mobile de suivi de nutrition durant l'éveil de l'enfant",
    pictureURL: `/card/squareOursonTransparent.png`,
    longDescription: [
      "Accès à un menu complet pour la semaine",
      "Trouver une recette avec ce que l’on a chez soi",
      "Retrouver ses recettes favorites",
      "Suivre les aliments que son enfant a déjà goûté",
      "Accès à la liste de course de la semaine",
      "Possibilité de rechercher une recette",
    ],
    githubFrontLink: "https://github.com/ManuPuyuelo/ourson.app-frontend",
    githubBackLink: "https://github.com/ManuPuyuelo/ourson.app-backend-",
    URL: "https://ourson.app/",
    technologies: [
      `/card/technologo/ReactNative.png`,
      `/card/technologo/CSS.png`,
      `/card/technologo/Javascript.png`,
      `/card/technologo/Node.png`,
      `/card/technologo/Express.png`,
      `/card/technologo/MongoDB.png`,
    ],
  };

  let leftProjects = "";
  let rightProjects = "";

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

  const topProject = <TopProjectCard {...firstProject} />;

  return (
    <main className={styles.main}>
      <div className={styles.firstSection}>
        <div className={styles.firstContainer}>
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
                <p>ME CONTACTER</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectSection}>
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
    </main>
  );
}

export default Home;
