import React, { createRef, RefObject, useCallback, useRef, useState } from 'react'
import { ChangeEvent, useEffect } from 'react'
import styles from './Switch.module.css'

interface SwitchProps {
    items: string[],
    name: string,
    handleClick: (index: number) => void,
    clicked: number
}

export default function Switch(props: SwitchProps) {
    const [current, setCurrent] = useState<number[]>([0])
    const [size, setSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 })

    const itemsRef = useRef<any>(props.items.map(() => createRef()))
    const highlightRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const currentLefts = itemsRef.current.map((ref: RefObject<HTMLElement>) => ref.current?.getBoundingClientRect().left)
        setCurrent(currentLefts)
    }, [size])

    const moveBackground = useCallback(() => {
        if (highlightRef.current) {
            highlightRef.current.style.left = `${current[props.clicked] - 2  }px`
        }
    }, [current, props.clicked])

    useEffect(() => {
        moveBackground();

        (document.getElementsByName(props.name) as NodeListOf<HTMLInputElement>).forEach((value, index) => {
            value.checked = index == props.clicked
        })
    }, [moveBackground, props.clicked, props.name])

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined = undefined
        const set = (event: UIEvent) => {
            if (interval) clearInterval(interval)
            interval = setTimeout(() => {
                setSize({
                    width: window.screen.width,
                    height: window.screen.height
                })
            }, 150)
        }

        window.addEventListener('resize', set)

        return () => {
            window.removeEventListener('resize', set)
        }
    }, [])

    return (
        <div className={styles.container}>
            <span ref={highlightRef}></span>
            <fieldset className={styles.switch} onClick={() => {
                if (highlightRef.current) {
                    highlightRef.current.style.transitionDuration = '0.3s'
                }
            }}>
                {props.items.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <input
                                onClick={() => props.handleClick(index)}
                                defaultChecked={index == props.clicked}
                                type="radio"
                                id={`radio-${props.name}-${index}`}
                                name={props.name}
                                value={index}
                            />
                            <label 
                                htmlFor={`radio-${props.name}-${index}`} 
                                ref={itemsRef.current[index]}
                            >
                                {item}
                            </label>
                        </React.Fragment>
                    )
                })}
            </fieldset>
        </div>
    )
}