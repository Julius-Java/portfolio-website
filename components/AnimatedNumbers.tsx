import React, { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

type AnimatedNumbersProps = {
    value: number
}

const AnimatedNumbers = ({value}: AnimatedNumbersProps) => {
    const numRef = useRef<HTMLSpanElement | null>(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        duration: 4000,
    })
    const isInView = useInView(numRef)

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }
    , [isInView, motionValue, value])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (numRef.current && latest.toFixed(0) <= value) {
                numRef.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return (
        <span ref={numRef}>

        </span>
    )
}

export default AnimatedNumbers