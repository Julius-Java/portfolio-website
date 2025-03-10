"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
	{ icon: <Home className="h-5 w-5" />, label: "Home", href: "#home" },
	{ icon: <User className="h-5 w-5" />, label: "About", href: "#about" },
	{
		icon: <Briefcase className="h-5 w-5" />,
		label: "Projects",
		href: "#projects",
	},
	{ icon: <Code className="h-5 w-5" />, label: "Skills", href: "#skills" },
	{ icon: <Mail className="h-5 w-5" />, label: "Contact", href: "#contact" },
];

export default function MagicNav() {
	const [activeItem, setActiveItem] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);

			// Update active item based on scroll position
			const sections = ["", "about", "projects", "skills", "contact"];
			for (let i = sections.length - 1; i >= 0; i--) {
				const section = document.getElementById(sections[i]);
				if (section && window.scrollY >= section.offsetTop - 200) {
					setActiveItem(i);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Mobile Navigation */}
			<div className="md:hidden fixed top-4 left-4 z-50">
				<Button
					variant="outline"
					size="icon"
					className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? (
						<X className="h-5 w-5" />
					) : (
						<Menu className="h-5 w-5" />
					)}
				</Button>

				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
					transition={{ duration: 0.2 }}
					className={`absolute top-14 left-0 bg-background/90 backdrop-blur-md border border-border rounded-lg shadow-lg p-2 ${isOpen ? "block" : "hidden"}`}
				>
					<div className="space-y-1">
						{navItems.map((item, index) => {
							return (
								<a
									key={index}
									href={item.href}
									className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-primary/10 text-sm"
									onClick={() => setIsOpen(false)}
								>
									{item.icon}
									{item.label}
								</a>
							);
						})}
					</div>
				</motion.div>
			</div>

			{/* Desktop Navigation */}
			<motion.div
				className="hidden md:flex fixed left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-lg p-1.5"
				initial={{ y: -100 }}
				animate={{ y: scrollY > 100 ? 20 : -100 }}
				transition={{ duration: 0.3 }}
			>
				<div className="relative flex items-center">
					{navItems.map((item, index) => {
						return (
							<a
								key={index}
								href={item.href}
								className={`relative px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
									activeItem === index
										? "text-primary"
										: "text-foreground hover:text-primary"
								}`}
								onClick={(e) => {
									e.preventDefault();
									setActiveItem(index);
									document
										.querySelector(item.href)
										?.scrollIntoView({
											behavior: "smooth",
										});
								}}
							>
								{item.icon}
								<span className="text-sm font-medium">
									{item.label}
								</span>

								{activeItem === index && (
									<motion.div
										layoutId="navIndicator"
										className="absolute inset-0 bg-primary/10 rounded-full -z-10"
										transition={{
											type: "spring",
											duration: 0.3,
										}}
									/>
								)}
							</a>
						);
					})}
				</div>
			</motion.div>
		</>
	);
}
