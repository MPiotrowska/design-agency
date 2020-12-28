import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Section } from '../Section';
import styles from './ourCompany.module.css';
import data from '../../mocks/data.json';

export const OurCompany = ({ alt = '' }) => {
  return (
    <Container fullWidth>
      <Container>
        <FlexBox justifyContent="space-between">
          <Section padding="60px 0px">
            <p className={styles.title}>Our Company</p>
            <h2 className={styles.caseTitle}>
              We are remote and calm design studio.
            </h2>
            <p className={styles.caseParagraph}>
              We don't believe in the grow-or-die culture. At Bardo we are in it
              for the long-term and strive to be meaningful for our clients,
              users and team. Also, we don't restrict our hiring to a small
              geographic region, we want to get the best talent out there.
            </p>
          </Section>
          <img className={styles.image} src={data.ourCompany.url} alt={alt} />
        </FlexBox>
      </Container>
    </Container>
  );
};
