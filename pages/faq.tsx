import styles from '../styles/FAQ.module.css'
import containers from '../styles/Containers.module.css'
import { GetStaticProps } from 'next'
import config from '../config'

export interface FAQProps {
    header: string,
    content: string[],
    accordions: {
        header: string,
        content: string[]
    }[]
}

export const getStaticProps: GetStaticProps<FAQProps> = async () => {
    return {
        props: {
            ...config.pages.faq
        }
    }
}

export default function FAQ(props: FAQProps) {
    return (
        <section>
            <div className={containers.content}>
                <h1>{props.header}</h1>
                <p dangerouslySetInnerHTML={{ __html: props.content.join('') }}></p>
                <ul className={styles.container}>
                    {props.accordions.map((entry, key) => (
                        <li key={key}>
                            <input type="checkbox" name={`accordion-${key}`} id={`accordion-${key}`} />
                            <label htmlFor={`accordion-${key}`}>
                                <h4>{entry.header}</h4>
                            </label>
                            <p dangerouslySetInnerHTML={{ __html: entry.content.join('') }}></p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}