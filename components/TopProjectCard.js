import styles from "../styles/ProjectCard.module.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { useState } from "react";

function TopProjectCard(props) {
  const [isActive, setIsActive] = useState(false);
  console.log(props.pictureURL);
  return (
    <div className={`${styles.cardFlipper} ${isActive && styles.active}`}>
      {!isActive ? (
        <div
          className={styles.cardContainerFront}
          style={{ backgroundColor: "#FFDA57" }}
          // style={{ backgroundImage: `url(${props.pictureURL})` }}
        >
          <div className={styles.cardTextGroup}>
            <p className={styles.cardTextTitle}>{props.title}</p>
            <p className={styles.cardTextDescription}>
              {props.shortDescription}
            </p>
          </div>
          <div className={styles.cardButtonsGroup}>
            <div
              className={styles.cardSecondaryButton}
              onClick={() => setIsActive(!isActive)}
            >
              + DE DÉTAILS
            </div>
            <a href={props.githubBackLink} className={styles.cardGithubLink}>
              <div className={styles.cardPrimaryButton}>Y ALLER</div>
            </a>
          </div>
        </div>
      ) : (
        <div className={styles.cardContainerBack}>
          <div className={styles.cardTextGroup}>
            <p className={styles.cardTextTitle}>{props.title}</p>
            <p className={styles.cardTextDescription}>
              {props.shortDescription}
            </p>
            <div className={styles.cardTextDescription}>
              {props.longDescription.map((list, i) => (
                <ul key={i}>
                  <li>{list}</li>
                </ul>
              ))}
            </div>
            <p className={styles.cardSubtitle}>Répertoire GitHub</p>
            <div className={styles.cardGithubButtonsGroup}>
              <a href={props.githubFrontLink} className={styles.cardGithubLink}>
                <div className={styles.cardGithubButton}>BACKEND</div>
              </a>
              <a href={props.githubBackLink} className={styles.cardGithubLink}>
                <div className={styles.cardGithubButton}>FRONTEND</div>
              </a>
            </div>
            <p className={styles.cardSubtitle}>Technologies</p>
            <div className={styles.cardTechnoLogosGroup}>
              {props.technologies.map((list, i) => (
                <div key={i} className={styles.cardTechnoLogo}>
                  <img
                    src={list}
                    alt="tech logo"
                    className={styles.techLogoImg}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.cardButtonsGroup}>
            <div
              className={styles.cardSecondaryButton}
              onClick={() => setIsActive(!isActive)}
            >
              - DE DÉTAILS
            </div>
            <a href={props.githubBackLink} className={styles.cardGithubLink}>
              <div className={styles.cardPrimaryButton}>Y ALLER</div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopProjectCard;
