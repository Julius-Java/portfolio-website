import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
const montserrat = Montserrat({subsets: ['latin'], variable: "--font-montserrat"})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* Favicon Later */}
        <link rel="icon" href="/JJlogo.jpeg" sizes='80x80' />
      </Head>
      <main
        className={`${montserrat.variable} font-montserrat bg-light w-full min-h-screen transition-all duration-200 dark:bg-dark overflow-hidden`}
      >
        <Layout>
          <AnimatePresence mode='wait'>
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </Layout>
      </main>
    </>
  )
}
