"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	ExternalLink,
	Github,
	ChevronLeft,
	ChevronRight,
	X,
} from "lucide-react";
import lynccup from "@/public/lynccup-demo.png";
import studentcornr from "@/public/sc-demo.png";
import palacelife from "@/public/palacelife-demo.png";
import moonex from "@/public/moonex-demo.png";
import gritgreen from "@/public/gritgreen-demo.png";
import icpurlshortener from "@/public/icpurlshortener-demo.png"
import { cn } from "@/lib/utils";

const projects = [
	{
		id: 1,
		title: "Lynccup",
		description: "A modern and engaging landing page for Lynccup.",
		longDescription:
			"Designed and developed the Lynccup landing page to effectively showcase the platform's features and attract users. Utilized Next.js for server-side rendering, ShadCN components for consistent styling, and Framer Motion for smooth animations. The landing page is fully responsive, ensuring an optimal user experience across devices.",
		tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
		image: lynccup,
		public: false,
		links: {
			live: "https://lynccup.com",
			github: "#",
		},
	},
	{
		id: 5,
		title: "Grit Green Website",
		description:
			"A comprehensive website for Grit Green, a sustainable agriculture company.",
		longDescription:
			"Developed the Grit Green website to effectively showcase the company's mission of empowering communities through sustainable agriculture practices. The site features sections like 'About Us', 'Our Services', 'Projects', 'Meet the CEO', and a blog for updates. Implemented a blog feature using Sanity CMS for easy content management. Built with Next.js for server-side rendering and Framer Motion for engaging animations, ensuring a responsive and interactive user experience.",
		tags: ["Next.js", "Framer Motion", "Sanity CMS"],
		image: gritgreen,
		links: {
			live: "https://gritgreen.org",
			github: "#",
		},
	},
	{
		id: 6,
		title: "URL Shortener",
		description: "A minimalistic URL shortener built on the ICP Blockchain.",
		longDescription: "Developed a URL shortener on the Internet Computer (ICP) blockchain using Motoko. The application generates short URLs for long links, enabling users to easily share and access resources. Implemented a simple web interface for URL input and short link display. Utilized the DFINITY Canister SDK for blockchain interaction and the Fleek hosting platform for deployment.",
		tags: ["Motoko", "Internet Computer", "DFINITY SDK", "Vite", "React", "Tailwind CSS"],
		image: icpurlshortener,
		public: true,
		links: {
			live: "https://2qtrl-2aaaa-aaaam-qdfjq-cai.icp0.io/",
			github: "https://github.com/Julius-Java/icp-url-shortener"
		}
	},
	{
		id: 2,
		title: "Moonex Dex",
		description:
			"A modern landing page for the MoonDex decentralized exchange.",
		longDescription:
			"Participated in a Twitter challenge to develop a landing page for MoonDex, a decentralized exchange (DEX) web3 product. The landing page features wallet detection and connection functionality, implemented using the WalletConnect library, ensuring seamless integration with various cryptocurrency wallets. Built with Next.js for server-side rendering, ShadCN components for consistent styling, and Framer Motion for smooth animations, the design offers an engaging and responsive user experience.",
		tags: ["Next.js", "ShadCN", "Framer Motion", "WalletConnect", "Web3"],
		image: moonex,
		public: true,
		links: {
			live: "https://moonex-dex.vercel.app",
			github: "https://github.com/Julius-Java/moonex",
		},
	},
	{
		id: 3,
		title: "Student Cornr",
		description:
			"An engaging and modern landing page for Student Cornr, an Ed-Tech SaaS.",
		longDescription:
			"Designed and developed the Student Cornr landing page to enhance user engagement and improve conversions. The landing page showcases the platform’s features with smooth animations, responsive design, and a clean UI. Built using Next.js, ShadCN components, and Framer Motion for seamless interactions.",
		tags: ["Next.js", "ShadCN", "Framer Motion"],
		image: studentcornr,
		public: false,
		links: {
			live: "https://www.studentcornr.com",
			github: "#",
		},
	},
	{
		id: 4,
		title: "Palacelife School Portal",
		description:
			"A full-featured school management system for admins, teachers, parents, and students.",
		longDescription:
			"Developed a school management portal that streamlines administrative and academic operations. Features include account management, attendance tracking, automated result generation, lesson note uploads, and a CBT system for exams. Integrated Paystack for fee payments and notifications.",
		tags: ["Next.js", "React", "REST API", "AuthJS", "Paystack"],
		image: palacelife,
		public: false,
		links: {
			live: "https://palacelife.vercel.app",
			github: "#",
		},
	},
];

