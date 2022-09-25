import styles from "../../styles/Reminder.module.css";

export default function reminder({ props }) {
  console.log(props);
  return (
    <div className={styles.container}>
      <div className={styles.img_container}></div>
      <div className={styles.text_container}>
        <p>{props.name}</p>
      </div>
    </div>
  );
}
