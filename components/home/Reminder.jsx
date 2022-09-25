import styles from "../../styles/Reminder.module.css";

export default function reminder({ reminderID }) {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}></div>
      <div className={styles.text_container}>
        <p>reminder with id {reminderID}</p>
      </div>
    </div>
  );
}
