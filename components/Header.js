import styles from "../styles/Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className={styles.headercontainer}>
      <div className={styles.HeaderRightMenu}>
        <FontAwesomeIcon className={styles.icons} icon={faBars} />
      </div>
      <h1 className={styles.title}>PORTFOLIO</h1>
      <div className={styles.HeaderRightMenu}>
        <FontAwesomeIcon className={styles.icons} icon={faUser} />
        <FontAwesomeIcon className={styles.icons} icon={faLocationDot} />
        <FontAwesomeIcon className={styles.icons} icon={faBagShopping} />
      </div>
    </div>
  );
}

export default Header;
