import React from 'react';
import styles from "./CustomBtn.module.css"

function CustomBtn({ text }: any) {
  return (
    <button className={styles.btn}>
      {text}
    </button>
  );
}

export default CustomBtn;