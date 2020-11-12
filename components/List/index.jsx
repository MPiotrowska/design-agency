import React from 'react';
import styles from './list.module.css';

export const List = ({ children, caseTitle, white, className = '' }) => {
  return (
    <div className={styles.listContainer}>
      <h1
        className={` title ${className}  ${
          white ? styles.white : styles.black
        }`}
      >
        {caseTitle}
      </h1>
      <p
        className={`paragraphContainer ${white ? styles.white : styles.black}`}
      >
        {children}
      </p>
    </div>
  );
};
