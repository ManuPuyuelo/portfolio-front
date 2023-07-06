import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMessage,
  faEnvelope,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.photoID}>
          <Player
            autoplay
            loop
            src=" https://assets4.lottiefiles.com/packages/lf20_z9gwyc2b.json"
            style={{
              height: "240px",
              width: "240px",
              position: "absolute",
              top: "-50px",
              left: "-50px",
            }}
          ></Player>
        </div>

        <h1 className={styles.title}>Manu Puyuelo</h1>
        <div className={styles.description}>
          <p className={styles.descriptionText}>
            <span style={{ fontWeight: "bold" }}>👨‍💻 Développeur Fullstack</span>
            <span style={{ fontStyle: "italic" }}>
              <br></br>JavaScript, HTML5, CSS3, React, React Native
              <br></br> Node.js, Express, MongoDB
            </span>
            <br></br>
            <br></br>
            👨‍🎓 Diplômé d'emlyon business school & La Capsule
            <br></br>
            💼 7 ans d’expériences Produit & Marketing
          </p>
        </div>
        <div className={styles.actionsButtons}>
          <a href="tel:+33683519163">
            <FontAwesomeIcon
              className={styles.actionOneButton}
              icon={faPhone}
            />
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
          <a href="Flowcontact.vcf" style={{ textDecoration: "none" }}>
            <button className={styles.addButton}>
              <FontAwesomeIcon
                className={styles.addButtonIcon}
                icon={faAddressBook}
              />
              <p className={styles.addButtonText}>Ajouter aux contacts</p>
            </button>
          </a>
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
              <img
                src="linkedInIcon.svg"
                className={styles.objectPreview}
              ></img>
              <p className={styles.tabText}>LinkedIn</p>
            </div>
          </a>
          <a
            href="https://github.com/ManuPuyuelo"
            style={{ textDecoration: "none" }}
          >
            <div className={styles.tab}>
              <img src="github-mark.svg" className={styles.objectPreview}></img>
              <p className={styles.tabText}>Github</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;
