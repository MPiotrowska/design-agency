import React from 'react';
import Link from 'next/link';

import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { FlexBox } from '../components/FlexBox';
import { Title } from '../components/Title';
import { List } from '../components/List';
import { MiniCard } from '../components/MiniCard';
import { ContactUs } from '../components/ContactUs';
import { FirmDescription } from '../components/FirmDescription';
import { HeroDescription } from '../components/HeroDescription';
import { HeroTitle } from '../components/HeroTitle';

// styles
import styles from '../styles/Home.module.css';
import containerStyles from '../components/Container/container.module.css';

export default function Home() {
  return (
    <>
      <Container fullWidth style={{ position: 'relative' }}>
        <img src="/images/orange-large.jpg" alt="orange" />
        <Container className={containerStyles.heroText}>
          <Container>
            <HeroTitle />
            <HeroDescription />
            <Link href="/contact">
              <a className={styles.buttonLink}>Contact</a>
            </Link>
          </Container>
        </Container>
      </Container>
      <FirmDescription />
      <main className={styles.main}>
        <Card />
        <Container fullWidth style={{ backgroundColor: '#102990' }}>
          <Container style={{ backgroundColor: '#102990' }}>
            <FlexBox justifyContent="space-around">
              <Title />
              <List white />
            </FlexBox>
          </Container>
        </Container>
        <MiniCard />
        <Container fullWidth style={{ backgroundColor: '#102990' }}>
          <ContactUs caseLink="/contact" caseTitle="Let’s talk. Contact Us." />
        </Container>
      </main>
    </>
  );
}
