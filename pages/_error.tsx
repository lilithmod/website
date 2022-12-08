import containers from '../styles/Containers.module.css'
import { ErrorProps } from 'next/error.js'
import Link from 'next/link'

export default function ErrorPage(props: ErrorProps) {

    return (
        <section>
            <div className={`${containers.content} ${containers.centered}`}>
                <h3 className={containers.subheader}>{props.statusCode}</h3>
                <h1>You appear to be lost.</h1>
                <p style={{ fontSize: '1.25rem', color: 'white', marginTop: '1em' }}>You can either go <Link href="/">home</Link> or, alternatively, ask in our <a href="https://discord.gg/lilith">Discord</a> for more support.</p>
            </div>
        </section>
    )
}