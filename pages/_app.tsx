import '../styles/globals.css'


//Dentro desse arquivo ficarão os componentes fixos, ou seja, os componentes que estarão em todas as páginas.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
