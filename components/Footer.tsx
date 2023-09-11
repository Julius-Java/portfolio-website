import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='px-32 flex items-center justify-between py-10 border-t-2 border-solid border-black'>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            <div>
                Made with ❤️ by <Link href={"https://www.twitter.com/julius_java00"} className='underline underline-offset-4' target='_blank'>Julius</Link>
            </div>
            <div>
                <Link href={"mailto:juliusjava00@gmail.com"} target='_blank'>Say Hello</Link>
            </div>
        </footer>
    )
}

export default Footer