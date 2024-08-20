"use client";

import { sendContactMail } from "@/lib/send-contact-mail";
import { contactFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

import { button } from "@/recipes/button";
import { css } from "styled-system/css";
import { hstack, vstack } from "styled-system/patterns";

type ContactForm = z.infer<typeof contactFormSchema>;

export function ContactForm() {
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
          gap: 4,
          alignItems: "start",
          w: "full",
        })}
      >
        <label htmlFor="name">Name</label>
        <input
          className={css({
            outline: 0,
            border: "1px solid {colors.border}",
            rounded: "lg",
            w: "full",
            h: "12",
            py: "2",
            px: "4",
            fontSize: "sm",
            bgColor: "background.muted",
          })}
          id="name"
          type="text"
          placeholder="John Doe"
          {...register("name")}
        />
      </fieldset>
      <fieldset
        className={vstack({
          gap: 4,
          alignItems: "start",
          w: "full",
        })}
      >
        <label htmlFor="email">Email</label>
        <input
          className={css({
            outline: 0,
            border: "1px solid {colors.border}",
            rounded: "lg",
            w: "full",
            h: "12",
            py: "2",
            px: "4",
            fontSize: "sm",
            bgColor: "background.muted",
          })}
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
        />
      </fieldset>
      <fieldset
        className={vstack({
          gap: 4,
          alignItems: "start",
          w: "full",
        })}
      >
        <label htmlFor="message">Message</label>
        <textarea
          className={css({
            outline: 0,
            border: "1px solid {colors.border}",
            rounded: "lg",
            w: "full",
            h: "14rem",
            py: "2",
            px: "4",
            fontSize: "sm",
            bgColor: "background.muted",
            resize: "none",
          })}
          id="message"
          placeholder="A simple message"
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
  );
}
