import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster, toast } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Julius Java | Portfolio",
	description:
		"Personal portfolio website showcasing Julius Emmanuel's work and skills",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Toaster richColors position="bottom-right" closeButton />
			</body>
		</html>
	);
}

import "./globals.css";
