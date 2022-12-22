import type { FooterProps } from '../components/Footer'
import type { HomeProps } from '../pages'
import type { AboutProps } from '../pages/about'
import type { CustomPageProps } from '../pages/[custom]'
import type { DownloadProps } from '../pages/download'
import type { FAQProps } from '../pages/faq'
import type { PricingProps } from '../pages/pricing'
import type { DocumentProps } from '../pages/_document'

interface TypeConfig {
    footer: FooterProps,
    pages: {
        document: DocumentProps,
        home: HomeProps,
        download: DownloadProps,
        pricing: PricingProps,
        about: AboutProps,
        faq: FAQProps,
        custom: CustomPageProps[]
    },
}

export default TypeConfig
