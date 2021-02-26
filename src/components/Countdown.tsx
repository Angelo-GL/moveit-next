import { useState, useEffect } from 'react'
import style from '../style/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown(){
    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setisAtive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minute  = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minute).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountdown(){
        setisAtive(true)
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setisAtive(false)
        setTime(0.1 * 60)
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout =  setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if(isActive && time === 0){
            setHasFinished(true)
            setisAtive(false)
        }
    }, [isActive, time])
    return(
        <div>
            <div className = {style.CountdownCountainer}>
                 <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                 </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>   

            {hasFinished ? (
                <button disabled className = {style.countdownButton}>
                     Ciclo encerrado
                </button>
            ) : (
               <> {/* é a um fragmento semelhante ao React.Fragment*/}
                    {isActive ? (
                            <button type = 'button' className = {`${style.countdownButton} ${style.countdownButtonActive}`}
                                  onClick = {resetCountdown}>
                                 Abandonar ciclo
                             </button>
                             ): (
                                 <button type = 'button' className = {style.countdownButton}
                                    onClick = {startCountdown}>Iniciar ciclo
                                 </button>
                    )}       
            
                </> 
            )}
        </div>
        
    )
}