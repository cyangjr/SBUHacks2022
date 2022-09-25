import React from "react";
import styles from "../../styles/Sidenav.module.css";
import { navData } from "../../src/lib/navData";

export default function Sidenav() {
  return (
    <>
      <div>
        <button className={styles.menuBtn}>
          <img src="" />
        </button>
        {navData.map((item) => {
          return (
            <div key={item.id} className={styles.sideitem}>
              <span className={styles.linkText}>{item.text}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
