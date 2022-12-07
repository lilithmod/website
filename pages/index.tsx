import Image from 'next/image'
import { GetStaticProps } from 'next/types'
import { useEffect, useState } from 'react'
import Button from '../components/inputs/Button'
import ButtonGroup from '../components/inputs/ButtonGroup'
import config from '../config'
import styles from '../styles/Home.module.css'

export interface HomeProps {
    sections: [
        {
            paragraph: string,
            title: string,
        },
        {
            images: {
                path: string,
                title: string,
                description: string,
            }[];
        },
        {
            title: string,
            catchphrase: string,
        }
    ]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    return {
        props: {
            ...config.pages.home
        },
    }
}

function getDivs(amount: number) {
    const divs = []
    for (let i = 0; i < amount; i++) {
        divs.push(<div key={i} style={{
            // styles the div with a random height between 250 and 500px
            width: '250px',
            height: `${Math.floor(Math.random() * 250) + 250}px`,
            backgroundColor: 'orange',
            margin: '10px'
        }}>{i + 1}</div>)
    }
    return divs
}

export default function Home(props: HomeProps) {

    return (
        <>
            <section className={styles.first}>
                <div className={styles.index}>
                    <p>{props.sections[0].paragraph}</p>
                    <h1>
                        {props.sections[0].title}
                    </h1>
                    <ButtonGroup>
                        <Button size="medium" link="/download">Download</Button>
                        <Button size="medium" link="/pricing">Buy Now</Button>
                    </ButtonGroup>
                </div>

                <div className={styles.sectionBackground}>
                    <div className={styles.background} />
                    <svg preserveAspectRatio="none" className={styles.overlay} width="1280" height="832" viewBox="0 0 1280 832" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1280 254L1219 670L0 741V832L1280 761V254Z" fill="#EF2D5B"/>
                    </svg>
                </div>

                <div className={`${styles.index}`} >
                    {/* Hypixel SVG */}
                    <svg width="181" height="290" viewBox="0 0 181 290" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_223_245)">
                            <path d="M84.5 46.5V107.5H94V42.5L151 22L129.5 60.5V182.5L94 217.5V137.5H84.5V251.5L49.5 191.5V78L30 66.5L84.5 46.5Z" fill="white"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_223_245" x="0" y="0" width="181" height="289.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="8"/>
                                <feGaussianBlur stdDeviation="15"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_223_245"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_223_245" result="shape"/>
                            </filter>
                        </defs>
                    </svg>

                </div>
            </section>

            <section className={`vertical ${styles.second}`}>
                {props.sections[1].images.map((image, index) => (
                    <div key={index} className={`${index % 2 == 0 ? styles.invert : ''}`}>
                        <Image src={image.path} alt={image.title} width={620} height={350} />
                        <div>
                            <h2>{image.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: image.description }}></p>
                        </div>
                    </div>
                ))}
            </section>

            <section className={`vertical ${styles.third}`}>
                <h3>{props.sections[2].catchphrase}</h3>
                <h2>{props.sections[2].title}</h2>
                <ButtonGroup>
                    <Button size="medium" link="/download">Download</Button>
                    <Button size="medium" link="/pricing">Buy Now</Button>
                </ButtonGroup>
            </section>
        </>
    )
}
