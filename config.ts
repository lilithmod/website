import TypeConfig from './types/config'

const config: TypeConfig = {
    footer: {
        columns: [
            {
                title: 'Installation',
                links: [
                    {
                        text: 'Windows',
                        href: 'https://docs.lilith.rip/lilith/install/windows',
                    },
                    {
                        text: 'macOS',
                        href: 'https://docs.lilith.rip/lilith/install/macos',
                    },
                    {
                        text: 'Linux',
                        href: 'https://docs.lilith.rip/lilith/install/linux',
                    },
                    {
                        text: 'Getting Started',
                        href: 'https://docs.lilith.rip/lilith/using-lilith',
                    },
                ],
            },
            {
                title: 'Support',
                links: [
                    {
                        text: 'Discord',
                        href: 'https://discord.gg/lilith',
                    },
                ],
            }
        ]
    },
    pages: {
        home: {
            sections: [
                {
                    paragraph: '',
                    title: 'Your all-in-one\nHypixel Proxy',
                },
                {
                    images: [
                        {
                            path: '/images/home/1.png',
                            title: 'Queuestats',
                            description: 'Lilith offers informative queuestats for a variety of gamemodes, in the game itself, supporting any client. <br/><br/>No external windows.<br/> No manual /who. <br/>Simple stats in the tablist and in chat.',
                        },
                        {
                            path: '/images/home/2.png',
                            title: 'Autododge',
                            description: 'The most comprehensive free autododge available for Hypixel. Dodge based on numerous conditions, all for free, and gain access to even more customizability and automatic requeueing with a Pro subscription.',
                        },
                        {
                            path: '/images/home/3.png',
                            title: 'Custom Rank',
                            description: 'Purchase a 100% custom rank tag for your Minecraft account that\'s visible to all Lilith users. Available right now on our Patreon.',
                        }
                    ]
                },
                {
                    catchphrase: 'So what are you waiting for?',
                    title: 'Get Lilith today!'
                }
            ]
        },
        download: {
            paragraph: 'You want Lilith for <strong>%{}</strong>, right?<br/><br/>If this is incorrect, please select the correct platform from the buttons above.',
            downloadGuide: 'https://docs.lilith.rip/lilith/install/%{}',
            downloadLink: 'https://api.lilith.rip/launcher/%{}',
        },
        pricing: {
            paragraph: 'Lilith is free to use, but if you want to support us as well as get more features, you can subscribe to one of our plans below.',
            switch: ['Patreon', 'Crypto'],
            cards: [
                {
                    buttonText: 'Get',
                    secondaryButtonText: 'Get',
                    link: '/download',
                    tier: 'Free Trial',
                    price: 'Free',
                    secondaryPrice: 'Free',
                    content: [
                        '<ul>',
                        '<li>Basic Queuestats</li>',
                        '<li>Basic Autododge</li>',
                        '<li>Easily Requeue Games</li>',
                        '<li>Easily Requeue Games</li>',
                        '</ul>'
                    ],
                },
                {
                    buttonText: 'Subscribe',
                    secondaryButtonText: 'Coming Soon',
                    link: 'https://patreon.com/lilithmod',
                    tier: 'Pro',
                    price: '$5/mo',
                    secondaryPrice: '$6/mo',
                    recommended: true,
                    content: [
                        '<ul>',
                        '<li>Requeue After Dodging</li>',
                        '<li>Dodge Player Names</li>',
                        '<li>Dodge Maps</li>',
                        '<li>Javascript Conditions</li>',
                        '<li>Custom Player Tags</li>',
                        '<li>Private Builds of Lilith</li>',
                        '</ul>'
                    ],
                },
                {
                    buttonText: 'Subscribe',
                    secondaryButtonText: 'Coming Soon',
                    link: 'https://patreon.com/lilithmod',
                    tier: 'Pro + Rank',
                    price: '$20/mo',
                    secondaryPrice: '$22/mo',
                    content: [
                        '<ul>',
                        '<li>Everything in Lilith Pro</li>',
                        '<li>Customizable Ingame Rank</li>',
                        '</ul>'
                    ],
                }
            ]
        },
        about: {
            header: 'About us',
            content: ['Lilith is a small company focused on making quality software. We attempt to create the best-in-class option for all Hypixel utility needs.']
        },
        faq: {
            header: 'Frequent Questions',
            content: ['Get answers to more questions on our <a href=\'https://discord.gg/lilith\'>Discord</a>.'],
            accordions: [
                {
                    header: 'Do you have a free tier?',
                    content: [
                        'Yes, we offer a free tier that includes basic features such as autododge and queuestats. You can find more information about our free tier <a href=\'/pricing\'>here</a>.'
                    ]
                },
                {
                    header: 'Why do I need to log in with Discord?',
                    content: [
                        'Lilith links to your Discord account to verify that you have access to Lilith, and whether or not you have premium perks.'
                    ]
                },
                {
                    header: 'How do I apply?',
                    content: ['Apply for access to Lilith by joining our <a href=\'https://discord.gg/lilith\'>Discord</a> server.']
                },
            ]
        }
    }
}

export default config