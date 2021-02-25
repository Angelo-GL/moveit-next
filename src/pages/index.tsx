import { CompletedChallenges } from '../components/CompletedChallenges'
import {ExperienceBar} from '../components/ExperienceBar'
import {Profile} from '../components/Profile'
import {Countdown} from '../components/Countdown'

import Head from 'next/head'

import Styles from '../style/pages/Home.module.css'


export default function Home() {
  return (
    <div className= {Styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
