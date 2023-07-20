import { z } from "zod";

export const supportFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  issueType: z.string().min(10, { message: "Issue type is required" }),
  issue: z.string().min(10, { message: "Issue is required" }),
  subject: z.string().min(10, { message: "Please provide a subject" }),
  description: z.string().min(10, { message: "Description is required" }),
});

export type SupportForm = z.infer<typeof supportFormSchema>;
