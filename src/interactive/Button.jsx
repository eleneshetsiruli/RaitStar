import React, { useState } from "react";
import styles from "./interactiveCard.module.css";

export const Button = ({ activeBtn, setActiveBtn }) => {
  const myArr = [];
  for (let i = 1; i <= 5; i++) {
    myArr.push(i);
  }
  function handleClick(num) {
    setActiveBtn(num);
  }

  return (
    <>
      {myArr.map((el) => {
        return (
          <div
            key={el}
            onClick={() => handleClick(el)}
            className={`${
              activeBtn === el ? `${styles.active} ${styles.btn}` : styles.btn
            }`}
          >
            {el}
          </div>
        );
      })}
    </>
  );
};
