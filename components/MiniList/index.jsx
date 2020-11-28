import React from 'react';
import styles from './miniList.module.css';

export const MiniList = ({ children, caseTitle, white, className = '' }) => {
  return (
    <div className={styles.listContainer}>
      <h1 className={`  ${className}  ${white ? styles.white : styles.black}`}>
        {caseTitle}
      </h1>
      <ul className={`  ${className}  ${white ? styles.white : styles.black}`}>
        <li className={styles.listItem}>{children}</li>
      </ul>
    </div>
  );
};
