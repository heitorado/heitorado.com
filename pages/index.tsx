import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="py-0 px-8">
      <Head>
        <title>heitorado</title>
        <meta name="description" content="Heitor Carvalho's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-16 px-0 flex-1 flex flex-col justify-center items-center">
        <h1 className="m-0 text-6xl">
          Heitor Carvalho
        </h1>

        <h2 className="m-0 text-4xl text-opacity-60 text-slate-700">
          software is all about people.
        </h2>

        <p className="my-8 mx-0 text-2xl">
          Get started by editing{' '}
          <code>pages/index.tsx</code>
        </p>

        <div className="flex items-center justify-center flex-wrap max-w-3xl">
         

        </div>
      </main>

      <footer className="flex justify-center items-center grow">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="h-4 mx-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  // const res = await fetch('url', { 
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //   }
  // )
  // const projects = await res.json()

  return {
    props: {
      projects: sampleProjectData
    }
  }
}

export default Home
