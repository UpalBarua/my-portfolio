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
          h: "full",
        })}
      >
        <h2
          className={css({
            textStyle: "title",
            pb: 6,
          })}
        >
          Drop a Message
        </h2>
        <ContactForm />
      </section>
    </SectionInView>
  );
}
