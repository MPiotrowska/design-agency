import React from 'react';
import { Container } from '../Container';
import styles from './aboutSection.module.css';
import data from '../../mocks/data.json';

export const AboutSection = ({ alt = '' }) => {
  return (
    <Container>
      <div className={styles.infoContainer}>
        <h1 className={styles.text}>
          V-Studio is a product design and branding studio based in Barcelona.
        </h1>
      </div>
      <div>
        <img className={styles.image} src={data.about.url} alt={alt} />
      </div>
    </Container>
  );
};
