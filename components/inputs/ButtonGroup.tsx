import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react'
import React from 'react'
import Button, { ButtonProps } from './Button'
import styles from './ButtonGroup.module.css'

export default function ButtonGroup(props: React.HTMLAttributes<HTMLElement> & React.PropsWithChildren) {
    return (
        <div {...props} className={`${styles.container} ${props.className}`}>
            {props.children}
        </div>
    )
}