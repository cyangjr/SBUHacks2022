import { useState, useRef, useEffect } from "react";
import styles from "../../styles/Home.module.css";

import Navbar from "../../components/global/Navbar";
import Reminder from "../../components/home/Reminder";

import plus_svg from "../../public/svgs/plus-sign.svg";

export default function index() {
  const [reminderArray, setReminderArray] = useState([
    {
      name: "Vitamin C",
      description: "Vitamin C is very healthy!",
      dosage: "1",
      interval: "5 mins",
      count: "100",
      startDate: "2022-09-25T02:41",
      endDate: "2022-09-30T02:46",
    },
  ]);

  const [modelClicked, setModelClicked] = useState(false);
  let name = "";

  async function submitReminder(e) {
    e.preventDefault();
    const form = e.target;

    function scuffedFunction() {
      setModelClicked(false);

      setReminderArray([
        ...reminderArray,
        {
          name: form.name.value,
          description: form.description.value,
          dosage: form.dosage.value,
          interval: form.interval.value,
          count: form.count.value,
          startDate: form.startDate.value,
          endDate: form.endDate.value,
        },
      ]);

      return new Promise((resolve) => resolve("please save me"));
    }

    await scuffedFunction().then(() => {
      form.reset();
    });
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div
          className={styles.add_container}
          onClick={() => setModelClicked(true)}
        >
          <div className={styles.svg_container}>
            <img src={plus_svg.src} alt="Add" />
          </div>
          <div className={styles.add_note_container}>
            <input type="text" placeholder="Click to add a reminder" />
          </div>
        </div>

        <div className={styles.reminder_container}>
          {reminderArray.map((e) => {
            return <Reminder key={e.name} props={e} />;
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
