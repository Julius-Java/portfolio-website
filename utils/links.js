import { TwitterSVG, GithubSVG, LinkedInSVG } from "@/components/Icons"
import Link from "next/link"

const navLinks = [
    { title: `Home`, path: `/` },
    { title: `About`, path: `/about` },
    { title: `Projects`, path: `/projects` },
    { title: `Blog`, path: `/blog` },
]

const socialLinks = [
    { title: `Github`, path: "/", SVG: (<GithubSVG/>)},
    { title: `Twitter`, path: "/", SVG: (<TwitterSVG/>)},
    { title: `LinkedIn`, path: "/", SVG: (<LinkedInSVG/>)},
]

export { navLinks, socialLinks }