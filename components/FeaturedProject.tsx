import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubSVG } from "./Icons";
import { motion } from "framer-motion";

type FeaturedProjectProps = {
    type: string;
    title: string;
    summary: string;
    img: any;
    link: string;
    github?: string;
};

// const motionImage = motion()

const FeaturedProject = ({
    type,
    title,
    summary,
    img,
    link,
    github,
}: FeaturedProjectProps) => {
    return (
        <article className="flex p-12 items-center justify-between rounded-3xl border border-dark bg-light shadow-2xl relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />*/}
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer rounded-lg overflow-hidden lg:w-full"
            >
                <Image
                    className="transition-all duration-300 hover:scale-110"
                    src={img}
                    alt={title}
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline dark:text-light"
                >
                    <h3 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
                        {title}
                    </h3>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>

                <div className="mt-2 flex items-center gap-3">
                    {github && (
                        <Link href={github} target="_blank" className="w-10">
                            <GithubSVG />
                        </Link>
                    )}
                    <Link
                        href={link}
                        target="_blank"
                        className="rounded-lg bg-dark text-white py-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
                    >
                        View Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default FeaturedProject;
