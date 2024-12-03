import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import "../../index.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className="logo">
          <h4>
            <span className="logo-h">H</span>
            <span className="logo-h">H</span>
          </h4>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/categories">Category</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/user/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
