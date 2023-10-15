"use client";
import Image from "next/image";
import styles from "./page.module.css";
import hero from "public/hero.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Take your digital product's design to the next level
        </h1>
        <p className={styles.description}>
          Turn your idea to real world. join us on a journey to unlock the power
          of innovation.
        </p>
        <button
          className={styles.btn}
          onClick={() => router.push("/portfolio")}
        >
          See our works
        </button>
      </div>
      <div className={styles.item}></div>
      <Image src={hero} className={styles.img} />
    </div>
  );
}
