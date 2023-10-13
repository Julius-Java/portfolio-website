import React, { Dispatch, SetStateAction } from 'react'
import {navLinks, socialLinks} from "@/utils/links"
import {useRouter} from "next/router"
import {motion} from "framer-motion"
import Link from 'next/link'
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"


type MobileMenuProps = {
    theme: Dispatch<SetStateAction<string>> | string,
    setTheme?: Dispatch<SetStateAction<string>> | string
    handleTheme: () => void
    handleMobileOpen: () => void
}

const MobileMenu = ({theme, handleTheme, handleMobileOpen}: MobileMenuProps) => {
    const MotionLink = motion(Link)

    const router = useRouter()
    return (
        <motion.div
            initial={{opacity: 0, scale: 0, x: "-50%", y: "-50%"}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0}}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className="flex flex-col items-center justify-between min-w-[70vw] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 z-50"
        >
            <nav className="flex flex-col items-center justify-center gap-6 mb-4">
                {
                    navLinks.map((link, index) => (
                        <button
                            key={index}
                            className="relative group text-light dark:text-dark"
                            onClick={() => {router.push(link.path); handleMobileOpen()}}
                        >
                            {link.title}
                            <span
                                className={` ${router.asPath === link.path ? "w-full h-[2px]" : "w-0"} h-[1px] inline-block bg-light  absolute left-0 -bottom-0.5 group-hover:w-full transition-width duration-300 ease-in-out dark:bg-dark`}
                            >
                                &nbsp;
                            </span>
                        </button>
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
                <button
                    onClick={handleTheme}
                    className={` rounded-full p-1
                        ${theme === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}
                >
                    {
                        theme === "dark"
                        ?
                        (
                            <SunIcon className="w-5"/>
                        )
                        :
                        (
                            <MoonIcon className="w-5" />
                        )
                    }
                </button>
            </nav>
        </motion.div>
    )
}

export default MobileMenu