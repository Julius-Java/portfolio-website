import React, {useRef} from 'react'
import { useScroll, motion } from 'framer-motion'
import EducationDetails from './EducationDetails'

const Education = () => {
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
                Education & Certifications
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
                    <EducationDetails
                        certification={'Bsc Ed. Computer Science'}
                        institution={'Lagos State University, Nigeria'}
                        duration={'2022 - Present'}
                        address={'Lagos, Nigeria'}
                        info={'I am pursuing a Double Honors Bachelor of Science in Education in Computer Science at Lagos State University. This comprehensive program equips me with a solid foundation in computer science principles, programming languages, and educational methodologies, preparing me to excel in both the fields of technology and education.'}
                    />
                    <EducationDetails
                        certification={'Web Development Bootcamp'}
                        institution={'Udemy Learning Platform'}
                        duration={'Oct 2022 - March 2023'}
                        address={'Remote'}
                        info={'Learned the basics of web development and how to build responsive websites and web applications from scratch using modern technologies like HTML, CSS, JavaScript, and React. I also leanred to work with Node.js, Express, MongoDB, and other backend technologies.'}
                    />
                    <EducationDetails
                        certification={'Responsive Web Design'}
                        institution={'Scrimba Learning Platform'}
                        duration={'April 2023'}
                        address={'Remote'}
                        info={'Completed the Responsive Web Design course by Kelvin Powell and got an in-depth understanding of the concept and industry standard practices to follow when building responsive websites and web applications.'}
                    />
                </ul>
            </div>
        </>
    )
}

export default Education