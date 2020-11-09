import React from 'react';
import styles from './title.module.css';

export const Title = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};
