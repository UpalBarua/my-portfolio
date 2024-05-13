"use client";

import { Button } from "@/components/UI/Button/Button";
import { TextEditor } from "@/components/text-editor/text-editor";
import { addNewProject } from "@/lib/services";
import { uploadImages } from "@/lib/upload-images";
import { Project } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import styles from "./new.module.scss";

const newProjectFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(10, { message: "Title must be at least 10 characters." })
    .max(100, { message: "Title cannot exceed 100 characters." }),
  techStack: z.string().min(1, { message: "Techstack is required." }),
  liveUrl: z.string().url({ message: "Invalid url" }),
  gitUrl: z.string().url({ message: "Invalid url" }),
});

type NewProjectForm = z.infer<typeof newProjectFormSchema>;

export default function NewProjectPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [content, setContent] = useState("");
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewProjectForm>({
    resolver: zodResolver(newProjectFormSchema),
  });

  const onSubmit = async ({
    title,
    gitUrl,
    techStack,
    liveUrl,
  }: NewProjectForm) => {
    try {
      setIsSubmitting(true);
      const imgURLs = await uploadImages(imageFiles as FileList);

      const newProject: Project = {
        title,
        description: content,
        techStack: techStack.split(",").map((val) => val.trim()),
        images: imgURLs,
        links: {
          git: gitUrl,
          live: liveUrl,
        },
      };

      await addNewProject(newProject);

      reset();
      setContent("");
      setImageFiles(null);
      toast.success("New porject added");
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
        <label htmlFor="techStack">
          Tech Stack (separate names with comma)
        </label>
        <input id="techStack" {...register("techStack")} />
        {errors.techStack?.message ? (
          <span className={styles.error_message}>
            {errors.techStack.message}
          </span>
        ) : null}
      </fieldset>
      <fieldset className={styles.field}>
        <label htmlFor="gitUrl">Git Link</label>
        <input id="gitUrl" {...register("gitUrl")} />
        {errors.gitUrl?.message ? (
          <span className={styles.error_message}>{errors.gitUrl.message}</span>
        ) : null}
      </fieldset>
      <fieldset className={styles.field}>
        <label htmlFor="liveUrl">Live Link</label>
        <input id="liveUrl" {...register("liveUrl")} />
        {errors.liveUrl?.message ? (
          <span className={styles.error_message}>{errors.liveUrl.message}</span>
        ) : null}
      </fieldset>
      <fieldset className={styles.field}>
        <label htmlFor="images">Images</label>
        <input
          id="images"
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setImageFiles(e.target.files || null)}
        />
      </fieldset>
      <label htmlFor="subtitle">Description</label>
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
          {isSubmitting ? "Please Wait" : "Publish Post"}
        </Button>
      </div>
    </form>
  );
}
