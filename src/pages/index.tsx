import { CompletedChallenges } from '../components/CompletedChallenges'
import {ExperienceBar} from '../components/ExperienceBar'
import {Profile} from '../components/Profile'


import Styles from '../style/pages/Home.module.css'

export default function Home() {
  return (
    <div className= {Styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
