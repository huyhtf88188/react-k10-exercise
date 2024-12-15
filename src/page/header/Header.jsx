import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menuBar}>
        <div className={styles.logo}>
          <a href="/" className={styles.logoLink}>
            <h4>
              <span className={`${styles.logoH} ${styles.firstLetter}`}>H</span>
              <span className={`${styles.logoH} ${styles.lastLetter}`}>H</span>
            </h4>
          </a>
        </div>

        <nav className={styles.navBar}>
          <ul>
            <li>
              <Link className={styles.navLink} to="/homepage">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} to="/homepage">
                Products
              </Link>
            </li>
            <li>
              <a href="#contact" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
          />
          <button className={styles.searchButton}>
            <i className="fas fa-search"></i>
          </button>
          <Link className={styles.navLink} to="/login">
            <i className="fa-solid fa-user"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
