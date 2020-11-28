import React from 'react';
import styles from './miniList.module.css';

export const MiniList = ({ caseTitle, white, className = '' }) => {
  return (
    <div className={styles.listContainer}>
      <h1 className={`  ${className}  ${white ? styles.white : styles.black}`}>
        {caseTitle}
      </h1>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Coca Cola</li>
      </ul>
    </div>
  );
};
