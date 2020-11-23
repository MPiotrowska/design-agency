import React from 'react';
import styles from './formImage.module.css';

const testImage =
  'https://via.placeholder.com/550x800/bebfde/000000%20?Text=Digital.com%20C/O%20https://placeholder.com/';

export const FormImage = ({ src = testImage, alt = '' }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={src} alt={alt} />
    </div>
  );
};
