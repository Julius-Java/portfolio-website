import React from 'react'
import { CircularTextSVG } from './Icons'

import Link from 'next/link'

const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
            <div className='w-52 h-auto flex justify-center items-center relative'>
                <CircularTextSVG
                    className='fill-dark animate-spin-slow dark:fill-light'
                />
                <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <Link
                        href={"mailto:juliusjava00@gmail.com"}
                        className='flex justify-center items-center text-light font-bold p-2 w-24 h-24 rounded-full bg-dark transition-all duration-100 hover:bg-white hover:text-dark
                        border-2 border-dark dark:bg-light dark:text-dark dark:hover:text-light dark:hover:border-light dark:hover:bg-dark'
                    >
                        Hire me
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HireMe