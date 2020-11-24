import React from 'react';
import { Container } from '../Container';
import styles from './aboutSection.module.css';

const testImage =
  'https://via.placeholder.com/800x370/bebfde/000000%20?Text=Digital.com%20C/O%20https://placeholder.com/';

export const AboutSection = ({ src = testImage, alt = '' }) => {
  return (
    <Container>
      <div className={styles.infoContainer}>
        <h1>kjbjhb</h1>
      </div>
      <div>
        <img className={styles.image} src={src} alt={alt} />
      </div>
    </Container>
  );
};
