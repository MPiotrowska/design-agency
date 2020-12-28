import React from 'react';
import styles from './formImage.module.css';
import data from '../../mocks/data.json';

export const FormImage = ({ alt = '' }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={data.contact.url} alt={alt} />
    </div>
  );
};
