import { createContext, ReactNode } from "react";


interface CountdownContextData{  //Inerface que especifica os tipos de dados retornados por esse contexto

}

interface CountdownProviderProps{
    children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData) 

export function CountdownProvider({children}: CountdownProviderProps){
    
    return (
        <CountdownContext.Provider value = {{}}>
            {children}
        </CountdownContext.Provider>
    )
}
