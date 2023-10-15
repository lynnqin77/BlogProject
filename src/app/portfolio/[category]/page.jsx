import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.Category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <button url="#" className={styles.btn}>
              see more
            </button>
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
