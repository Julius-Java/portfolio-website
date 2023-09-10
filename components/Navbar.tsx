import Link from "next/link"
import Logo from "@/components/Logo"
import {navLinks, socialLinks} from "@/utils/links"
import {useRouter} from "next/router"
import {motion} from "framer-motion"

const Navbar = () => {
    const router = useRouter()

    const MotionLink = motion(Link)

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav className="flex gap-6">
                {
                    navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className="relative group"
                        >
                            {link.title}
                            <span
                                className={` ${router.asPath === link.path ? "w-full h-[2px]" : "w-0"} h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-width duration-300 ease-in-out`}
                            >
                                &nbsp;
                            </span>
                        </Link>
                    ))
                }
            </nav>
            <nav className="flex items-center justify-center flex-wrap gap-4">
                {
                    socialLinks.map((link, index) => (
                        <MotionLink
                            whileHover={{y: -2}}
                            whileTap={{scale: 0.9}}
                            key={index}
                            href={link.path}
                            target="_blank"
                            className="w-6"
                        >
                            {link.SVG}
                        </MotionLink>
                    ))
                }
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default Navbar