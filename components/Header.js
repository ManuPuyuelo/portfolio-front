import styles from "../styles/Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className={styles.headercontainer}>
      <div className={styles.HeaderRightMenu}>
        <nav>
          <a href="/" className={styles.brandNameLong}>
            Manu Puyuelo
          </a>
          <a href="/" className={styles.brandNameShort}>
            M.P.
          </a>
        </nav>
      </div>
      <h1 className={styles.title}>PORTFOLIO</h1>
      <div className={styles.HeaderRightMenu}>
        <nav>
          <div className={styles.navigationMenu}>
            <ul>
              <div>
                <a href="/">Accueil</a>
              </div>
              <div>
                <a href="/portfolio">Portfolio</a>
              </div>
              <div>
                <a href="/contact">Contact</a>
              </div>
            </ul>
            <button className={styles.hamburger}>
              <FontAwesomeIcon className={styles.icons} icon={faBars} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
