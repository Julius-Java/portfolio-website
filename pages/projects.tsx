import React from 'react'
import Head from 'next/head'
import AnimatedHeading from '@/components/AnimatedHeading'
import FeaturedProject from '@/components/FeaturedProject'
import Project from '@/components/Project'
import watt from "../public/screenshots/wattScreenShot.png"
import ageCalculator from "../public/screenshots/ageCalculator.png"
import interactiveCard from "../public/screenshots/interactiveCardForm.png"
import noteBlitz from "../public/screenshots/noteBlitzDark.png"
import notificationPage from "../public/screenshots/notificationPage.png"
import movieWebsite from "../public/screenshots/movieWeb.png"

const Projects = () => {
    return (
        <>
            <Head>
                <title>Julius Java | Projects</title>
            </Head>
            <main className='p-32 dark:text-white'>
                <AnimatedHeading
                    text="Exploring Innovation: A Showcase of My Projects"
                    className='text-black text-7xl mb-14 font-extrabold w-full text-center dark:text-light'
                />

                <div
                    className='grid grid-cols-12 gap-24'
                >
                    <div
                        className='col-span-12'
                    >
                        <FeaturedProject
                            title='Watt'
                            summary='Frontend for a utility payment platform built with React JS and CSS'
                            link='https://watt-v2.vercel.app/'
                            type='Featured Project'
                            img={watt}
                            github='https://github.com/Julius-Java/Watt-v2'
                        />
                    </div>

                    <div
                        className='col-span-6'
                    >
                        <Project
                            title='Interactive Card Form'
                            link='https://interactive-card-form-five.vercel.app/'
                            type='Personal Project'
                            img={interactiveCard}
                            github='https://github.com/Julius-Java/interactive-card-form'
                        />
                    </div>

                    <div
                        className='col-span-6'
                    >
                        <Project
                            title='Age Calculator'
                            link='https://age-calculatore.vercel.app/'
                            type='Personal Project'
                            img={ageCalculator}
                            github='https://github.com/Julius-Java/ageCalculatore'
                        />
                    </div>

                    <div
                        className='col-span-12'
                    >
                        <FeaturedProject
                            title='Note Blitz'
                            summary='A minimal Todo web app built with Next JS, Tailwind CSS and Daisy UI. It stores user todo in browser local storage for persistence. Users can create multiple categories for different todos e.g School, Business, Personal etc. It also has a dark mode. The note section where users would be able to write notes is still under development.'
                            link='https://note-blitz.vercel.app/'
                            type='Featured Project'
                            img={noteBlitz}
                            github='https://github.com/Julius-Java/noteBlitz'
                        />
                    </div>

                    <div
                        className='col-span-6'
                    >
                        <Project
                            title='Notification Page'
                            link='https://notification-page-weld-three.vercel.app/'
                            type='Personal Project'
                            img={notificationPage}
                            github='https://github.com/Julius-Java/notification-page'
                        />
                    </div>

                    <div
                        className='col-span-6'
                    >
                        <Project
                            title='Movie Web App'
                            link='https://movie-app-ten-gold.vercel.app/'
                            type='Personal Project'
                            img={movieWebsite}
                            github='https://github.com/Julius-Java/movie-app'
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Projects