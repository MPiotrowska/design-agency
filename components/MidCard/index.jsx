import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import styles from './midCard.module.css';
import data from '../../mocks/data.json';

export const MidCard = () => {
  return (
    <Container fullWidth>
      <Container className={styles.container}>
        <h1 className={styles.title}>{data.title.content}</h1>
        <div className={styles.cardContainer}>
          {data.midCards.map((midcard) => (
            <div key={midcard.url}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src={midcard.url}
                  alt={midcard.altText}
                />
              </div>
              <a target="blank" className={styles.caseLink} href={midcard.link}>
                <h3 className={styles.caseTitle}>{midcard.title}</h3>
              </a>
              {midcard.cardContent ? (
                <p className={styles.cardContent}>{midcard.cardContent}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};
