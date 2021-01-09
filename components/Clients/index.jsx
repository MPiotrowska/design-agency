import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Section } from '../Section';
import styles from './clients.module.css';
import data from '../../mocks/data.json';
import { Carousel } from '../Carousel';

export const Clients = () => {
  return (
    <Container fullWidth style={{ backgroundColor: '#f6f7fb' }}>
      <Container>
        <h1 className={styles.purpose}>
          These are some of our most renowned clients worldwide.
        </h1>
        <div className={styles.flexContainer}>
          <FlexBox
            className={styles.logosContainer}
            justifyContent="space-between"
          >
            {data.images.map((image, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Section key={`${image.url}-${i}`}>
                <img src={image.url} alt={image.altText} />
              </Section>
            ))}
          </FlexBox>
        </div>
        <FlexBox
          justifyContent="space-between"
          className={styles.logosContainer}
        >
          {data.logos.map((logo, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Section key={`${logo.url}-${i}`}>
              <img width={200} height={80} src={logo.url} alt={logo.altText} />
            </Section>
          ))}
        </FlexBox>

        <Section maxWidth="100%" display="flex" justifyContent="center">
          <img
            className={styles.award}
            src={data.award.url}
            alt={data.award.altText}
          />
        </Section>
        <Carousel />
        <Section maxWidth="100%" display="flex" justifyContent="center">
          <img
            className={styles.rating}
            src={data.rating.url}
            alt={data.rating.altText}
          />
        </Section>
      </Container>
    </Container>
  );
};
