"use client";

import { Button } from "@/components/UI/Button/Button";
import { TextEditor } from "@/components/text-editor/text-editor";
import { addNewPost } from "@/lib/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import styles from "./new.module.scss";

const newPostFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(10, { message: "Title must be at least 10 characters." })
    .max(100, { message: "Title cannot exceed 100 characters." }),
  subtitle: z
    .string()
    .trim()
    .min(10, { message: "Title must be at least 10 characters." })
    .max(200, { message: "Title cannot exceed 200 characters." }),
});

type NewPostForm = z.infer<typeof newPostFormSchema>;

export default function NewPostPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [content, setContent] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPostForm>({
    resolver: zodResolver(newPostFormSchema),
  });

  const onSubmit = async ({ title, subtitle }: NewPostForm) => {
    try {
      setIsSubmitting(true);

      const newPost = {
        metaData: {
          title,
          subtitle,
          date: new Date().toString(),
        },
        content,
      };

      await addNewPost(newPost);

      reset();
      setContent("");
      toast.success("New post added");
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.field}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" {...register("title")} />
        {errors.title?.message ? (
          <span className={styles.error_message}>{errors.title.message}</span>
        ) : null}
      </fieldset>
      <fieldset className={styles.field}>
        <label htmlFor="subtitle">Subtitle</label>
        <input id="name" {...register("subtitle")} />
        {errors.subtitle?.message ? (
          <span className={styles.error_message}>
            {errors.subtitle.message}
          </span>
        ) : null}
      </fieldset>
      <label htmlFor="subtitle">Content</label>
      <TextEditor content={content} setContent={setContent} />
      <div className={styles.btn_group}>
        <Button
          variant="secondary"
          type="button"
          onClick={() => {
            reset();
            setContent("");
          }}
        >
          Clear
        </Button>
        <Button variant="primary" type="submit">
          Publish Post
        </Button>
      </div>
    </form>
  );
}
