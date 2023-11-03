import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import clsx from "clsx";
import RootLayout from "./layout";

export default function Home() {
  return (
    <main
      styles={{
        position: "fixed",
      }}
      className={styles.main}
    ></main>
  );
}
