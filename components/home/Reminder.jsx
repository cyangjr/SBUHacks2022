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

    setInterval(() => {
      /* fetch("http://localhost:5000/api/send_message", {
        method: "POST",
        mode: "no-cors", // no-cors, *cors, same-origin
        body: {
          name: "Bobby",
          medication: "Your mother's pill",
          phone_number: "6468244872",
        },
        redirect: "follow",
      }); */

      const formdata = new FormData();
      formdata.append("name", "User");
      formdata.append("medication", props.name);
      formdata.append("phone_number", "6468244872");

      fetch("http://localhost:5000/api/send_message", {
        method: "POST",
        body: formdata,
        redirect: "follow",
      })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }, interval[0] * milliconverter);
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
