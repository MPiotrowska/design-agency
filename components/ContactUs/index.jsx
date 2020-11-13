import React from 'react';
import styles from './contactUs.module.css';

export const ContactUs = ({ caseLink, caseTitle }) => {
  return (
    <div className={styles.cardContainer}>
      <a target="blank" className={styles.caseLink} href={caseLink}>
        <h3 className={styles.caseTitle}>{caseTitle}</h3>
      </a>
    </div>
  );
};
