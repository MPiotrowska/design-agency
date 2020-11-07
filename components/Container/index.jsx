import React from 'react';
import styles from './container.module.css';

export const Container = ({ children, fullWidth }) => {
  return (
    <div
      className={`wrapper ${fullWidth ? styles.fullWidth : styles.standard}`}
    >
      {children}
    </div>
  );
};
