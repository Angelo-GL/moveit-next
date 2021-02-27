import {createContext, ReactNode, useState} from 'react'
import challenges from '../../challenges.json' 


interface Challenge{
    type: 'body' |'eye';
    description: string;
    amount: number;
}

interface ChallengesProviderProps{
    children: ReactNode //ReactNode aceita qualquer elemento como filho
}

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChalleng: Challenge;
    experienceToNextLevel: number;
    levelUp: ()=> void;
    startNewChallenge: () => void; 
    resetChallenge: () => void;   
}

export const ChallengesContext = createContext({} as ChallengesContextData) //O contexto segue o fomato especificado na interface

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted,setchallengesCompleted] = useState(0)

    const [activeChalleng, setActiveChalleng] = useState(null)


    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp(){
        setLevel(level +1)
    }

    function startNewChallenge(){
        const randonChallengesIndex = Math.floor(Math.random() *  challenges.length)
        const challenge = challenges[randonChallengesIndex]

        setActiveChalleng(challenge)
    }

    function resetChallenge(){
        setActiveChalleng(null)
    }

    return (
        <ChallengesContext.Provider
         value = {{
             level,
             currentExperience,
             challengesCompleted,
             activeChalleng,
             experienceToNextLevel,
             levelUp,
             startNewChallenge,
             resetChallenge,
             }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}