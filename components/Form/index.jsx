import React from 'react';
import styles from './form.module.css';

export const Form = () => {
  return (
    <div className={styles.form}>
      <div>
        <h1 className={styles.title}>Let&apos;s work together</h1>
        <p className={styles.info}>
          Or email us at
          <a
            style={{ fontWeight: 'bold' }}
            href="mailto:monikapiotrowska27@gmail.com"
          >
            {' '}
            info@vstudio.com
          </a>
        </p>
      </div>
      <form
        name="contact"
        action="/success"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <br />
          <input
            className={styles.formInput}
            type="text"
            name="name"
            id="name"
            required
          />
        </p>
        <p>
          <label className={styles.label} htmlFor="emailadress">
            Email Adress:
          </label>{' '}
          <br />
          <input
            className={styles.formInput}
            type="email"
            name="email"
            id="email"
            required
          />
        </p>
        <p>
          <label className={styles.label} htmlFor="Service">
            What can we help you with?
          </label>
          <br />
          <select
            className={styles.dropDownMenuInput}
            name="Service"
            id="Service"
            dataName="Service"
            required
          >
            <option value>Select one...</option>
            <option value="Product">
              I want to create or improve a digital product
            </option>
            <option value="Innovation">
              I want to bring innovation to my company
            </option>
            <option value="Branding">I want to create a powerful brand</option>
            <option value="Communication ">
              I need help with my communication strategy
            </option>
          </select>
        </p>
        <p>
          <label className={styles.label} htmlFor="Budget">
            What sized budget are you working with?
          </label>
          <br />
          <select
            className={styles.dropDownMenuInput}
            name="Budget"
            id="Budget"
            dataName="Budget"
            required
          >
            <option value>Select one...</option>
            <option value="10k or less">€10.000 or less</option>
            <option value="10k - 25k">€10.000 - €25.000</option>
            <option value="25k - 50k">€25.000 - €50.000</option>
            <option value="+50k ">+ €50.000</option>
          </select>
        </p>

        <p>
          <label className={styles.label} htmlFor="yourmessage">
            Message:
          </label>{' '}
          <br />
          <textarea
            className={styles.messageInput}
            name="message"
            id="yourmessage"
            required
          />
        </p>
        <p>
          <button className={styles.formButton} type="submit">
            Submit
          </button>
        </p>
        <div className={styles.agreement}>
          {' '}
          By filling in the form, you agree to our
          <a
            className={styles.caseTitle}
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy,
          </a>{' '}
          including our cookie use.{' '}
        </div>
      </form>
    </div>
  );
};
