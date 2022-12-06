import { GetStaticProps, InferGetStaticPropsType } from 'next/types'
import Link from 'next/link'
import config from '../config'
import styles from './Footer.module.css'

export interface FooterProps {
    columns: {
        title: string,
        links: {
            text: string,
            href: string,
        }[]
    }[]
}

export default function Footer() {
    const columns = config.footer.columns
    return (
        <footer className={styles.footer}>
            {columns.map((column, i) => (
                <div key={i} className={styles.footerContent}>
                    <h3>{column.title}</h3>
                    <ul>
                        {column.links.map((link, i) => (
                            <li key={i}>
                                <Link href={link.href}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </footer>
    )
}