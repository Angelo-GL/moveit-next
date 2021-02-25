import Document, {Html, Head, Main, NextScript} from 'next/document'

//Tudo que se mantem estático em todas as telas 
export default class MyDocument extends Document {
    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Rajdhani:wght@500&amp;display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}