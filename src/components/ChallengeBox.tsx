import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../style/components/ChallengeBox.module.css'

export function ChallengeBox (){

    const {activeChalleng, resetChallenge, conpleteChallenge} = useContext(ChallengesContext )
    const {resetCountdown} = useContext(CountdownContext)

    function handleChallengeSucceeded(){
        conpleteChallenge();
        resetCountdown()
    }

    function handleChallengeFailed(){
        resetChallenge()
        resetCountdown()
    }
   
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
                        <button type = 'button' className = {styles.challengeFailedButton} onClick = {handleChallengeFailed} >Falhei</button>
                        <button type = 'button' className = {styles.challengeSucceededButton} onClick = {handleChallengeSucceeded}>Completei</button>
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