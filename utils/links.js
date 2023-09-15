import { TwitterSVG, GithubSVG, LinkedInSVG } from "@/components/Icons"
import Link from "next/link"

const navLinks = [
    { title: `Home`, path: `/` },
    { title: `About`, path: `/about` },
    { title: `Projects`, path: `/projects` },
]

const socialLinks = [
    { title: `Github`, path: "https://github.com/Julius-Java", SVG: (<GithubSVG className="p-[3px] rounded-full dark:bg-dark bg-light" />)},
    { title: `Twitter`, path: "https://twitter.com/Julius_Java00", SVG: (<TwitterSVG/>)},
    { title: `LinkedIn`, path: "https://www.linkedin.com/in/julius-emmanuel-873019172/", SVG: (<LinkedInSVG/>)},
]

export { navLinks, socialLinks }