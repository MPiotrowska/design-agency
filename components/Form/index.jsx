import React from 'react';
import styles from './form.module.css';

export const Form = () => {
  return (
    <div>
      <div>
        <h1 className={styles.title}>Let&apos;s work together</h1>

        <p className={styles.info}>Or email us at</p>
      </div>
      <form name="contact" action="/success" method="POST" data-netlify="true">
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
          />
        </p>
        <p>
          <label className={styles.label} htmlFor="help">
            What can we help you with?
          </label>{' '}
          <br />
          <input
            className={styles.formInput}
            type="text"
            name="help"
            id="help"
          />
        </p>
        <p>
          <label className={styles.label} htmlFor="budget">
            What sized budget are you working with?
          </label>
          <br />
          <input
            className={styles.formInput}
            type="text"
            name="budget"
            id="budget"
          />
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
          />
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
};
