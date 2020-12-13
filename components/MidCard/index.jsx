import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import styles from './midCard.module.css';
import data from '../../mocks/data.json';

export const MidCard = () => {
  return (
    <Container fullWidth>
      <Container>
        <h1 className={styles.title}>{data.title.content}</h1>
        <FlexBox justifyContent="space-between">
          {data.midCards.map((midcard) => (
            <div className={styles.cardContainer}>
              <img
                className={styles.imageContainer}
                src={midcard.url}
                alt={midcard.altText}
              />
              <a target="blank" className={styles.caseLink} href={midcard.link}>
                <h3 className={styles.caseTitle}>{midcard.title}</h3>
              </a>
              <p className={styles.cardContent}>{midcard.cardContent}</p>
            </div>
          ))}
        </FlexBox>
      </Container>
    </Container>
  );
};
