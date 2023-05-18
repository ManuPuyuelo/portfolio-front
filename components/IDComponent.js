import styles from "../styles/IDComponent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMessage,
  faEnvelope,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

function IDComponent() {
  return (
    <div className={styles.container}>
      <img
        className={styles.photoID}
        src="photoManu.jpg"
        alt="Manu Puyuelo's Avatar"
      ></img>
      <h1 className={styles.title}>Manu Puyuelo</h1>
      <div className={styles.description}>
        <p className={styles.descriptionText}>
          💻 ex-DG @Vizzit
          <br></br>🎓 Diplômé d'emlyon business school
          <br></br>💼 Expérience de 7 ans en Marketing
          <br></br>🚀 Formé par LaCapsule: JS HTML CSS
          <br></br>🔮 Passionné de nouvelles tech
        </p>
      </div>
      <div className={styles.actionsButtons}>
        <a href="tel:+33683519163">
          <FontAwesomeIcon className={styles.actionOneButton} icon={faPhone} />
        </a>
        <a href="sms:+33683519163">
          <FontAwesomeIcon
            className={styles.actionOneButton}
            icon={faMessage}
          />
        </a>
        <a href="mailto:puyuelo.m@gmail.com">
          <FontAwesomeIcon
            className={styles.actionOneButton}
            icon={faEnvelope}
          />
        </a>
      </div>
      <div className={styles.addButtonBlock}>
        <button className={styles.addButton}>
          <FontAwesomeIcon
            className={styles.addButtonIcon}
            icon={faAddressBook}
          />
          <p className={styles.addButtonText}>Ajouter aux contacts</p>
        </button>
      </div>

      <div className={styles.tabBlock}>
        <a
          href="CurriculumVitae-ManuPuyuelo.pdf"
          style={{ textDecoration: "none" }}
        >
          <div className={styles.tab}>
            <img src="previewCV.webp" className={styles.objectPreview}></img>
            <p className={styles.tabText}>Curriculum Vitae</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/puyuelomanu/?originalSubdomain=fr"
          style={{ textDecoration: "none" }}
        >
          <div className={styles.tab}>
            <img src="linkedInIcon.svg" className={styles.objectPreview}></img>
            <p className={styles.tabText}>LinkedIn</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default IDComponent;
