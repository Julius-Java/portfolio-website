import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GithubSVG } from './Icons'

type ProjectProps = {
    title: string
    type: string
    img: any
    link: string
    github: string
}

const Project = ({title, type, img, link, github}: ProjectProps) => {
    return (
        <article
            className='flex flex-col justify-center rounded-2xl border border-dark bg-light p-6 relative shadow-lg dark:bg-dark dark:text-light dark:border-light'
        >
                <Link
                    href={link}
                    target='_blank'
                    className='w-full cursor-pointer rounded-lg overflow-hidden'
                >
                    <Image className='transition-all duration-300 hover:scale-110' src={img} alt={title} />
                </Link>

                <div className='flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                    <Link
                        href={link}
                        target='_blank'
                        className='hover:underline'
                    >
                        <h3 className='my-2 w-full text-left text-3xl font-bold'>{title}</h3>
                    </Link>

                    <div className='w-full mt-2 flex justify-between items-center gap-3'>
                        <Link
                            href={link}
                            target='_blank'
                            className='text-lg font-semibold underline '
                        >
                            View
                        </Link>
                        <Link
                            href={github}
                            target='_blank'
                            className='w-8'
                        >
                            <GithubSVG />
                        </Link>

                    </div>
                </div>
        </article>
    )
}

export default Project