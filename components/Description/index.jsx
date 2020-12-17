import React from 'react';
import styles from './description.module.css';
import data from '../../mocks/data.json';

export const Description = () => {
  return <p className={styles.white}>{data.description.content}</p>;
};
