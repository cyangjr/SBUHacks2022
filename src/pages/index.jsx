import { useState, useRef, useEffect } from "react";
import styles from "../../styles/Home.module.css";

import Navbar from "../../components/global/Navbar";
import Reminder from "../../components/home/Reminder";

import plus_svg from "../../public/svgs/plus-sign.svg";

export default function index() {
  const [reminderArray, setReminderArray] = useState([]);
  const data = [0];

  const [modelClicked, setModelClicked] = useState(true);
  let name = "";

  async function submitReminder(e) {
    e.preventDefault();
    alert(`So your name is ${e.target.name.value}`);
    /* fetch("", {
      body: {
        name: 
      }
    }) */
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div
          className={styles.add_container}
          onClick={() => setModelClicked(!modelClicked)}
        >
          <div className={styles.svg_container}>
            <img src={plus_svg.src} alt="Add" />
          </div>
          <div className={styles.add_note_container}>
            <input type="text" placeholder="click to add a reminder..." />
          </div>
        </div>

        <div className={styles.reminder_container}>
          {data.map((e) => {
            return <Reminder reminderID={e} />;
          })}
        </div>

        <div className={`${modelClicked ? styles.model : styles.model_none}`}>
          <form onSubmit={submitReminder}>
            <div className={styles.labels}>
              <label htmlFor="name">name</label>
              <label htmlFor="description">description</label>
              <label htmlFor="dosage">dosage</label>
              <label htmlFor="interval">interval</label>
              <label htmlFor="count">supply</label>
              <label htmlFor="startDate">start date</label>
              <label htmlFor="endDate">end date</label>
            </div>

            <div className={styles.text}>
              <input type="text" id="name" name="name" required />
              <input type="text" id="description" name="description" required />
              <input type="number" id="dosage" name="dosage" required />
              <input type="text" id="interval" name="interval" required />
              <input type="number" id="count" name="count" required />
              <input
                type="datetime-local"
                id="startDate"
                name="startDate"
                required
              />
              <input
                type="datetime-local"
                id="endDate"
                name="endDate"
                required
              />
            </div>

            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
