import React from 'react'
import { motion } from 'framer-motion'
const MotionHeading = motion.h1
const MotionSpan = motion.span

const textQuote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleQuote = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

const AnimatedHeading = ({text, className=""}: any) => {
    return (
        <MotionHeading
            className={`${className}`}
            variants={textQuote}
            initial="initial"
            animate="animate"
        >
            {
                text.split(" ").map((word: string, index: number) => (
                    <MotionSpan
                        key={index}
                        className="inline-block"
                        variants={singleQuote}
                    >
                        {word}&nbsp;
                    </MotionSpan>
                ))
            }
        </MotionHeading>
    )
}

export default AnimatedHeading