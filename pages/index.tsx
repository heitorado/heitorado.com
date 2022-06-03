import styles from '../styles/index.module.css'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import type { Project } from '../types'
import sampleProjectData from './projects.json'
import Card from '../components/Card'

type Props = {
  projects: Project[]
}

const Home: NextPage<Props> = ({ projects }: Props) => {
  return (
    <div className="py-0 px-8">
      <Head>
        <title>heitorado</title>
        <meta name="description" content="Heitor Carvalho's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-16 px-0 flex-1 flex flex-col justify-center items-center">
        <div className='flex flex-col items-center w-4/12'>
          <h1 className={`text-6xl ${styles['nerd-font-rg']}`}>
            Heitor Carvalho
          </h1>

          <h2 className={`mt-0 mb-0 text-3xl font-mono ${styles['nerd-font-lt']}`}>
            software is all about people
            <span className={styles['character-blink-animation']}>_</span>
          </h2>
        </div>


        <div className="flex items-center justify-center flex-wrap max-w-4xl">
          {projects.map((project) => <Card key={project.id} project={project}/>)}
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
