import React from 'react';
import { Container } from '../components/Container';

import styles from '../styles/Home.module.css';

const Team = () => {
  return (
    <main className={styles.main}>
      <Container fullWidth>
        <Container />
        <button type="button">team</button>
      </Container>
    </main>
  );
};

export default Team;
