import React, { useState } from "react";
import styles from "./interactiveCard.module.css";
import img from "../assets/Star.png";
import { Button } from "./Button";
import pay from "../assets/pay.png";

export const InteractiveCard = () => {
  const [hiddenBox, setHiddenBox] = useState(true);
  const [activeBtn, setActiveBtn] = useState(null);
  console.log(activeBtn);
  function handleSubmit() {
    setHiddenBox(false);
  }

  return (
    <>
      {hiddenBox ? (
        <div className={styles.card}>
          <div className={styles.star}>
            <img src={img} alt="star img" />
          </div>
          <h3 className={styles.hedline}>How did we do?</h3>
          <p>
            Please let us know we did with your support request.All feedback is
            appreciated to help us improve our offering
          </p>
          <div className={styles.buttons}>
            <Button activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
          </div>
          <button onClick={handleSubmit} className={styles.submit}>
            S U B M I T
          </button>
        </div>
      ) : (
        <div className={`${styles.card} ${styles.hidden}`}>
          <img className={styles.pay} src={pay} alt="pay img" />
          <div>You selected {activeBtn} of 5</div>
          <h2>Thank you!</h2>
          <p style={{ textAlign: "center" }}>
            We appreciate you taking the time to give a rating, if you ever need
            more support,don't hesitate to get in touch!
          </p>
        </div>
      )}
    </>
  );
};
