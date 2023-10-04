import emailjs from '@emailjs/browser';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Button } from '../UI/Button/Button';
import styles from './ContactForm.module.scss';

type FormEventTarget = EventTarget & {
  name: {
    value: string;
  };
  email: {
    value: string;
  };
  message: {
    value: string;
  };
  reset: () => void;
};

export const ContactForm = () => {
  const handleMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as FormEventTarget;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      return toast.error('something went wrong');
    }

    const newMessage = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    if (!newMessage.name || !newMessage.email || !newMessage.message) {
      return toast.error('Something is missing');
    }

    toast
      .promise(emailjs.send(serviceId, templateId, newMessage, publicKey), {
        loading: 'Sending...',
        success: <b>Message sent</b>,
        error: <b>Failed to send</b>,
      })
      .then((data) => {
        if (data.status === 200) {
          form.reset();
        }
      })
      .catch((error) => {
        toast.error('Failed to send');
        console.log(error);
      });
  };

  return (
    <form className={styles.ContactForm} onSubmit={handleMessage}>
      <fieldset className={styles.Field}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="John Doe" />
      </fieldset>
      <fieldset className={styles.Field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="john@example.com"
        />
      </fieldset>
      <fieldset className={styles.Field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="A simple message" />
      </fieldset>
      <Button variant="primary">Send Message</Button>
    </form>
  );
};
