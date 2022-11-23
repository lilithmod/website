import TypeConfig from "./types/config";

const config: TypeConfig = {
    footer: {
        columns: [
            {
                title: "Documentation",
                links: [
                    {
                        text: "Getting Started",
                        href: "/docs/getting-started",
                    },
                    {
                        text: "API Reference",
                        href: "/docs/api-reference",
                    },
                ],
            },
            {
                title: "Documentation",
                links: [
                    {
                        text: "Getting Started",
                        href: "/docs/getting-started",
                    },
                    {
                        text: "API Reference",
                        href: "/docs/api-reference",
                    },
                ],
            },
            {
                title: "Documentation",
                links: [
                    {
                        text: "Getting Started",
                        href: "/docs/getting-started",
                    },
                    {
                        text: "API Reference",
                        href: "/docs/api-reference",
                    },
                ],
            }
        ]
    },
    pages: {
        home: {
            sections: [
                {
                    paragraph: "The days of searching are over.",
                    title: "Your all in one\nHypixel Proxy",
                },
                {
                    images: [
                        {
                            path: "/images/home/1.jpg",
                            title: "Autododge",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas varius vel tincidunt senectus eget quisque vitae in. Risus malesuada purus vel dignissim eget et, lacus. Lectus viverra tortor, amet egestas. Ligula imperdiet parturient sit et, at proin. Purus sed.",
                        },
                        {
                            path: "/images/home/1.jpg",
                            title: "Staff mods",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas varius vel tincidunt senectus eget quisque vitae in. Risus malesuada purus vel dignissim eget et, lacus. Lectus viverra tortor, amet egestas. Ligula imperdiet parturient sit et, at proin. Purus sed.",
                        },
                        {
                            path: "/images/home/1.jpg",
                            title: "Image 3",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas varius vel tincidunt senectus eget quisque vitae in. Risus malesuada purus vel dignissim eget et, lacus. Lectus viverra tortor, amet egestas. Ligula imperdiet parturient sit et, at proin. Purus sed.",
                        }
                    ]
                },
                {
                    catchphrase: "So what are you waiting for?",
                    title: "Get Lilith today!"
                }
            ]
        },
        download: {
            paragraph: "You have chosen %{} as your platform. If this is incorrect, please select the correct platform from the buttons above.",
            downloadGuide: "https://docs.lilith.rip/lilith/install/%{}",
            downloadLink: "/download?%{}",
        },
        pricing: {
            paragraph: "Lilith is free to use, but if you want to support us as well as get more features, you can subscribe to one of our plans below.",
            switch: ["1 Month", "6 Months"],
            cards: [
                {
                    buttonText: "Get",
                    link: "/pricing",
                    tier: "Free Tier",
                    price: "Free",
                    secondaryPrice: "Free",
                    content: [
                        "<p>This tier has the following features:</p>",
                        "<ul>",
                        "<li>Lorem ipsum dolor sit amet</li>",
                        "<li>consectetur adipiscing elit Phasellus imperdiet</li>",
                        "<li>metus et pellentesque scelerisque, felis</li>",
                        "<li>erat facilisis sapien, ut lobortis mi dolor at leo</li>",
                        "</ul>"
                    ],
                },
                {
                    buttonText: "Subscribe",
                    link: "/pricing",
                    tier: "Premium Tier",
                    price: "$5/mo",
                    secondaryPrice: "$3/mo",
                    recommended: true,
                    content: [
                        "<p>This tier has the following features:</p>",
                        "<ul>",
                        "<li>Lorem ipsum dolor sit amet</li>",
                        "<li>consectetur adipiscing elit Phasellus imperdiet</li>",
                        "<li>metus et pellentesque scelerisque, felis</li>",
                        "<li>erat facilisis sapien, ut lobortis mi dolor at leo</li>",
                        "</ul>"
                    ],
                },
                {
                    buttonText: "Subscribe",
                    link: "/pricing",
                    tier: "Pro Tier",
                    price: "$20/mo",
                    secondaryPrice: "$15/mo",
                    content: [
                        "<p>This tier has the following features:</p>",
                        "<ul>",
                        "<li>Lorem ipsum dolor sit amet</li>",
                        "<li>consectetur adipiscing elit Phasellus imperdiet</li>",
                        "<li>metus et pellentesque scelerisque, felis</li>",
                        "<li>erat facilisis sapien, ut lobortis mi dolor at leo</li>",
                        "</ul>"
                    ],
                }
            ]
        },
        about: {
            header: "About us",
            content: ["Lorem ipsum <strong>dolores</strong>"]
        },
        faq: {
            header: "Frequently Asked Questions",
            content: ["<strong>Lorem</strong> Ipsum"],
            accordions: [
                {
                    header: "Do you have a free tier?",
                    content: ["Lorem ipsum <strong>dolor sit</strong>, amet consectetur adipisicing elit. Ea accusamus ab at voluptatum? Enim, delectus porro similique natus sapiente eveniet id. Delectus similique ab nihil ipsum laboriosam veniam voluptas veritatis."                ]
                },
                {
                    header: "Do you have a free tier?",
                    content: ["Yes."]
                },
                {
                    header: "Do you have a free tier?",
                    content: ["Yes."]
                },
            ]
        }
    }
};

export default config;