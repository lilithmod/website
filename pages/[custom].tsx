import { useEffect, useState } from 'react'
import Button from '../components/inputs/Button'
import config from '../config'
import containers from '../styles/Containers.module.css'

import { useRouter } from 'next/router'

export interface CustomPageProps {
    route: string,
    displayStatusCode?: boolean,
    statusCode?: number,
    header: string,
    content: string[],
    buttonText?: string,
    buttonLink?: string
}

export async function getStaticPaths() {
    return {
        paths: config.pages.custom.map(page => ({
            params: {
                custom: page.route,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }: { params: { custom: string } }) {
    const page = config.pages.custom.find(page => page.route === params.custom)
    return {
        props: {
            ...page,
        },
    }
}

export default function CustomPage(props: CustomPageProps) {
    const [content, setContent] = useState('')

    const router = useRouter()

    useEffect(() => {

        let tempContent = props.content.join('<br/>')
        const params = new URLSearchParams(router.asPath.split('?')[1])

        const obj: any = JSON.parse(Buffer.from(params.get('d') ?? 'e30=', 'base64').toString() ?? '{}')

        Object.keys(obj).forEach((key) => {
            tempContent = tempContent.replace(`{${key}}`, obj[key])
        })
    
        setContent(tempContent)

    }, [props.content, router.asPath])

    return (
        <section>
            <div className={`${containers.content} ${containers.centered}`}>
                {props.displayStatusCode && props.statusCode && <h3 className={containers.subheader}>{props.statusCode}</h3>}
                <h1>{props.header}</h1>
                <p style={{ fontSize: '1.25rem', color: 'white', marginTop: '0.5em', paddingBottom: '0.5em' }} dangerouslySetInnerHTML={{__html: content }}></p>
                <Button link={props.buttonLink ?? '/'}>{props.buttonText ?? 'Go Home'}</Button>
            </div>
        </section>
    )
}