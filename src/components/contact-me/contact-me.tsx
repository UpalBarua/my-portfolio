import Link from "next/link";

import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Title } from "@/components/UI/Title/Title";
import { SectionInView } from "@/components/section-in-view";
import { contactLinks } from "@/config";

import styles from "./contact-me.module.scss";

export const ContactMe = () => {
  return (
    <SectionInView sectionName="Contact" id="contact">
      <section className={styles.ContactMe}>
        <Title>Contact Me</Title>
        <div className={styles.Grid}>
          <div className={styles.Column}>
            <p className={styles.Text}>
              If you want to work together on a project or just have a chat,
              please don&apos;t hesitate to contact me via email below.
            </p>
            <div className={styles.Links}>
              {contactLinks.map(({ href, Icon, title }) => (
                <Link
                  key={href}
                  className={styles.Link}
                  href={href}
                  target="_blank"
                >
                  <Icon />
                  <span>{title}</span>
                </Link>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </SectionInView>
  );
};
