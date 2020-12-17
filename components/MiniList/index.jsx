import React from 'react';
import { FlexBox } from '../FlexBox';
import { Section } from '../Section';
import styles from './miniList.module.css';
import data from '../../mocks/data.json';

export const MiniList = () => {
  return (
    <FlexBox justifyContent="space-between">
      {' '}
      <Section>
        <div className={styles.listContainer}>
          <a
            target="blank"
            className={styles.caseLink}
            href={data.digitalTitle.link}
          >
            <h1 className={styles.white}>{data.digitalTitle.content}</h1>
          </a>
          <ul className={styles.white}>
            {data.miniList.map((listItem) => (
              <li className={styles.listItem}>{listItem.item}</li>
            ))}
          </ul>
        </div>
      </Section>
      <Section>
        <div className={styles.listContainer}>
          <a
            target="blank"
            className={styles.caseLink}
            href={data.brandingTitle.link}
          >
            <h1 className={styles.white}>{data.brandingTitle.content}</h1>
          </a>
          <ul className={styles.white}>
            {data.miniListBranding.map((listItem) => (
              <li className={styles.listItem}>{listItem.item}</li>
            ))}
          </ul>
        </div>
      </Section>
      <Section>
        <div className={styles.listContainer}>
          <a
            target="blank"
            className={styles.caseLink}
            href={data.communicationTitle.link}
          >
            <h1 className={styles.white}>{data.communicationTitle.content}</h1>
          </a>
          <ul className={styles.white}>
            {data.miniListCommunication.map((listItem) => (
              <li className={styles.listItem}>{listItem.item}</li>
            ))}
          </ul>
        </div>
      </Section>
    </FlexBox>
  );
};

{
  /* <FlexBox justifyContent="space-between">
<Section>
  <MiniList
    white
    className={miniLIstStyles.title}
    caseLink="https://google.com"
    caseTitle="Digital products →"
  >
    {' '}
    <ul white>
      <li>● Product Strategy</li>
      <li>● Research</li>
      <li>● UX/UI Design</li>
      <li>● Brand Identity Systems</li>
      <li>● No Code</li>
      <li>● Websites and Apps</li>
      <li>● Ecommerce</li>
    </ul>
  </MiniList>
</Section>
<Section>
  <MiniList
    white
    caseLink="https://google.com"
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
    caseLink="https://google.com"
    className={miniLIstStyles.title}
    caseTitle="Communication →"
  >
    {' '}
    <ul white>
      <li>● Marketing Strategy</li>
      <li>● Content Strategy and Creation</li>
      <li>● Copywriting</li>
      <li>● SEO</li>
      <li>● Social Media</li>
      <li>● Brand Activations and Experience</li>
      <li>● Style guides, tone and voice</li>
    </ul>
  </MiniList>
</Section>
</FlexBox> */
}
