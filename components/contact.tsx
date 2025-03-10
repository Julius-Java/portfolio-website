"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Mail,
	MessageSquare,
	Send,
	Github,
	Linkedin,
	Twitter,
	MailCheckIcon,
} from "lucide-react";
import ConfettiExplosion from "@/components/confetti-explosion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { formSchema } from "@/lib/schema";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { sendEmail } from "@/services/actions";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import resendIcon from "@/public/resend.webp";
import Image from "next/image";

export default function Contact() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const [showConfetti, setShowConfetti] = useState(false);
	const [successful, setSuccessful] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	const {
		formState: { isSubmitting, isSubmitted },
	} = form;

	async function handleSubmit(data: z.infer<typeof formSchema>) {
		console.log(data);
		// TODO - Submit form data to server action
		try {
			const res = await sendEmail(data);
			if (res?.successful) {
				setShowConfetti(true);
				setSuccessful(true);
				toast.success(res.message);
				setTimeout(() => {
					setShowConfetti(false);
				}, 1500);
			}
			if (!res?.successful) {
				toast.error(res?.message || "Something went wrong");
			}
		} catch (error) {
			toast.error("An error occurred. Please try again later.");
		}
	}

	return (
		<section id="contact" className="py-20" ref={ref}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={
					isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
				}
				transition={{ duration: 0.5 }}
				className="text-center mb-16"
			>
				<h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
				<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
					Have a project in mind or just want to say hello? Feel free
					to reach out!
				</p>
			</motion.div>

			<div className="grid md:grid-cols-2 gap-10">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={
						isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
					}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="space-y-6">
						<div className="flex items-start gap-4">
							<div className="p-3 bg-primary/10 rounded-lg text-primary mt-1">
								<Mail className="h-5 w-5" />
							</div>
							<div>
								<h3 className="text-lg font-semibold">Email</h3>
								<p className="text-muted-foreground">
									juliusjava00@gmail.com
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="p-3 bg-primary/10 rounded-lg text-primary mt-1">
								<MessageSquare className="h-5 w-5" />
							</div>
							<div>
								<h3 className="text-lg font-semibold">
									Social Media
								</h3>
								<div className="mt-2 flex gap-3">
									<motion.a
										href="https://github.com/Julius-Java"
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 bg-muted rounded-full text-foreground hover:text-primary"
										whileHover={{
											y: -3,
											backgroundColor:
												"var(--primary-10)",
										}}
										transition={{ duration: 0.2 }}
									>
										<Github className="h-5 w-5" />
										<span className="sr-only">GitHub</span>
									</motion.a>
									<motion.a
										href="https://www.linkedin.com/in/julius-emmanuel-873019172/"
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 bg-muted rounded-full text-foreground hover:text-primary"
										whileHover={{
											y: -3,
											backgroundColor:
												"var(--primary-10)",
										}}
										transition={{ duration: 0.2 }}
									>
										<Linkedin className="h-5 w-5" />
										<span className="sr-only">
											LinkedIn
										</span>
									</motion.a>
									<motion.a
										href="https://x.com/Julius_Java00"
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 bg-muted rounded-full text-foreground hover:text-primary"
										whileHover={{
											y: -3,
											backgroundColor:
												"var(--primary-10)",
										}}
										transition={{ duration: 0.2 }}
									>
										<Twitter className="h-5 w-5" />
										<span className="sr-only">Twitter</span>
									</motion.a>
								</div>
							</div>
						</div>
					</div>

					{/* Decorative map or illustration */}
					<motion.div
						className="mt-10 h-[200px] bg-muted rounded-xl overflow-hidden relative"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
							<div className="text-center">
								<div className="inline-block p-3 bg-primary/10 rounded-full text-primary mb-2">
									<Mail className="h-6 w-6" />
								</div>
								<p className="font-medium">
									Based in Lagos, Nigeria
								</p>
								<p className="text-sm text-muted-foreground">
									Available for remote work worldwide
								</p>
							</div>
						</div>

						{/* Animated dots */}
						{[...Array(5)].map((_, i) => (
							<motion.div
								key={i}
								className="absolute h-2 w-2 rounded-full bg-primary/60"
								style={{
									top: `${20 + Math.random() * 60}%`,
									left: `${20 + Math.random() * 60}%`,
								}}
								animate={{
									scale: [1, 1.5, 1],
									opacity: [0.7, 0.2, 0.7],
								}}
								transition={{
									duration: 2 + Math.random() * 2,
									repeat: Number.POSITIVE_INFINITY,
									delay: Math.random() * 2,
								}}
							/>
						))}
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={
						isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
					}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="relative"
				>
					{showConfetti && <ConfettiExplosion />}

					<AnimatePresence mode="wait">
						{successful ? (
							<motion.div
								key="success"
								className="bg-card p-8 rounded-xl border text-center"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.3 }}
							>
								<div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
									<Send className="h-8 w-8" />
								</div>
								<h3 className="text-xl font-bold mb-2">
									Message Sent!
								</h3>
								<p className="text-muted-foreground">
									Thank you for reaching out. I'll get back to
									you as soon as possible.
								</p>
								<Button
									className="mt-6"
									variant="outline"
									onClick={() => {
										// TODO - Figure out how this affects the entire form submission process
										// setIsSubmitted(false);
										form.reset();
										setSuccessful(false);
									}}
								>
									Send Another Message
								</Button>
							</motion.div>
						) : (
							<Form {...form}>
								<motion.form
									key="form"
									onSubmit={form.handleSubmit(handleSubmit)}
									className="space-y-4"
									initial={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<FormField
										name="name"
										control={form.control}
										render={({ field }) => {
											return (
												<FormItem>
													<FormControl>
														<Input
															placeholder="Your Name"
															{...field}
															className="transition-all focus:ring-2 focus:ring-primary/50"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											);
										}}
									/>
									<FormField
										name="email"
										control={form.control}
										render={({ field }) => {
											return (
												<FormItem>
													<FormControl>
														<Input
															placeholder="Your Email"
															{...field}
															className="transition-all focus:ring-2 focus:ring-primary/50"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											);
										}}
									/>
									<FormField
										name="subject"
										control={form.control}
										render={({ field }) => {
											return (
												<FormItem>
													<FormControl>
														<Input
															placeholder="Subject"
															{...field}
															className="transition-all focus:ring-2 focus:ring-primary/50"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											);
										}}
									/>
									<FormField
										name="message"
										control={form.control}
										render={({ field }) => {
											return (
												<FormItem>
													<FormControl>
														<Textarea
															placeholder="Your Message"
															rows={5}
															{...field}
															className="transition-all focus:ring-2 focus:ring-primary/50 resize-none"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											);
										}}
									/>
									<Button
										type="submit"
										className="w-full relative overflow-hidden group"
										disabled={isSubmitting}
									>
										<span className="relative z-10 flex items-center gap-2">
											{isSubmitting ? (
												<>
													<motion.div
														className="h-4 w-4 border-2 border-t-transparent border-white rounded-full"
														animate={{
															rotate: 360,
														}}
														transition={{
															duration: 1,
															repeat: Number.POSITIVE_INFINITY,
															ease: "linear",
														}}
													/>
													Sending...
												</>
											) : (
												<>
													<Send className="h-4 w-4" />
													Send Message
												</>
											)}
										</span>
										<span className="absolute inset-0 bg-primary-foreground/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
									</Button>
								</motion.form>
							</Form>
						)}
					</AnimatePresence>
					<Alert className="w-full bg-background mt-5">
						<MailCheckIcon className="w-4 h-4" />
						<AlertTitle className="font-mono">
							Email powered by:
						</AlertTitle>
						<AlertDescription className="">
							React email by{" "}
							<Image
								src={resendIcon}
								alt="Resend"
								className="inline rounded w-4 h-4 mx-1"
							/>{" "}
							Resend.
						</AlertDescription>
					</Alert>
				</motion.div>
			</div>
		</section>
	);
}
