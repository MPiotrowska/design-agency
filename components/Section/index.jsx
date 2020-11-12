import React from 'react';
import styles from './section.module.css';

export const Section = ({ children }) => {
  return <div className={styles.sectionContainer}>{children}</div>;
};
