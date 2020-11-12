import React from 'react';
import styles from './title.module.css';

export const Title = ({ children, white }) => {
  return (
    <h1 className={`${white ? styles.white : styles.black}`}>{children}</h1>
  );
};
