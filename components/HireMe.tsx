import React from 'react'
import { CircularTextSVG } from './Icons'

import Link from 'next/link'

const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
            <div className='w-48 h-auto flex justify-center items-center relative'>
                <CircularTextSVG className='fill-dark animate-spin-slow'/>
                <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <Link
                        href={"mailto:juliusjava00@gmail.com"}
                        className='flex justify-center items-center text-light font-bold p-2 w-20 h-20 rounded-full bg-dark'
                    >
                        Hire me
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HireMe