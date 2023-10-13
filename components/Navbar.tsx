import Link from "next/link"
import Logo from "@/components/Logo"
import {navLinks, socialLinks} from "@/utils/links"
import {useRouter} from "next/router"
import {motion} from "framer-motion"
import useThemeSwitcher from "../utils/useThemeSwitcher"
import { useState } from "react"
import MobileMenu from "./MobileMenu"
import React, { Dispatch, SetStateAction } from 'react'
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

type HamburgerMenuProps = {
    isOpen: Dispatch<SetStateAction<boolean>> | boolean,
    setIsOpen?: Dispatch<SetStateAction<boolean>> | boolean
    handleMenuOpen: () => void
}

const Hamburger = ({isOpen, setIsOpen, handleMenuOpen}: HamburgerMenuProps) => {

    return (
        <button
            className="flex-col items-center justify-center gap-1 hidden lg:flex"
            onClick={handleMenuOpen}
        >
            <span className={`bg-dark dark:bg-light rounded-sm transition-all duration-300 ease-out h-0.5 block w-6 ${isOpen ? "rotate-45 translate-y-1.5" : "translate-y-0"}`}></span>
            <span className={`bg-dark dark:bg-light rounded-sm transition-all duration-300 ease-out h-0.5 block w-6 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`bg-dark dark:bg-light rounded-sm transition-all duration-300 ease-out h-0.5 block w-6 ${isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0"}`}></span>
        </button>
    )
}


const Navbar = () => {
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)

    const [theme, setTheme] = useThemeSwitcher()

    const handleTheme = () => {
        if (typeof setTheme === "function") {
            setTheme((prevValue: string) => {
                return prevValue === "dark" ? "light" : "dark"
            })
        }
    }

    const handleMobileOpen = () => {
        setIsOpen(prevValue => !prevValue)
    }

    const MotionLink = motion(Link)

    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative xl:px-24 lg:px-16 md:px-12 sm:p-8"
        >
            <Hamburger
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleMenuOpen={handleMobileOpen}
            />

            <div className="lg:hidden flex items-center justify-between w-full">
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
                                    className={` ${router.asPath === link.path ? "w-full h-[2px]" : "w-0"} h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-width duration-300 ease-in-out dark:bg-light`}
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
            </div>


            {
                isOpen
                &&
                (
                    <MobileMenu
                        theme={theme}
                        setTheme={setTheme}
                        handleTheme={handleTheme}
                        handleMobileOpen={handleMobileOpen}
                    />
                )
            }

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default Navbar