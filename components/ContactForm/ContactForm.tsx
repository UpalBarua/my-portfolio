import React from 'react';
import { Button } from '../UI/Button/Button';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const handleMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    console.log(serviceId, templateId, publicKey);

    const newMessage = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const res = await emailjs.send(
        serviceId,
        templateId,
        newMessage,
        publicKey
      );
      if (res.status === 200) {
        alert('Email sent.');
        event.target.reset();
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.ContactForm} onSubmit={handleMessage}>
      <div className={styles.Field}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
      </div>
      <div className={styles.Field}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>
      <div className={styles.Field}>
        <label htmlFor="message">Message</label>
        <textarea id="" name="message"></textarea>
      </div>
      <Button as="button" type="primary">
        Send
      </Button>
    </form>
  );
};
