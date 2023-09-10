import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'
import Layout from '@/components/Layout'

const montserrat = Montserrat({subsets: ['latin'], variable: "--font-montserrat"})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* Favicon Later */}
        <link rel="icon" href="/JJlogo.jpeg" sizes='80x80' />
      </Head>
      <main className={`${montserrat.variable} font-montserrat bg-light w-full min-h-screen`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  )
}
