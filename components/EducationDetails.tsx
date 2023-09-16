import React, {useRef} from 'react'
import LiIcon from './LiIcon'
import {motion} from 'framer-motion'

type EducationDetailsProps = {
    certification: string,
    duration: string,
    institution: string,
    address: string,
    info: string
}

const EducationDetails = ({certification, institution, duration, address, info}: EducationDetailsProps) => {
    const ref = useRef<HTMLLIElement | null>(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, type: "spring", bounce: 0.3}}
            >
                <h3 className='capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg'>{certification} <span className='text-primary dark:text-primaryDark'>@ {institution}</span></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {duration} | {address}
                </span>
                <p className='font-medium dark:text-light md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

export default EducationDetails