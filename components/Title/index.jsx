import React from 'react';
import { Description } from '../Description';
import { Section } from '../Section';
import styles from './title.module.css';
import data from '../../mocks/data.json';

export const Title = () => {
  return (
    <Section>
      <h1 className={styles.white}>{data.designTitle.content}</h1>
      <Description white />
    </Section>
  );
};
