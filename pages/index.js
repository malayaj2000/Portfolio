import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "tailwindcss/tailwind.css";
import Intro from '../components/Intro';
import Profile from '../components/Profile';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Cources from '../components/Cources';
import Achievement from '../components/Achievement';

export default function Home() {
  return (
    <>

      <Head>
        <title>portfolio</title>
      </Head>


      <main>
        <div className={styles.container}>
          <div>
            <div className="grid grid-cols-10 grid-flow-col ">
              <Profile />
              <Intro />
              <br />

              <Skill />
              <Project />
              <br />
              <Cources />
              <Achievement />
              <br />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
