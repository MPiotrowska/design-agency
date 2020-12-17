import React from 'react';
import { MidCard } from '../components/MidCard';
import { ContactUs } from '../components/ContactUs';
import { Container } from '../components/Container';

import styles from '../styles/Home.module.css';

const caseStudies = () => {
  return (
    <main className={styles.main}>
      <MidCard />
      <Container fullWidth style={{ backgroundColor: '#102990' }}>
        <ContactUs caseLink="/contact" caseTitle="Let’s talk. Contact Us." />
      </Container>
    </main>
  );
};

export default caseStudies;
