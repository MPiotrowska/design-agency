import React from 'react';
import { Container } from '../components/Container';
import { FlexBox } from '../components/FlexBox';

import { Form } from '../components/Form';
import { FormImage } from '../components/FormImage';
import { NavBar } from '../components/NavBar';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Container fullWidth>
        <Container>
          <FlexBox justifyContent="space-around">
            <Form />
            <FormImage />
          </FlexBox>
        </Container>
      </Container>
    </div>
  );
};

export default Contact;
