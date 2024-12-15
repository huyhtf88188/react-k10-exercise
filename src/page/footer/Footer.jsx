import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <a href="/" className={styles.logoLink}>
            <h4>
              <span className={`${styles.logoH} ${styles.firstLetter}`}>H</span>
              <span className={`${styles.logoH} ${styles.lastLetter}`}>H</span>
            </h4>
          </a>
          <p className={styles.logoDescription}>
            We provide high-quality products with the best service. Contact us
            for more details!
          </p>
        </div>

        <div className={styles.linksSection}>
          <h5 className={styles.sectionTitle}>Quick Links</h5>
          <ul className={styles.linksList}>
            <li>
              <a href="/" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="/products" className={styles.link}>
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.socialSection}>
          <h5 className={styles.sectionTitle}>Follow Us</h5>
          <ul className={styles.socialLinks}>
            <li>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className={styles.contactSection}>
          <h5 className={styles.sectionTitle}>Contact Us</h5>
          <ul className={styles.contactList}>
            <li>Email: support@hhcompany.com</li>
            <li>Phone: 0337852638</li>
            <li>Address: Dong Mo - Chi Lang - Lang Son</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 HH Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
