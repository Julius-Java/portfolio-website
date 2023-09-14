import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)"
    const [theme, setTheme] = useState("")

    useEffect(() => {
        const userPref = localStorage.getItem("theme")
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const handleThemeChange = (e: any) => {
            // setTheme(e.matches ? "dark" : "light")
            if (userPref) {
                let check = userPref === "dark" ? "dark" : "light"
                setTheme(check)

                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light"
                setTheme(check)

                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        mediaQuery.addEventListener("change", handleThemeChange)

        return () => {
            mediaQuery.removeEventListener("change", handleThemeChange)
        }
    }, [])

    useEffect(() => {
        if (theme == "dark") {
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        }
        
        if (theme === "light") {
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    }, [theme])


    return [theme, setTheme]
}

export default useThemeSwitcher