"use client";

import { SectionInView } from "@/components/section-in-view";
import { sendContactMail } from "@/lib/send-contact-mail";
import { button } from "@/recipes/button";
import { contactFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { css } from "styled-system/css";
import { hstack, vstack } from "styled-system/patterns";
import { z } from "zod";

type ContactForm = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (formData: ContactForm) => {
    try {
      await sendContactMail(formData);
      toast.success("Message sent.");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <SectionInView sectionName="Contact" id="contact">
      <section
        className={css({
          layerStyle: "container",
          roundedBottomRight: { md: "3rem" },
          h: "full",
        })}
      >
        <h2
          className={css({
            textStyle: "headline",
            pb: 6,
          })}
        >
          Drop a Message
        </h2>
        <form
          className={vstack({
            gap: 6,
            alignItems: "start",
            w: "full",
          })}
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset
            className={vstack({
              gap: 1,
              alignItems: "start",
              outline: 0,
              rounded: "xl",
              w: "full",
              py: 3,
              px: 4,
              bgColor: "background.muted",
              "&>label": {
                color: "foreground.secondary",
              },
            })}
          >
            <label htmlFor="name">Your Name</label>
            <input
              className={css({ outline: 0, w: "full" })}
              id="name"
              type="text"
              placeholder="Who do I have the pleasure of chatting with?"
              {...register("name")}
            />
          </fieldset>
          <fieldset
            className={vstack({
              gap: 1,
              alignItems: "start",
              outline: 0,
              rounded: "xl",
              w: "full",
              py: 3,
              px: 4,
              bgColor: "background.muted",
              "&>label": {
                color: "foreground.secondary",
              },
            })}
          >
            <label htmlFor="email">Your Email</label>
            <input
              className={css({
                outline: 0,
                w: "full",
              })}
              id="email"
              type="email"
              placeholder="Where can I reach you?"
              {...register("email")}
            />
          </fieldset>
          <fieldset
            className={vstack({
              gap: 1,
              alignItems: "start",
              outline: 0,
              rounded: "xl",
              w: "full",
              py: 3,
              px: 4,
              bgColor: "background.muted",
              "&>label": {
                color: "foreground.secondary",
              },
            })}
          >
            <label htmlFor="message">Your Message</label>
            <textarea
              className={css({
                outline: 0,
                w: "full",
                h: "14rem",
                resize: "none",
              })}
              id="message"
              placeholder="What’s on your mind?"
              {...register("message")}
            />
          </fieldset>
          <div
            className={hstack({
              justify: "end",
              w: "full",
              pt: 2,
            })}
          >
            <button className={button({ variant: "secondary" })}>
              <X size={18} />
              <span>Clear</span>
            </button>
            <button className={button()}>
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </section>
    </SectionInView>
  );
}
