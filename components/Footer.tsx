import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer
            className='px-32 flex items-center justify-between py-10 border-t-2 border-solid border-dark dark:border-light xl:px-24 lg:px-16 md:px-12 md:flex-col gap-3 sm:text-sm'
        >
            <p className='dark:text-light'>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            <div className='dark:text-light'>
                Made with ❤️ by <Link
                    href={"https://www.twitter.com/julius_java00"}
                    className='underline underline-offset-4'
                    target='_blank'
                    >
                        Julius
                    </Link>
            </div>
            <div className='dark:text-light'>
                <Link href={"mailto:juliusjava00@gmail.com"} target='_blank'>Say Hello</Link>
            </div>
        </footer>
    )
}

export default Footer