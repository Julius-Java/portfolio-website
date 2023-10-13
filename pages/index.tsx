/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import indexImgNoBg from '@/public/indexImgNoBg.png'
import newIndexImg from "../public/newIndeximg.png"
import AnimatedHeading from '@/components/AnimatedHeading'
import Link from 'next/link'
import { LinkArrowSVG } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import { LightBulbSVG } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
import { PaperClipIcon } from '@heroicons/react/20/solid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main>
        <Head>
          <title>Julius Java's Portfolio</title>
          <meta name='description' content="Julius Java's Portfolio Website. Professional Frontend Developer" />
        </Head>
        <TransitionEffect />
        <div
          className='flex items-center justify-between text-dark w-full min-h-screen z-0 bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-2 lg:flex-col lg:justify-center lg:gap-6'
        >
          <div className='w-[35%] md:w-[50%]'>
            <Image
              priority
              src={newIndexImg}
              alt='Emmanuel Julius'
              className='w-full rounded-lg lg:hidden md:block'
            />
          </div>
          <div className='w-[50%] lg:w-full'>
            {/* <h1 >h1> */}
            <AnimatedHeading
              text={"Crafting Digital Dreams: <br/> Code and Design Fusion."}
              className='text-black text-6xl xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl  mb-6 font-extrabold w-full dark:text-light'
            />
            <p className='font-semibold text-base dark:text-light lg:text-center'> As a skilled front-end web developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in React.js, Next JS and web development in general.</p>


          {/* Home Page CTA */}
          <div className='mt-6 flex items-center gap-4 lg:justify-center'>
            <Link
              href={"/JuliusJavaResume2.pdf"}
              download={true}
              target='_blank'
              className='flex gap-1 bg-dark rounded-lg py-2.5 px-6 text-light font-semibold text-lg border-2 border-solid border-dark hover:bg-light hover:text-dark transition-all duration-300 ease-in-out dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:px-4 md:py-1.5 md:text-base'
            >
              Resume
              {/* <LinkArrowSVG
                className='w-6'
              /> */}
              <PaperClipIcon
                className='w-6'
              />
            </Link>

            <Link target='_blank' href={"mailto:juliusjava00@gmail.com"} className='text-semibold text-dark underline dark:text-light'>Contact me</Link>
          </div>
          </div>
        </div>
        <HireMe />
        <div
          className='absolute right-8 bottom-8 w-28 md:hidden'
        >
          <LightBulbSVG />
        </div>
      </main>
  )
}
