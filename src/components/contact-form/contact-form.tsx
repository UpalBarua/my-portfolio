"use client";

import { sendContactMail } from "@/lib/send-contact-mail";
import { contactFormSchema } from "@/schemas";
import { Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { LiaTelegramPlane } from "react-icons/lia";
import { z } from "zod";
import { Button } from "../UI/Button/Button";

import styles from "./contact-form.module.scss";

type ContactForm = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
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
    <form className={styles.ContactForm} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.Field}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          {...register("name")}
        />
      </fieldset>
      <fieldset className={styles.Field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
        />
      </fieldset>
      <fieldset className={styles.Field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="A simple message"
          {...register("message")}
        />
      </fieldset>
      <Button variant="primary">
        <Send size={18} />
        <span>Send Message</span>
      </Button>
    </form>
  );
};
