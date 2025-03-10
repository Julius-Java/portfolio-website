import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster, toast } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Julius Emmanuel | Portfolio",
	description:
		"Julius Emmanuel (A.K.A Julius Java) is a creative web developer crafting delightful digital experiences on the web",
	metadataBase: new URL("https://juliusjava.netlify.app"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Julius Java | Portfolio",
		description:
			"Julius Emmanuel (A.K.A Julius Java) is a creative web developer crafting delightful  digital experiences on the web.",
		url: "https://juliusjava.netlify.app",
		siteName: "Julius Java | Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/opengraph-image.png",
				width: 900,
				height: 700,
				alt: "Julius Java's Logo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Julius Java | Portolio",
		description:
			"Julius Emmanuel (A.K.A Julius Java) is a creative web developer crafting delightful digital experiences on the web",
		images: [
			{
				url: "/twitter-image.png",
				width: 700,
				height: 700,
				alt: "Julius Java's Logo",
			},
		],
	},
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
