import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link prefetch={false} href={'/'}>
                <Image src="/images/lilith-text.png" alt="Logo" width={202.5} height={72} />
            </Link>
            <ul className={styles.list}>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/pricing'}>Pricing</Link>
                </li>
                <li>
                    <Link href={'/faq'}>FAQ</Link>
                </li>
                <li>
                    <Link href={'https://docs.lilith.rip'}>Documentation</Link>
                </li>
                <li>
                    <Link href={'https://discord.gg/lilith'}>Discord</Link>
                </li>
                <li>
                    <Link className={styles.download} href={'/download'}>Download</Link>
                </li>
            </ul>
        </nav>
    )
}