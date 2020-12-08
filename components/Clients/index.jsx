import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Section } from '../Section';
import styles from './clients.module.css';
import data from '../../mocks/data.json';

export const Clients = () => {
  return (
    <Container fullWidth style={{ backgroundColor: '#f6f7fb' }}>
      <Container>
        <h1 className={styles.purpose}>
          {' '}
          These are some of our most renowned clients worldwide.
        </h1>
        <FlexBox justifyContent="space-between">
          {data.images.map((image) => (
            <Section>
              <img src={image.url} alt={image.altText} />
            </Section>
          ))}
        </FlexBox>
        <FlexBox justifyContent="space-between">
          {data.logos.map((logo) => (
            <Section>
              <img width={200} height={80} src={logo.url} alt={logo.altText} />
            </Section>
          ))}
        </FlexBox>

        <Section maxWidth="100%" display="flex" justifyContent="center">
          <img src={data.award.url} alt={data.award.altText} />
        </Section>
      </Container>
    </Container>
  );
};
