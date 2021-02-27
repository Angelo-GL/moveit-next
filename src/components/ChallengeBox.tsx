import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import styles from '../style/components/ChallengeBox.module.css'

export function ChallengeBox (){

    const {activeChalleng, resetChallenge, conpleteChallenge} = useContext(ChallengesContext )
   
    return(
        <div className = {styles.challengeBoxContainer}>
            {activeChalleng ? (
                <div className = {styles.challengeActive}>
                    <header>Ganhe {activeChalleng.amount} xp</header>

                    <main>
                        <img src= {`icons/${activeChalleng.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChalleng.description}</p>
                    </main>

                    <footer>
                        <button type = 'button' className = {styles.challengeFailedButton} onClick = {resetChallenge} >Falhei</button>
                        <button type = 'button' className = {styles.challengeSucceededButton} onClick = {conpleteChallenge}>Completei</button>
                    </footer>
                </div>
            ): (
                 <div className= {styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafios</strong>
                    <p>
                        <img src= "icons/level-up.svg" alt = "Level Up" />
                        Avance de level completando desafios
                    </p>
                </div>
                )}
        </div>
    )
}