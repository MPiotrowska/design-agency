import React from 'react';
import { Container } from '../components/Container';
import { FlexBox } from '../components/FlexBox';
import { Form } from '../components/Form';
import { FormImage } from '../components/FormImage';
import { Section } from '../components/Section';
import { Adress } from '../components/Adress';

import styles from '../styles/Home.module.css';

const Contact = () => {
  return (
    <main className={styles.main}>
      <Container fullWidth style={{ paddingTop: '100px' }}>
        <Container>
          <FlexBox justifyContent="space-around" paddingTop="120px">
            <Form />
            <FormImage />
          </FlexBox>
        </Container>
      </Container>
      <Container fullWidth style={{ backgroundColor: '#102990' }}>
        <Container>
          <FlexBox justifyContent="space-around">
            <Section>
              <Adress white cityName="Barcelona">
                <p>Passeig de Gràcia 6</p>
                <p>Barcelona</p>
                <p>Spain</p>
              </Adress>
            </Section>
            <Section>
              <Adress white cityName="Buenos Aires">
                <p>Av. del Libertador 3 </p>
                <p>Buenos Aires</p>
                <p>Argentina</p>
              </Adress>
            </Section>
          </FlexBox>
        </Container>
      </Container>
    </main>
  );
};

export default Contact;
