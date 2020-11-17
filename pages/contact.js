import React from 'react';
import { Container } from '../components/Container';
import { FlexBox } from '../components/FlexBox';

import { Form } from '../components/Form';
import { FormImage } from '../components/FormImage';
import { NavBar } from '../components/NavBar';
import { Section } from '../components/Section';
import { Description } from '../components/Description';
import { Adress } from '../components/Adress';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Container fullWidth style={{ paddingTop: '100px' }}>
        <Container>
          <FlexBox justifyContent="space-around">
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
    </div>
  );
};

export default Contact;
