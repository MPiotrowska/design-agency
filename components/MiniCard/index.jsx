import React from 'react';
import styles from './miniCard.module.css';
import data from '../../mocks/data.json';
import { FlexBox } from '../FlexBox';
import { Container } from '../Container';

export const MiniCard = () => {
  return (
    <Container fullWidth>
      <Container>
        <h2 className={styles.title}>{data.insight.content}</h2>
        <FlexBox justifyContent="space-around">
          {data.miniCards.map((miniCard) => (
            <div key={miniCard.url} className={styles.cardContainer}>
              <img
                className={styles.image}
                src={miniCard.url}
                alt={miniCard.altText}
              />
              <a
                target="blank"
                className={styles.caseLink}
                href={miniCard.link}
              >
                <h3 className={styles.caseTitle}>{miniCard.title}</h3>
              </a>
            </div>
          ))}
        </FlexBox>
      </Container>
    </Container>
  );
};