export default function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);
	const [selectedProject, setSelectedProject] = useState<number | null>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevious = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? projects.length - 1 : prev - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prev) =>
			prev === projects.length - 1 ? 0 : prev + 1
		);
	};

	return (
		<section id="projects" className="py-20" ref={ref}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={
					isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
				}
				transition={{ duration: 0.5 }}
				className="text-center mb-16"
			>
				<h2 className="text-3xl md:text-4xl font-bold">
					Featured Projects
				</h2>
				<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
					Here are some of my recent works. Each project was carefully
					crafted with attention to detail and user experience.
				</p>
			</motion.div>

			{/* Mobile Carousel View */}
			<div className="md:hidden mb-10">
				<div className="relative">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.3 }}
							className="bg-card rounded-xl overflow-hidden shadow-lg border"
						>
							<div className="relative h-[200px]">
								<Image
									src={
										projects[currentIndex].image ||
										"/placeholder.svg"
									}
									alt={projects[currentIndex].title}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-5">
								<h3 className="text-xl font-bold">
									{projects[currentIndex].title}
								</h3>
								<p className="mt-2 text-muted-foreground">
									{projects[currentIndex].description}
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{projects[currentIndex].tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
										>
											{tag}
										</span>
									))}
								</div>
								<div className="mt-6 flex gap-3">
									<Button variant="outline" size="sm" asChild>
										<a
											href={
												projects[currentIndex].links
													.live
											}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2"
										>
											<ExternalLink className="h-4 w-4" />
											Live
										</a>
									</Button>
									<Button
										variant="outline"
										size="sm"
										asChild
										className={cn(
											!projects[currentIndex].public &&
												"hidden"
										)}
									>
										<a
											href={
												projects[currentIndex].links
													.github
											}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2"
										>
											<Github className="h-4 w-4" />
											Code
										</a>
									</Button>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					<Button
						variant="outline"
						size="icon"
						className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm z-10"
						onClick={handlePrevious}
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>

					<Button
						variant="outline"
						size="icon"
						className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm z-10"
						onClick={handleNext}
					>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>

				<div className="flex justify-center mt-4 gap-2">
					{projects.map((_, index) => (
						<button
							key={index}
							className={`h-2 w-2 rounded-full ${
								index === currentIndex
									? "bg-primary"
									: "bg-muted"
							}`}
							onClick={() => setCurrentIndex(index)}
						/>
					))}
				</div>
			</div>

			{/* Desktop View */}
			<div className="hidden md:grid gap-12">
				{projects.map((project, index) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 50 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 50 }
						}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className={`grid md:grid-cols-2 gap-8 items-center ${
							index % 2 === 1 ? "md:flex-row-reverse" : ""
						}`}
						onMouseEnter={() => setHoveredProject(project.id)}
						onMouseLeave={() => setHoveredProject(null)}
					>
						<div
							className={`order-2 ${
								index % 2 === 1 ? "md:order-1" : "md:order-2"
							}`}
						>
							<h3 className="text-2xl font-bold">
								{project.title}
							</h3>
							<p className="mt-2 text-muted-foreground">
								{project.description}
							</p>

							<div className="mt-4 flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
									>
										{tag}
									</span>
								))}
							</div>

							<div className="mt-6 flex gap-4">
								<Button variant="outline" size="sm" asChild>
									<a
										href={project.links.live}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2"
									>
										<ExternalLink className="h-4 w-4" />
										Live Demo
									</a>
								</Button>
								<Button
									variant="outline"
									size="sm"
									asChild
									className={cn(!project.public && "hidden")}
								>
									<a
										href={project.links.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2"
									>
										<Github className="h-4 w-4" />
										Source Code
									</a>
								</Button>
								<Button
									variant="ghost"
									size="sm"
									onClick={() =>
										setSelectedProject(project.id)
									}
								>
									Learn More
								</Button>
							</div>
						</div>

						<div
							className={`order-1 ${
								index % 2 === 1 ? "md:order-2" : "md:order-1"
							}`}
						>
							<motion.div
								className="relative h-[250px] md:h-[300px] w-full rounded-xl overflow-hidden perspective"
								whileHover={{
									scale: 1.03,
									rotateY: index % 2 === 0 ? 5 : -5,
									rotateX: 5,
									z: 10,
								}}
								transition={{ duration: 0.3 }}
								onClick={() => setSelectedProject(project.id)}
								style={{ cursor: "pointer" }}
							>
								<Image
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									fill
									className="object-cover"
								/>
								<motion.div
									className="absolute inset-0 bg-primary/10"
									initial={{ opacity: 0 }}
									animate={{
										opacity:
											hoveredProject === project.id
												? 1
												: 0,
									}}
									transition={{ duration: 0.3 }}
								/>
								<motion.div
									className="absolute inset-0 flex items-center justify-center"
									initial={{ opacity: 0 }}
									animate={{
										opacity:
											hoveredProject === project.id
												? 1
												: 0,
									}}
									transition={{ duration: 0.3 }}
								>
									<span className="px-4 py-2 bg-background/80 backdrop-blur-sm rounded-md text-sm font-medium">
										View Details
									</span>
								</motion.div>
							</motion.div>
						</div>
					</motion.div>
				))}
			</div>

			{/* Project Modal */}
			<AnimatePresence>
				{selectedProject !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
						onClick={() => setSelectedProject(null)}
					>
						<motion.div
							initial={{ scale: 0.9, y: 20 }}
							animate={{ scale: 1, y: 0 }}
							exit={{ scale: 0.9, y: 20 }}
							className="bg-card rounded-xl shadow-xl border max-w-3xl w-full max-h-[90vh] overflow-auto"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="relative h-[300px]">
								<Image
									src={
										projects.find(
											(p) => p.id === selectedProject
										)?.image || "/placeholder.svg"
									}
									alt={
										projects.find(
											(p) => p.id === selectedProject
										)?.title || "Project"
									}
									fill
									className="object-cover"
								/>
								<Button
									variant="ghost"
									size="icon"
									className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm rounded-full"
									onClick={() => setSelectedProject(null)}
								>
									<X className="h-4 w-4" />
								</Button>
							</div>
							<div className="p-6">
								<h3 className="text-2xl font-bold">
									{
										projects.find(
											(p) => p.id === selectedProject
										)?.title
									}
								</h3>
								<p className="mt-4 text-muted-foreground">
									{
										projects.find(
											(p) => p.id === selectedProject
										)?.longDescription
									}
								</p>
								<div className="mt-6 flex flex-wrap gap-2">
									{projects
										.find((p) => p.id === selectedProject)
										?.tags.map((tag) => (
											<span
												key={tag}
												className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
											>
												{tag}
											</span>
										))}
								</div>
								<div className="mt-8 flex gap-4">
									<Button asChild>
										<a
											href={
												projects.find(
													(p) =>
														p.id === selectedProject
												)?.links.live || "#"
											}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2"
										>
											<ExternalLink className="h-4 w-4" />
											Visit Project
										</a>
									</Button>
									<Button variant="outline" asChild>
										<a
											href={
												projects.find(
													(p) =>
														p.id === selectedProject
												)?.links.github || "#"
											}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2"
										>
											<Github className="h-4 w-4" />
											View Source
										</a>
									</Button>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
