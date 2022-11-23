import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link prefetch={false} href={"/"}>
                <Image src="/images/lilith-text.png" alt="Logo" width={135} height={48} />
            </Link>
            <ul className={styles.list}>
                <li>
                    <Link prefetch={false} href={"/about"}>About</Link>
                </li>
                <li>
                    <Link prefetch={false} href={"/pricing"}>Pricing</Link>
                </li>
                <li>
                    <Link prefetch={false} href={"/faq"}>FAQ</Link>
                </li>
                <li>
                    <Link prefetch={false} className={styles.download} href={"/download"}>Download</Link>
                </li>
            </ul>
        </nav>
    );
}