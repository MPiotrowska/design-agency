import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Section } from '../Section';
import styles from './clients.module.css';

export const Clients = () => {
  return (
    <Container fullWidth>
      <Container>
        <h1 className={styles.purpose}>
          {' '}
          These are some of our most renowned clients worldwide.
        </h1>
        <FlexBox justifyContent="space-between">
          <Section>
            <img src="/images/blue.svg" alt="logo" />
          </Section>
          <Section>
            <img src="/images/blue.svg" alt="logo" />
          </Section>
          <Section>
            <img src="/images/blue.svg" alt="logo" />
          </Section>
          <Section>
            <img src="/images/blue.svg" alt="logo" />
          </Section>
        </FlexBox>
        <FlexBox justifyContent="space-between">
          <Section>
            <img src="/images/blue.svg" alt="logo" />
          </Section>
          <Section>
            <img src="/images/blue.svg" alt="logo" />
          </Section>
          <Section>
            <img src="/images/blue.svg" alt="logo" />
          </Section>
          <Section>
            <img src="/images/blue.svg" alt="logo" />
          </Section>
        </FlexBox>
      </Container>
    </Container>
  );
};
