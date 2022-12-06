import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import Button from '../components/inputs/Button'
import Switch from '../components/inputs/Switch'
import config from '../config'
import containers from '../styles/Containers.module.css'
import styles from '../styles/Pricing.module.css'

interface PricingCardProps {
    recommended?: boolean, 
    tier: string,
    price: string,
    secondaryPrice: string,
    link: string,
    buttonText: string,
    secondaryButtonText: string,
    content: string[],
}

const PricingCard = (props: PricingCardProps & { secondary: boolean }) => {
    const formatPrice = (price: string): string => {
        return price.includes('/')
            ? `${price.split('/')[0]}/${price.split('/')[1]}`
            : price
    }

    return (
        <div className={`${styles.card} ${props.recommended ? styles.recommended : ''}`}>
            <h2>{props.tier}</h2>
            <h3>
                {formatPrice(props.secondary ? props.secondaryPrice : props.price)}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: props.content.join('') }}></div>
            <div className={styles.buttonContainer}>
                <Button link={props.link} disabled={props.secondary && props.secondaryButtonText === 'Coming Soon'}>{props.secondary ? props.secondaryButtonText : props.buttonText}</Button>
            </div>
        </div>
    )
}

export interface PricingProps {
    paragraph: string,
    switch: [string, string],
    cards: PricingCardProps[]
}

export const getStaticProps: GetStaticProps<PricingProps> = async () => {
    return {
        props: {
            ...config.pages.pricing,
        }
    }
}

export default function Pricing(props: PricingProps) {
    const [monthly, setMonthly] = useState(0)

    return (
        <section>
            <div className={containers.content}>
                <div className={containers.content}>
                    <div className={containers.horizontal}>
                        <h1>Pricing</h1>
                        <Switch clicked={monthly} handleClick={setMonthly} name="pricing-switch" items={props.switch} />
                    </div>
                    <p>Support the ongoing development of Lilith while getting exclusive perks and features.</p>
                </div>
                <div className={`${containers.horizontal} ${styles.cardContainer}`}>
                    {props.cards.map((element, key) => {
                        return (
                            <PricingCard 
                                content={element.content} 
                                recommended={element.recommended} 
                                buttonText={element.buttonText} 
                                link={element.link} 
                                tier={element.tier} 
                                price={element.price}
                                secondaryButtonText={element.secondaryButtonText}
                                secondaryPrice={element.secondaryPrice}
                                secondary={monthly == 1}
                                key={key}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}