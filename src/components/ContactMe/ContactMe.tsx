import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { ContactForm } from '../ContactForm/ContactForm';
import { Title } from '../UI/Title/Title';
import styles from './ContactMe.module.scss';
import Image from 'next/image';

const LINKS = [
  {
    id: 0,
    href: 'https://upalbarua52@gmail.com',
    Icon: <HiOutlineMail />,
    title: 'upalbarua52@gmail.com',
  },
  {
    id: 1,
    href: 'https://github.com/upalbarua',
    Icon: <AiFillGithub />,
    title: 'github.com',
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/upalb',
    Icon: <AiFillLinkedin />,
    title: 'linkedin.com',
  },
];

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
            {LINKS.map(({ id, href, Icon, title }) => (
              <Link
                key={id}
                className={styles.Link}
                href={href}
                target="_blank">
                {Icon}
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
