import { useEffect, useState } from 'react'
import Button from '../components/inputs/Button'
import config from '../config'
import containers from '../styles/Containers.module.css'

export interface CustomPageProps {
    route: string,
    displayStatusCode?: boolean,
    statusCode?: number,
    header: string,
    content: string[]
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

    useEffect(() => {
        const parseURLQuery = (url: string): { [key: string]: string } => {
            const query = url.split('?')[1]
            if (!query) return {}
            const queryObject: { [key: string]: string } = {}
            query.split('&').forEach(query => {
                const [key, value] = query.split('=')
                queryObject[key] = value
            })
            return queryObject
        }
    
        setContent(props.content.join('<br>').replace(/{.+}/, (match) => {
            const query = parseURLQuery(location.href)[match.slice(1, -1)]
            return query || match
        }))
    }, [props.content])

    return (
        <section>
            <div className={`${containers.content} ${containers.centered}`}>
                {props.displayStatusCode && props.statusCode && <h3 className={containers.subheader}>{props.statusCode}</h3>}
                <h1>{props.header}</h1>
                <p style={{ fontSize: '1.25rem', color: 'white' }} dangerouslySetInnerHTML={{__html: content }}></p>
                <Button link="/">Go Home</Button>
            </div>
        </section>
    )
}