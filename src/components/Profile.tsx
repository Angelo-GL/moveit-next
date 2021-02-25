import styles from '../style/components/Profile.module.css'

export function Profile(){
    return(
        <div className = {styles.profileContainer}>
            <img src="https://github.com/Angelo-GL.png" alt="Gabriel Lopes"/>
            <div>
                <strong>Gabriel Lopes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}