import styles from "../../styles/Home.module.css";

import Navbar from "../../components/global/Navbar";
import Reminder from "../../components/home/Reminder";

import plus_svg from "../../public/svgs/plus-sign.svg";

export default function index() {
  const data = [0, 1, 2];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.add_container}>
          <div className={styles.svg_container}>
            <img className={styles.plus_svg} src={plus_svg.src} alt="Add" />
          </div>
          <p className={styles.add_note}>Click to add a reminder ...</p>
        </div>
        {data.map((e) => {
          return <Reminder reminderID={e} />;
        })}
      </div>
    </>
  );
}
