import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const routeChangeStart = () => document.body.classList.add("loading");
        const routeChangeComplete = () => document.body.classList.remove("loading");

        router.events.on("routeChangeStart", routeChangeStart);
        router.events.on("routeChangeComplete", routeChangeComplete);

        return () => {
            router.events.off("routeChangeStart", routeChangeStart);
            router.events.off("routeChangeComplete", routeChangeComplete);
        };
    }, [router.events]);

    return (
        <>
            <Head>
                <title>Lilith</title>
            </Head>
            
            <Navbar />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}
