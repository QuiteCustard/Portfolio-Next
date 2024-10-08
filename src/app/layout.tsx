import "~/styles/globals.css";
import { type Metadata } from "next";
import Header from "./components/header/Header";
import Socials from "./components/socials/Socials";

import { Open_Sans, Bitter } from "next/font/google"


const openSans = Open_Sans({
    weight: ["400", "600"],
    subsets: ["latin"],
    display: "swap",
	variable: "--font-open-sans",
})

const bitter = Bitter({
    weight: ["600"],
    subsets: ["latin"],
    display: "swap",
	variable: "--font-bitter",
})

export const metadata: Metadata = {
	title: "Sam's Portfolio",
	description: "The portfolio for Sam Edwards",
	icons: [{ rel: "icon", url: "/logo.webp" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${openSans.variable} ${bitter.variable}`}>
				<Header />
				<Socials />
				{children}
			</body>
		</html>
	)
}