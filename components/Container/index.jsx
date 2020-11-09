import React from 'react';
import styles from './container.module.css';

export const Container = ({
  children,
  fullWidth,
  className = '',
  ...props
}) => {
  return (
    <div
      {...props}
      className={`wrapper ${className} ${
        fullWidth ? styles.fullWidth : styles.standard
      }`}
    >
      {children}
    </div>
  );
};
