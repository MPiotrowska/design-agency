import React from 'react';
import styles from './miniList.module.css';

export const MiniList = ({
  children,
  caseTitle,
  caseLink,
  white,
  className = '',
}) => {
  return (
    <div className={styles.listContainer}>
      <a target="blank" className={styles.caseLink} href={caseLink}>
        <h1
          className={`  ${className}  ${white ? styles.white : styles.black}`}
        >
          {caseTitle}
        </h1>
      </a>

      <ul className={`  ${className}  ${white ? styles.white : styles.black}`}>
        <li className={styles.listItem}>{children}</li>
      </ul>
    </div>
  );
};
