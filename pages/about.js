import React from 'react';
import { Container } from '../components/Container';
import { ContactUs } from '../components/ContactUs';
import { FlexBox } from '../components/FlexBox';
import { Section } from '../components/Section';
import { AboutSection } from '../components/AboutSection';

import styles from '../styles/Home.module.css';
import aboutStyles from '../components/AboutSection/aboutSection.module.css';
import { MiniList } from '../components/MiniList';
import miniLIstStyles from '../components/MiniList/miniList.module.css';

const About = () => {
  return (
    <main className={styles.main}>
      <Container fullWidth>
        <AboutSection />
      </Container>
      <Container fullWidth style={{ backgroundColor: '#102990' }}>
        <Container style={{ backgroundColor: '#102990' }}>
          <h3 className={aboutStyles.description}>How we do it</h3>
          <h1 className={aboutStyles.purpose}>
            {' '}
            Strategy, clarity and purpose
          </h1>
          <FlexBox justifyContent="space-between">
            <Section>
              <MiniList
                white
                className={miniLIstStyles.title}
                caseTitle="Digital products →"
              >
                {' '}
                <ul white>
                  <li>● Brand Strategy</li>
                  <li>● Research</li>
                  <li>● Naming</li>
                  <li>● Brand Identity Systems</li>
                  <li>● Copywriting</li>
                  <li>● Information Architecture</li>
                  <li>● Web Design</li>
                </ul>
              </MiniList>
            </Section>
            <Section>
              <MiniList
                white
                className={miniLIstStyles.title}
                caseTitle="Branding →"
              >
                <ul white>
                  <li>● Brand Strategy</li>
                  <li>● Research</li>
                  <li>● Naming</li>
                  <li>● Brand Identity Systems</li>
                  <li>● Copywriting</li>
                  <li>● Information Architecture</li>
                  <li>● Web Design</li>
                </ul>
              </MiniList>
            </Section>
            <Section>
              <MiniList
                white
                className={miniLIstStyles.title}
                caseTitle="Communication →"
              >
                {' '}
                <ul white>
                  <li>● Brand Strategy</li>
                  <li>● Research</li>
                  <li>● Naming</li>
                  <li>● Brand Identity Systems</li>
                  <li>● Copywriting</li>
                  <li>● Information Architecture</li>
                  <li>● Web Design</li>
                </ul>
              </MiniList>
            </Section>
          </FlexBox>
        </Container>
      </Container>
      <Container fullWidth>snkscncn</Container>

      <Container fullWidth style={{ backgroundColor: '#102990' }}>
        <ContactUs caseLink="/contact" caseTitle="Let’s talk. Contact Us." />
      </Container>
    </main>
  );
};

export default About;
