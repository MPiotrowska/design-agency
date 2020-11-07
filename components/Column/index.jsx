import React from 'react';
import styles from './column.module.css';

export const Column = ({ children }) => {
  return <div className={styles.column}>{children}</div>;
};
