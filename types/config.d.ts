import type { FooterProps } from '../components/Footer'
import type { HomeProps } from '../pages'
import { AboutProps } from '../pages/about'
import { CustomPageProps } from '../pages/[custom]'
import type { DownloadProps } from '../pages/download'
import { FAQProps } from '../pages/faq'
import type { PricingProps } from '../pages/pricing'

interface TypeConfig {
    footer: FooterProps,
    pages: {
        home: HomeProps,
        download: DownloadProps,
        pricing: PricingProps,
        about: AboutProps,
        faq: FAQProps,
        custom: CustomPageProps[]
    },
}

export default TypeConfig
