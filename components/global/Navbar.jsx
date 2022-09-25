import React from "react";
import logo from "../../public/imgs/logo.png";
import pfp from "../../public/imgs/default_pfp.jpg";
import styles from "../../styles/Navbar.module.css";

export default function navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <img src={logo.src} alt="" />
      </div>
      <div className={styles.title_container}>
        <h1>forget med-not</h1>
      </div>

      <div className={styles.link_container}>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <div className={styles.profile}>
              <img className={styles.pfp} src={pfp.src} alt="Profile Picture" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
