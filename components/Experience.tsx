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
                className='font-bold text-7xl text-center mb-14 dark:text-light  md:text-6xl xs:text-4xl md:mb-10'
            >
                Experience
            </h2>

            <div
                className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'
            >
                <motion.div
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                    ref={scrollRef}
                    style={{scaleY: scrollYProgress}}
                />
                <ul className='mt-8 ml-8 flex flex-col items-start justify-between xs:ml-4'>
                    <ExperienceDetails
                        role={'Frontend Developer Volunteer'}
                        company={'Watt NG'}
                        duration={'Jan 2023 - Present'}
                        address={'Remote'}
                        description={'Collaborating with a small team of developers to build the frontend of a web application that allows users pay their electricity bills online.'}
                    />
                    <ExperienceDetails
                        role={'Frontend Developer Freelancer'}
                        company={'Fiverr & Upwork'}
                        duration={'Jun 2022 - Present'}
                        address={'Remote'}
                        description={'Working with clients to build their websites and web applications from scratch using modern technologies like React, Next.js, Tailwind CSS, etc.'}
                    />
                    <ExperienceDetails
                        role={'Frontend Developer'}
                        company={'Student Corner'}
                        duration={'Jan 2023 - Present'}
                        address={'Remote'}
                        description={'Working with a small team of developers to build the frontend of a web application that allows students make payments for their school fees online, keep up to date with class schedules, buy and sell etc.'}
                    />
                </ul>
            </div>
        </>
    )
}

export default Experience