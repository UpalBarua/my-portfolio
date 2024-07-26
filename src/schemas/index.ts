import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is missing." })
    .max(50, { message: "Name is too long." })
    .refine(
      (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""),
      "Name can only have alphabets.",
    ),
  email: z
    .string()
    .toLowerCase()
    .trim()
    .min(1, { message: "Email is missing." })
    .email({ message: "Email is not valid." }),
  message: z.string().trim().min(1, { message: "Message is missing." }),
});
