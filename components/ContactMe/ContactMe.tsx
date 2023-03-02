import { Title } from '../UI/Title/Title';
import { ContactForm } from '../ContactForm/ContactForm';
import styles from './ContactMe.module.scss';

export const ContactMe = () => {
  return (
    <section className={styles.ContactMe}>
      <Title>Contact Me</Title>
      <ContactForm />
    </section>
  );
};
