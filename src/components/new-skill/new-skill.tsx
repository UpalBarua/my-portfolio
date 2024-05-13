"use client";

import { Button } from "@/components/UI/Button/Button";
import { addNewSkill } from "@/lib/services";
import { uploadFile } from "@/lib/upload-files";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import styles from "./new-skill.module.scss";

const newSkillFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(20, { message: "Name cannot exceed 20 characters." }),
  iconFile: z.any().refine((file) => file?.length == 1, "Icon is required."),
});

type NewSkillForm = z.infer<typeof newSkillFormSchema>;

export function NewSkill() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewSkillForm>({
    resolver: zodResolver(newSkillFormSchema),
  });

  const onSubmit = async ({ name, iconFile }: NewSkillForm) => {
    try {
      setIsSubmitting(true);
      const iconUrl = await uploadFile(iconFile[0]);
      await addNewSkill({ name, iconUrl });
      reset();
      setIsOpen(false);
      toast.success("New skill added");
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Button onClick={() => setIsOpen(true)} variant="primary">
        Add New Skill
      </Button>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialog_overlay} />
        <Dialog.Content className={styles.dialog_content}>
          <Dialog.Title className={styles.dialog_title}>
            Add New Skill
          </Dialog.Title>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" {...register("name")} />
              {errors.name?.message ? (
                <span className={styles.error_message}>
                  {errors.name.message}
                </span>
              ) : null}
            </fieldset>
            <fieldset className={styles.field}>
              <label htmlFor="name">Icon</label>
              <input
                id="name"
                type="file"
                accept="image/*"
                {...register("iconFile")}
              />
            </fieldset>
            <div className={styles.btn_group}>
              <Button
                onClick={() => setIsOpen(false)}
                variant="secondary"
                type="button"
              >
                close
              </Button>
              <Button variant="primary" type="submit">
                {isSubmitting ? "Please Wait" : "Add Skill"}
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
