import React from 'react';
import styles from './card.module.css';

const testImage =
  'https://via.placeholder.com/450/bebfde/000000%20?Text=Digital.com%20C/O%20https://placeholder.com/';

export const Card = ({
  children,
  src = testImage,
  alt = '',
  caseLink,
  caseTitle,
}) => {
  return (
    <div className={styles.cardContainer}>
      <img src={src} alt={alt} />
      <a target="blank" className={styles.caseLink} href={caseLink}>
        <h3 className={styles.caseTitle}>{caseTitle}</h3>
      </a>
      <p className={styles.cardContent}>{children}</p>
    </div>
  );
};
