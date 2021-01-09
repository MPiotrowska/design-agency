import React from 'react';
import Link from 'next/link';
import { InView } from 'react-intersection-observer';

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
import { useScrollDispatch } from '../lib/scrollContext';

// styles
import styles from '../styles/Home.module.css';
import containerStyles from '../components/Container/container.module.css';

export default function Home() {
  const dispatch = useScrollDispatch();
  const handleChange = (inView) => {
    const action = { type: 'scroll', payload: inView };
    dispatch(action);
  };
  return (
    <>
      <Container fullWidth style={{ position: 'relative' }}>
        <InView as="div" onChange={handleChange}>
          <img src="/images/orange-large.jpg" alt="orange" />
        </InView>
        <Container className={containerStyles.heroText}>
          <Container className={containerStyles.heroStandard}>
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
        <Container fullWidth style={{ backgroundColor: '#0073bc' }}>
          <Container style={{ backgroundColor: '#0073bc' }}>
            <FlexBox justifyContent="space-around">
              <Title />
              <List white />
            </FlexBox>
          </Container>
        </Container>
        <MiniCard />
        <Container fullWidth style={{ backgroundColor: '#0073bc' }}>
          <ContactUs caseLink="/contact" caseTitle="Let’s talk. Contact Us." />
        </Container>
      </main>
    </>
  );
}
