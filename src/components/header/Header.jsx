import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="" alt="logo" />
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
            <NavLink to="user/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="user/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
