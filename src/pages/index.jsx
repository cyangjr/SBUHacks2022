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
            <input type="text" placeholder="Click to add a reminder" />
          </div>
        </div>

        <div className={styles.reminder_container}>
          {data.map((e) => {
            return <Reminder reminderID={e} />;
          })}
        </div>

        <div className={`${modelClicked ? styles.model : styles.model_none}`}>
          <form onSubmit={submitReminder}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <input type="text" id="description" name="description" required />
            </div>

            <div>
              <label htmlFor="dosage">Dosage</label>
              <input type="number" id="dosage" name="dosage" required />
            </div>

            <div>
              <label htmlFor="interval">Interval</label>
              <input type="text" id="interval" name="interval" required />
            </div>

            <div>
              <label htmlFor="count">Count</label>
              <input type="number" id="count" name="count" required />
            </div>

            <div>
              <label htmlFor="startDate">Start Date</label>
              <input
                type="datetime-local"
                id="startDate"
                name="startDate"
                required
              />
            </div>

            <div>
              <label htmlFor="endDate">End Date</label>
              <input
                type="datetime-local"
                id="endDate"
                name="endDate"
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
