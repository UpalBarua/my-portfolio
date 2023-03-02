import { Button } from '../UI/Button/Button';
import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  return (
    <form className={styles.ContactForm}>
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
      <Button type="primary">Send</Button>
    </form>
  );
};
