import React from 'react';
import styles from './miniCard.module.css';

const testImage =
  'https://via.placeholder.com/250x370/bebfde/000000%20?Text=Digital.com%20C/O%20https://placeholder.com/';

export const MiniCard = ({
  src = testImage,
  alt = '',
  caseLink,
  caseTitle,
}) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={src} alt={alt} />
      <a target="blank" className={styles.caseLink} href={caseLink}>
        <h3 className={styles.caseTitle}>{caseTitle}</h3>
      </a>
    </div>
  );
};
