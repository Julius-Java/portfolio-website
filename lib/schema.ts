import {z} from "zod"

export const formSchema = z.object({
  name: z.string().nonempty({message: "Name is required"}),
  email: z.string().email({message: "Invalid email address"}),
  subject: z.string().min(5, {message: "Subject must be at least 5 characters"}),
  message: z.string().min(10, {message: "Message must be at least 10 characters"})
})