import { GetStaticProps } from 'next'
import config from '../config'
import containers from '../styles/Containers.module.css'

export interface AboutProps {
    header: string,
    content: string[],
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
    return {
        props: {
            ...config.pages.about
        }
    }
}

export default function About(props: AboutProps) {
    return (
        <section>
            <div className={containers.content}>
                <h1>{props.header}</h1>
                <p dangerouslySetInnerHTML={{ __html: props.content.join('') }}></p>
            </div>
        </section>
    )
}