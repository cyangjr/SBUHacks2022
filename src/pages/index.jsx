import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/global/Navbar";
import Reminder from "../../components/home/Reminder";

export default function index() {
  const data = [0, 1, 2];

  return (
    <>
      <Navbar></Navbar>
      {data.map((e) => {
        return <Reminder reminderID={e} />;
      })}
    </>
  );
}
