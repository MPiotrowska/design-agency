import React from 'react';
import styles from './firmDescription.module.css';

export const FirmDescription = ({ children }) => {
  return <p className={styles.textStyle}>{children}</p>;
};
