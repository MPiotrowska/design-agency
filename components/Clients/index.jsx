import React from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Section } from '../Section';

export const Clients = ({ children }) => {
  return (
    <div>
      <Container fullWidth>
        <Container>
          <FlexBox justifyContent="space-between">
            <Section>gmmmmmmmmmmmmmmm</Section>
            <Section>gllllllllllllllllllllll</Section>
            <Section>gkkkkkkkkkk</Section>
            <Section>gkkkkkkkkkk</Section>
          </FlexBox>
          <FlexBox justifyContent="space-between">
            <Section>gmmmmmmmmmmmmmmm</Section>
            <Section>gllllllllllllllllllllll</Section>
            <Section>gkkkkkkkkkk</Section>
            <Section>gkkkkkkkkkk</Section>
          </FlexBox>
        </Container>
      </Container>
    </div>
  );
};
