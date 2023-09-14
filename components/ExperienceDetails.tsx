import React from 'react'
import LiIcon from './LiIcon'
import { useRef } from 'react'
import {motion} from 'framer-motion'

const ExperienceDetails = () => {
    const ref = useRef<HTMLLIElement | null>(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, type: "spring", bounce: 0.3}}
            >
                <h3 className='capitalize font-bold text-2xl dark:text-light'>Front End Developer <span className='text-primary dark:text-primaryDark'>@ Google</span></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    2020 - 2021 | 123, Lorem Street, Carlifornia
                </span>
                <p className='font-medium dark:text-light'>
                    Built beautfiul and responsive websites using React, NextJS, TailwindCSS and other modern web technologies.
                </p>
            </motion.div>
        </li>
    )
}

export default ExperienceDetails