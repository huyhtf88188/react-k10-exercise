import { NavLink } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#0" className="logo-link">
            <h4>
              <span className="logo-h">H</span>
              <span className="logo-h">H</span>
            </h4>
          </a>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="/admin/products">DashBroadPage</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Products</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
