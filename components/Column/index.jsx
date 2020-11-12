import React from 'react';
import styles from './column.module.css';

export const List = ({ children }) => {
  return <div className={styles.column}>{children}</div>;
};
