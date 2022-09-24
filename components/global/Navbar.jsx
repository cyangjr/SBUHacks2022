import React from "react";
import styles from "../../styles/Navbar.module.css";

export default function navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h1>Forget Med-not</h1>
      </div>

      <div className={styles.link_container}>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <div className={styles.profile}></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
