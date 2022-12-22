import { Head, Html, Main, NextScript } from 'next/document'
import { GetStaticProps } from 'next/types'
import config from '../config'

export interface DocumentProps {
    title: string,
    url: string,
    description: string,
    color: string
}

export default function Document() {
    const props: DocumentProps = config.pages.document;
    return (
        <Html>
            <Head>
                <meta property="og:title" content={props.title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={props.url} />
                {/* <meta property="og:image" content="url" /> */}
                <meta property="og:description" content={props.description} />
                <meta name="theme-color" content={props.color} />
                <link rel="icon" href="/images/lilith-square.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> 
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
