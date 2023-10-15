"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import aboutImg from "public/about.png";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={aboutImg} fill={true} className={styles.img} />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.tile}>Who we are</h1>
          <p className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            aut? Rem optio explicabo, tempora possimus reprehenderit vel nihil
            debitis fuga at? Nulla placeat quasi ipsa aliquam quidem magni
            ducimus ipsam. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            nihil in adipisci velit, impedit molestiae architecto! Aliquam error
            cupiditate impedit provident, non vel, mollitia delectus iusto
            laborum ducimus quo doloribus!
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What we do</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni
            id veniam commodi nihil ratione numquam accusamus quisquam ea neque,
            similique optio. Numquam voluptate impedit voluptates modi ut unde
            non.
            <br />
            <br />
            Dynamic website
            <br />
            <br />
            Fast and handy
            <br />
            <br />
            Mobile app
            <br />
            <br />
          </p>
          <br />
          <button
            className={styles.btn}
            onClick={() => router.push("/contact")}
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
