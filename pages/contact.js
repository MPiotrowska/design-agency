import React from 'react';
import { Container } from '../components/Container';
import { FlexBox } from '../components/FlexBox';
import { Form } from '../components/Form';
import { FormImage } from '../components/FormImage';
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
          <Adress />
        </Container>
      </Container>
    </main>
  );
};

export default Contact;
