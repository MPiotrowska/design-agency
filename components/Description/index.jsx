import React from 'react';
import styles from './description.module.css';

export const Description = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};
