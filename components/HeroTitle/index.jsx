import React from 'react';

import styles from './heroTitle.module.css';
import data from '../../mocks/data.json';

export const HeroTitle = () => {
  return <h1 className={styles.black}>{data.heroTitle.content}</h1>;
};
