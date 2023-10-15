import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Contact Information",
  description: "This is Contact page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Keep In Touch</h1>
      <div className={styles.content}>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textarea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.btn}>Send</button>
        </form>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
