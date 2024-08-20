import { ContactForm } from "@/components/contact-form/contact-form";
import { SectionInView } from "@/components/section-in-view";

import { css } from "styled-system/css";

export function ContactMe() {
  return (
    <SectionInView sectionName="Contact" id="contact">
      <section
        className={css({
          layerStyle: "container",
          roundedBottomRight: "3rem",
        })}
      >
        <h2
          className={css({
            textStyle: "text",
            pb: 6,
            fontSize: "xl",
          })}
        >
          If you want to work together on a project or just have a chat, please
          don&apos;t hesitate to contact me via email below.
        </h2>
        <ContactForm />
      </section>
    </SectionInView>
  );
}
