import React from 'react';
import { Container } from '../components/Container';
import { ContactUs } from '../components/ContactUs';

import styles from '../styles/Home.module.css';

const About = () => {
  return (
    <main className={styles.main}>
      <Container fullWidth>
        <Container>p</Container>
      </Container>
      <Container fullWidth style={{ backgroundColor: '#102990' }}>
        <ContactUs caseLink="/contact" caseTitle="Let’s talk. Contact Us." />
      </Container>
    </main>
  );
};

export default About;
