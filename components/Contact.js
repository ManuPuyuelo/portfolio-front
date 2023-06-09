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
  const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:Manu Puyuelo
N:Puyuelo;Manu;;;
UID:c875f339-1cf3-4ab8-af80-181ce6eb0ebb
EMAIL;type=PREF:puyuelo.m@gmail.com
TEL;TYPE=CELL:+33683519163
URL:https://manupuyuelo.com
PHOTO;ENCODING=b;TYPE=JPEG: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
END:VCARD`;

  const vCardDataUri = `data:text/vcard;charset=utf-8,${encodeURIComponent(
    vCardContent
  )}`;

  console.log(vCardDataUri);
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
            👨‍🎓 Diplômé d'emlyon BS & La Capsule
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
          <a href={vCardDataUri} style={{ textDecoration: "none" }}>
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
