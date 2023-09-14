import React from 'react'
import {motion} from "framer-motion"

type SkillProps = {
    name: string,
    x: string,
    y: string
}

const Skill = ({name, x, y}: SkillProps) => {
    return (
        <motion.div
            className="text-center rounded-full font-semibold bg-dark text-light px-8 py-4 transition-all duration-100 absolute cursor-pointer dark:bg-light dark:text-dark"
            initial={{x: 0, y: 0}}
            whileHover={{scale: 1.05}}
            whileInView={{x: x, y: y, transition: {duration: 1.5}}}
            // transition={{duration: 1.5}}
            viewport={{once: true}}
        >
            {name}
        </motion.div>
    )
}

export default Skill