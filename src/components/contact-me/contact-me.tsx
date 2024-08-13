import Link from "next/link";

import { ContactForm } from "@/components/contact-form/contact-form";
import { SectionInView } from "@/components/section-in-view";
import { contactLinks } from "@/config";

import { css } from "styled-system/css";
import { grid, hstack, vstack } from "styled-system/patterns";

export function ContactMe() {
  return (
    <SectionInView sectionName="Contact" id="contact">
      <section
        className={css({
          border: "2px solid",
          borderColor: "fg/10",
          rounded: "2xl",
          roundedBottomRight: "3rem",
          p: "10",
          bg: "dark.darker",
          scrollMarginTop: 20,
        })}
      >
        {/* <h2 */}
        {/*   className={css({ */}
        {/*     pb: 4, */}
        {/*     letterSpacing: "tight", */}
        {/*     textTransform: "capitalize", */}
        {/*     fontSize: "4xl", */}
        {/*     fontWeight: "medium", */}
        {/*     lineHeight: "snug", */}
        {/*   })} */}
        {/* > */}
        {/*   Contact Me */}
        {/* </h2> */}
        <div
          className={vstack({
            gap: 8,
            alignItems: "start",
          })}
        >
          {/* <div> */}
          {/*   <p> */}
          {/*     If you want to work together on a project or just have a chat, */}
          {/*     please don&apos;t hesitate to contact me via email below. */}
          {/*   </p> */}
          {/*   <div */}
          {/*     className={vstack({ */}
          {/*       gap: 2, */}
          {/*       alignItems: "start", */}
          {/*       w: "full", */}
          {/*       pt: 4, */}
          {/*     })} */}
          {/*   > */}
          {/*     {contactLinks.map(({ href, Icon, title }) => ( */}
          {/*       <Link */}
          {/*         className={hstack({ */}
          {/*           "&:hover,&:focus-visible": { */}
          {/*             textDecoration: "underline", */}
          {/*           }, */}
          {/*         })} */}
          {/*         key={href} */}
          {/*         href={href} */}
          {/*         target="_blank" */}
          {/*       > */}
          {/*         <Icon size={18} /> */}
          {/*         <span>{title}</span> */}
          {/*       </Link> */}
          {/*     ))} */}
          {/*   </div> */}
          {/* </div> */}
          <ContactForm />
        </div>
      </section>
    </SectionInView>
  );
}
