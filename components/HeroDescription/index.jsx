import React from 'react';
import styles from './heroDescription.module.css';
import data from '../../mocks/data.json';

export const HeroDescription = () => {
  return <p className={styles.black}>{data.heroDescription.content}</p>;
};
