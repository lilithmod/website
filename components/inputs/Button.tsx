import styles from './Button.module.css'
import type { DetailedHTMLProps, HTMLAttributes } from 'react'
import Link from 'next/link'
import { LinkSimple } from 'phosphor-react'

export interface ButtonProps {
    size?: 'small' | 'medium' | 'large',
    link?: string,
    icon?: boolean,
    disabled?: boolean,
}

export default function Button(props: React.PropsWithChildren<ButtonProps>) {
    return props.link
        ? (
            <Link href={props.link} className={`${styles.button} ${styles[props.size || 'medium']} ${props.disabled ? styles.disabled : ''}`} {...props} >
                {props.icon ? <LinkSimple /> : <></>}
                {props.children}
            </Link>
        )
        : (
            <button className={`${styles.button} ${styles[props.size || 'medium']} ${props.disabled ? styles.disabled : ''}`}{...props}>{props.children}</button>
        )
}