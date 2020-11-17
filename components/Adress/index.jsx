import React from 'react';
import styles from './adress.module.css';

export const Adress = ({ children, cityName }) => {
  return (
    <div className={styles.adressContainer}>
      <h3 className={styles.cityName}>{cityName}</h3>
      <p className={styles.adressLine}>{children}</p>
    </div>
  );
};
