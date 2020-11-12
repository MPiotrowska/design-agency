import React from 'react';
import styles from './description.module.css';

export const Description = ({ children, white }) => {
  return <p className={`${white ? styles.white : styles.black}`}>{children}</p>;
};
