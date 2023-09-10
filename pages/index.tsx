/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import indexImgNoBg from '@/public/indexImgNoBg.png'

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
          <h1 className='text-black text-6xl mb-4 font-extrabold w-full'>Crafting Digital Dreams: Code and Design Fusion.</h1>
          <p className='font-semibold'> As a skilled front-end web developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in React.js, Next JS and web development in general.</p>
        </div>
      </div>
    </main>
  )
}
