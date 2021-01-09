import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import styles from './card.module.css';
import data from '../../mocks/data.json';

export const Card = () => {
  return (
    <Container fullWidth>
      <Container>
        <FlexBox justifyContent="space-around">
          {data.cards.map((card) => (
            <div key={card.title}>
              <div className={styles.cardContainer}>
                <img
                  className={styles.image}
                  src={card.url}
                  alt={card.altText}
                />
              </div>
              <a target="blank" className={styles.caseLink} href={card.link}>
                <h3 className={styles.caseTitle}>{card.title}</h3>
              </a>
              <p className={styles.cardContent}>{card.cardContent}</p>
            </div>
          ))}
        </FlexBox>
      </Container>
    </Container>
  );
};
