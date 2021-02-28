import '../style/global.css'

import {ChallengesProvider} from '../contexts/ChallengesContexts'
//Dentro desse arquivo ficarão os componentes fixos, ou seja, os componentes que estarão em todas as páginas (componentes que se repetem).
function MyApp({ Component, pageProps }) {
  return(
      <Component {...pageProps}/>
  ) 
}

export default MyApp
