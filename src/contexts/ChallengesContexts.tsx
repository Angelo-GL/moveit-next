import {createContext, ReactNode, useEffect, useState} from 'react'
import challenges from '../../challenges.json' 
import Cookies from 'js-cookie'


interface Challenge{
    type: 'body' |'eye';
    description: string;
    amount: number;
}

interface ChallengesProviderProps{
    children: ReactNode //ReactNode aceita qualquer elemento como filho
    level: number;
    currentExperience: number;
    challengesCompleted: number;
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
    conpleteChallenge: () => void; 
}

export const ChallengesContext = createContext({} as ChallengesContextData) //O contexto segue o fomato especificado na interface

export function ChallengesProvider({children, ...rest}: ChallengesProviderProps){
    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted,setchallengesCompleted] = useState(rest.challengesCompleted ?? 0)

    const [activeChalleng, setActiveChalleng] = useState(null)


    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {  //Executa uma permissão ao usuário 
        Notification.requestPermission()  
    }, [])

    useEffect(()=>{
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))
        Cookies
    }, [level, challengesCompleted, currentExperience])


    function levelUp(){
        setLevel(level + 1)
    }

    function startNewChallenge(){
        const randonChallengesIndex = Math.floor(Math.random() *  challenges.length)
        const challenge = challenges[randonChallengesIndex]

        setActiveChalleng(challenge)

        new Audio('/notification.mp3').play()

        if(Notification.permission === 'granted'){  //Notifica ao usuário caso a permissão seja aceita.
            new Notification ('Novo desafio!', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge(){
        setActiveChalleng(null)
    }

    function conpleteChallenge(){
        if(!activeChalleng){
            return; 
        }

        const {amount} = activeChalleng
        let finalExperience = currentExperience + amount
        
        if(finalExperience >=experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }
        setCurrentExperience(finalExperience)
        setActiveChalleng(null)
        setchallengesCompleted(challengesCompleted + 1)
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
             conpleteChallenge
             }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}