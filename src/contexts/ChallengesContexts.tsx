import { formatWithValidation } from "next/dist/next-server/lib/utils";
import {createContext, ReactNode, useState} from 'react'



interface ChallengesProviderProps{
    children: ReactNode //ReactNode aceita qualquer elemento como filho
}

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: ()=> void;
    startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData) //O contexto segue o fomato especificado na interface

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted,setchallengesCompleted] = useState(0)

    function levelUp(){
        setLevel(level +1)
    }
    function startNewChallenge(){
        console.log("New Challenge")
    }

    return (
        <ChallengesContext.Provider
         value = {{
             level,
             currentExperience,
             challengesCompleted,
             levelUp,
             startNewChallenge
             }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}