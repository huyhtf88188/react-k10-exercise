import { Link } from "react-router-dom";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className=" d-flex justify-content-between align-items-center">
        <div className={styles.logo}>
          <Link to="/">HH</Link>
        </div>

        <div className="navbar">
          <ul className="d-flex">
            <li>
              <Link to="/homepage">Home</Link>
            </li>
            <li>
              <Link to="/productsclient">Products</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
