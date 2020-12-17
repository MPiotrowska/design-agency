import React from 'react';
import styles from './firmDescription.module.css';
import data from '../../mocks/data.json';
import { Container } from '../Container';

export const FirmDescription = () => {
  return (
    <Container fullWidth>
      <Container>
        <p className={styles.textStyle}>{data.firmDescription.content}</p>
      </Container>
    </Container>
  );
};
