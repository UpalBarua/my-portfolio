import Link from 'next/link';
import { Title } from '../UI/Title/Title';
import { ContactForm } from '../ContactForm/ContactForm';
import styles from './ContactMe.module.scss';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const ContactMe = () => {
  return (
    <section className={styles.ContactMe}>
      <Title>Contact Me</Title>
      <div className={styles.Grid}>
        <div className={styles.Column}>
          <p className={styles.Text}>
            If you want to work together on a project or just have a chat,
            please don&apos;t hesitate to contact me via email below.
          </p>
          <div className={styles.Links}>
            <Link className={styles.Link} href="upalbarua52@gmail.com">
              <HiOutlineMail />
              <span>upalbarua52@gmail.com</span>
            </Link>
            <Link className={styles.Link} href="github.com">
              <AiFillGithub />
              <span>github.com</span>
            </Link>
            <Link className={styles.Link} href="linkedin">
              <AiFillLinkedin />
              <span>linkedin.com</span>
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
