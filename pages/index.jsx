import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { FlexBox } from '../components/FlexBox';
import { Description } from '../components/Description';
import { Title } from '../components/Title';
import { Section } from '../components/Section';
import { List } from '../components/List';
import { MiniCard } from '../components/MiniCard';
import { ContactUs } from '../components/ContactUs';
import { FirmDescription } from '../components/FirmDescription';

// styles
import styles from '../styles/Home.module.css';
import containerStyles from '../components/Container/container.module.css';
import listStyles from '../components/List/list.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container fullWidth style={{ position: 'relative' }}>
        <img src="/images/orange-large.jpg" alt="orange" />
        <Container className={containerStyles.heroText}>
          <Container>
            <Title>Faster sites get more traffic and make more money.</Title>
            <Description>
              Slow sites are the bane of the internet. We are JAMstack experts
              that use Gatsby to build blazing-fast sites that are a pleasure to
              use and a joy to behold. Maximize your business potential with a
              static website today.
            </Description>
            <Link href="/contact">
              <a className={styles.buttonLink}>Contact</a>
            </Link>
          </Container>
        </Container>
      </Container>
      <Container fullWidth>
        <Container>
          <FirmDescription>
            Logo is a design and strategy studio based in Barcelona. We build
            transformative digital products & brands. We work with processes
            clients treasure.
          </FirmDescription>
        </Container>
      </Container>
      <main className={styles.main}>
        <Container fullWidth>
          <Container>
            <FlexBox justifyContent="space-around">
              <Card
                style={{ flex: 1, marginRight: '20px' }}
                caseLink="https://google.com"
                caseTitle="Samsung"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                asperiores expedita debitis nihil odio? Sunt quae impedit
                assumenda nisi, id quos porro optio animi natus fugiat maiores
                culpa alias quaerat!
              </Card>
              <Card
                style={{ flex: 1, marginRight: '20px' }}
                caseLink="https://google.com"
                caseTitle="Samsung"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                ut quibusdam error repellendus omnis dolor quas quisquam in
                quasi. Itaque vero amet eaque? Rem officia aliquam iusto unde
                quisquam necessitatibus.
              </Card>
              <Card
                style={{ flex: 1, marginRight: '20px' }}
                caseLink="https://google.com"
                caseTitle="Samsung"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                ut quibusdam error repellendus omnis dolor quas quisquam in
                quasi. Itaque vero amet eaque? Rem officia aliquam iusto unde
                quisquam necessitatibus.
              </Card>
              <Card
                style={{ flex: 1, marginRight: '20px' }}
                caseLink="https://google.com"
                caseTitle="Samsung"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                ut quibusdam error repellendus omnis dolor quas quisquam in
                quasi. Itaque vero amet eaque? Rem officia aliquam iusto unde
                quisquam necessitatibus.
              </Card>
            </FlexBox>
          </Container>
        </Container>
        <Container fullWidth style={{ backgroundColor: '#102990' }}>
          <Container style={{ backgroundColor: '#102990' }}>
            <FlexBox justifyContent="space-around">
              <Section>
                <Title className={listStyles.title} white>
                  Design, digital products, branding, communication and
                  strategy.
                </Title>
                <Description white>
                  We help you move quickly without wasting resources.
                </Description>
              </Section>
              <Section>
                <List white caseTitle="Turn ideas into action">
                  We help you design and develop digital products that solve
                  real problems for real people. Apps, webs and everything in
                  between. We work fast.
                </List>
                <List white caseTitle="Power up your brand">
                  We help you improve your narrative and strengthen your brand
                  message and aesthetics throughout all your channels in just 3
                  weeks.
                </List>
                <List white caseTitle="Cut through the noise">
                  We help you think over your whole communication strategy and
                  build a 3-month content plan.
                </List>
              </Section>
            </FlexBox>
          </Container>
        </Container>
        <Container fullWidth>
          <Container>
            <FlexBox justifyContent="center">
              <MiniCard
                caseLink="https://google.com"
                caseTitle="Women in Tech: Marga Martinez Picornell"
              />

              <MiniCard
                caseLink="https://google.com"
                caseTitle="Lean UX and Design Sprint changed product design for ever"
              />

              <MiniCard
                caseLink="https://google.com"
                caseTitle="90 days to emerge stronger"
              />

              <MiniCard
                caseLink="https://google.com"
                caseTitle="Speculative Design: An alternative reading to reality"
              />
            </FlexBox>
          </Container>
        </Container>
        <Container fullWidth style={{ backgroundColor: '#102990' }}>
          <ContactUs caseLink="/contact" caseTitle="Let’s talk. Contact Us." />
        </Container>
      </main>
      <Footer />
    </>
  );
}
