import React from 'react';
import styles from "./LongArrows.module.css"
import LongArrowLeft from "public/images/arrows/LongArrowLeft.svg";
import LongArrowRight from "public/images/arrows/LongArrowRight.svg";


function LongArrows({ onLeftArrowClick, onRightArrowClick }: any) {
  return (
    <div className={styles.arrows}>
      <button
        className={styles.button}
        onClick={() => onLeftArrowClick()}>
        <LongArrowLeft className={styles.arrow} />
      </button>

      <button
        className={styles.button}
        onClick={() => onRightArrowClick()}>
        <LongArrowRight className={styles.arrow} />
      </button>
    </div>
  );
}

export default LongArrows;