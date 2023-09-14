import React from 'react'
import ExperienceDetails from './ExperienceDetails'
import { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'

const Experience = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const {scrollYProgress} = useScroll({
        target: scrollRef,
        offset: ["start end", "center start"]
    })
    return (
        <>
            <h2
                className='font-bold text-7xl text-center mb-14 dark:text-light'
            >
                Experience
            </h2>

            <div
                className='w-[75%] mx-auto relative'
            >
                <motion.div
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'
                    ref={scrollRef}
                    style={{scaleY: scrollYProgress}}
                />
                <ul className='mt-8 ml-8 flex flex-col items-start justify-between'>
                    <ExperienceDetails />
                    <ExperienceDetails />
                    <ExperienceDetails />
                    <ExperienceDetails />
                    <ExperienceDetails />
                </ul>
            </div>
        </>
    )
}

export default Experience