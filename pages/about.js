import React from 'react';
import { Container } from '../components/Container';
import { ContactUs } from '../components/ContactUs';
import { MiniList } from '../components/MiniList';
import { Methodologies } from '../components/Methodologies';
import { OurCompany } from '../components/OurCompany';
import { Clients } from '../components/Clients';
import { AboutSection } from '../components/AboutSection';

import styles from '../styles/Home.module.css';
import aboutStyles from '../components/AboutSection/aboutSection.module.css';

import data from '../mocks/data.json';

const About = () => {
  return (
    <main className={styles.main}>
      <Container fullWidth>
        <AboutSection />
      </Container>
      <Container fullWidth style={{ backgroundColor: '#102990' }}>
        <Container
          style={{
            backgroundColor: '#102990',
            paddingTop: '140px',
            paddingBottom: '130px',
          }}
        >
          <h3 className={aboutStyles.description}>
            {data.strategyTitle.subtitle}
          </h3>
          <h1 className={aboutStyles.purpose}>{data.strategyTitle.content}</h1>
          <MiniList />
        </Container>
      </Container>
      <Methodologies />
      <OurCompany />
      <Clients />
      <Container fullWidth style={{ backgroundColor: '#102990' }}>
        <ContactUs caseLink="/contact" caseTitle="Let’s talk. Contact Us." />
      </Container>
    </main>
  );
};

export default About;
