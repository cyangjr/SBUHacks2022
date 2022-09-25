import { useState, useRef, useEffect } from "react";

import styles from "../../styles/Reminder.module.css";

export default function reminder({ props }) {
  console.log(props);

  function init() {
    const interval = props.interval.split(" ");
    let milliconverter = null;

    if (["s", "sec", "secs", "second", "seconds"].includes(interval[1]))
      milliconverter = 1000;
    else if (["m", "min", "mins", "minute", "minutes"].includes(interval[1]))
      milliconverter = 1000 * 60;
    else if (["h", "hour", "hours"].includes(interval[1]))
      milliconverter = 1000 * 60 * 60;
    else if (["d", "day", "days"].includes(interval[1]))
      milliconverter = 1000 * 60 * 60 * 24;
    else if (["w", "wk", "wks", "week", "weeks"].includes(interval[1]))
      milliconverter = 1000 * 60 * 60 * 24 * 7;

    setTimeout(() => {}, interval[0] * milliconverter);
  }

  useEffect(() => {
    init();
  });

  return (
    <div className={styles.container}>
      <div className={styles.img_container}></div>
      <div className={styles.text_container}>
        <p>{props.name}</p>
      </div>
    </div>
  );
}
