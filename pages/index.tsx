/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import indexImgNoBg from '@/public/indexImgNoBg.png'
import AnimatedHeading from '@/components/AnimatedHeading'
import Link from 'next/link'
import { LinkArrowSVG } from '@/components/Icons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>Julius Java's Portfolio</title>
      </Head>
      <div className='flex items-center justify-between text-dark w-full min-h-screen z-0 bg-light p-32 pt-2'
      >
        <div className='w-[35%]'>
          <Image src={indexImgNoBg} alt='Emmanuel Julius' className='w-full rounded-lg' />
        </div>
        <div className='w-[50%]'>
          {/* <h1 >h1> */}
          <AnimatedHeading
            text={"Crafting Digital Dreams: Code and Design Fusion."}
            className='text-black text-6xl mb-6 font-extrabold w-full'
          />
          <p className='font-semibold text-base'> As a skilled front-end web developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in React.js, Next JS and web development in general.</p>


        {/* Home Page CTA */}
        <div className='mt-6 flex items-center gap-4'>
          <Link
            href={"/dummy.pdf"}
            download={true}
            className='flex gap-1 bg-dark rounded-lg py-2.5 px-6 text-light font-semibold text-lg border-2 border-solid border-dark hover:bg-light hover:text-dark transition-all duration-300 ease-in-out'
          >
            Resume
            <LinkArrowSVG className='w-6' />
          </Link>

          <Link target='_blank' href={"mailto:juliusjava00@gmail.com"} className='text-semibold text-dark underline'>Contact me</Link>
        </div>
        </div>
      </div>
    </main>
  )
}
