"use server"

import { formSchema } from "@/lib/schema";
import { z } from "zod";
import {Resend} from "resend"
import ContactFormEmail from "@/emails/email";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function sendEmail(data: z.infer<typeof formSchema>) {
    const {email, message, name, subject} = data;
    try {
        const {data, error} = await resend.emails.send({
            from: "email@julius.studentcornr.com",
            to: "juliusjava00@gmail.com",
            subject: subject,
            react: ContactFormEmail({message, senderEmail: email, senderName: name}),
        })

        if (data) {
            return {successful: true, message: "Email delivered successfully", data};
        }

        if (error) {
            throw Error(error.message);
        }
    } catch(error: any) {
        console.error(error);
        return {successful: false, message: error.message, data: null};
    }
}