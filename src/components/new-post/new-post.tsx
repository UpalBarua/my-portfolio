"use client";

import { Button } from "@/components/UI/Button/Button";
import { uploadFile } from "@/lib/upload-files";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import styles from "./new-post.module.scss";
import { addNewSkill } from "@/lib/services";
import { TextEditor } from "../text-editor";

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
  content: z.string().trim().min(1, { message: "Content is required." }),
});

type NewPostForm = z.infer<typeof newPostFormSchema>;

export function NewPost() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPostForm>({
    resolver: zodResolver(newPostFormSchema),
  });

  const onSubmit = async ({ title, subtitle, content }: NewPostForm) => {
    // try {
    //   setIsSubmitting(true);
    //   const iconUrl = await uploadFile(iconFile[0]);
    //   await addNewSkill({ name, iconUrl });
    //   reset();
    //   setIsOpen(false);
    //   toast.success("New skill added");
    // } catch (error) {
    //   toast.error("Something went wrong.");
    //   console.log(error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        Add New Post
      </Button>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialog_overlay} />
        <Dialog.Content className={styles.dialog_content}>
          <Dialog.Title className={styles.dialog_title}>
            Add New Skill
          </Dialog.Title>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={styles.field}>
              <label htmlFor="title">Title</label>
              <input id="title" type="text" {...register("title")} />
              {errors.title?.message ? (
                <span className={styles.error_message}>
                  {errors.title.message}
                </span>
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
            <TextEditor />
            <div className={styles.btn_group}>
              <Button
                onClick={() => setIsOpen(false)}
                variant="secondary"
                type="button"
              >
                close
              </Button>
              <Button variant="primary" type="submit">
                Add Post
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
