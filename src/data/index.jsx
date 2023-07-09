import {AiOutlineFileDone, AiFillCalendar, AiTwotoneMessage, AiTwotoneProfile, AiFillProfile, AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillFacebook} from "react-icons/ai"
import {BiLink, BiSearchAlt2} from "react-icons/bi"

export const topNavs = [
    "Home", "Services", "Projects", "Case Study", "Our Blog"
]

export const compLogo = [
    { name: "ABCD", icon: null }
]

export const heroTexts = ["Build", "Powerful", "Solutions"]

export const numFacts = [
    { name: "Founded", value: "1998" },
    { name: "Engineers", value: "3000+" },
    { name: "Clients", value: "800+" }
]

export const taskInfo = {
    title: {
        name: "Processing Task",
        icon: <AiOutlineFileDone />
    },
    date: {
        name: "Tue, May 23",
        icon: <AiFillCalendar />
    },
    meta: [
        {
            icon: <AiTwotoneMessage />,
            value: 4
        }, {
            icon: <AiTwotoneProfile />,
            value: 6
        },
        {
            icon: <BiLink />,
            value: 8
        }
    ]
}

export const weDo = [
    {
        icon: <BiSearchAlt2 />,
        title: "Research",
        desc: "Candy canes macaroon bear claw halvah sugar plum cake marshmallow carrot cake carrot cake. Gummies apple pie tootsie roll gummies cookie sweet marshmallow. Sugar plum chocolate cake muffin wafer toffee jujubes."
    },
    {
        icon: <AiFillProfile />,
        title: "Development",
        desc: "Pastry marzipan apple pie bear claw icing tart. Sugar plum biscuit lollipop sugar plum oat cake oat cake wafer gingerbread. Candy canes tart chocolate tart dragée gingerbread."
    }
];

export const projects = [
    {
        name: "Cross Matching",
        url: "https://unsplash.com/photos/Oalh2MojUuk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
    },
    {
        name: "Corporate Leads",
        url: "https://unsplash.com/photos/81lJcobn8kg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
    },
    {
        name: "Bio Technology",
        url: "https://unsplash.com/photos/pRt3JVYlJho?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
    }
]

export const testimonials = [
    {
        text: "Halvah sweet chupa chups soufflé bear claw jelly beans jelly wafer. Chocolate cake carrot cake soufflé cake jelly-o dragée pastry. Tart cupcake jelly beans icing cake jelly oat cake topping",
        user: {
            name: "buns bugsy",
            title: "CTO, Founder",
            industry: "Events Planning"
        }
    },
    {
        text: "Soufflé liquorice danish pudding sugar plum. Sweet wafer cotton candy jelly-o cheesecake sugar plum soufflé. Caramels apple pie wafer marzipan icing marshmallow ice cream. Apple pie cake liquorice dragée gingerbread powder carrot cake tootsie roll soufflé",
        user: {
            name: "bugs bunny",
            title: "CEO, Founder",
            industry: "Real Esatate Agencies"
        }
    }
]

export const blog = {
    date: "November 9, 2023",
    title: "Why do you need real estate enterprise solutions",
    excerpt: "Marshmallow icing biscuit tootsie roll lemon drops bear claw sweet roll cake. Caramels bear claw macaroon apple pie icing ice cream gingerbread. Shortbread biscuit powder biscuit liquorice liquorice sugar plum pie tiramisu. Fruitcake cheesecake pudding sweet roll chocolate cake tiramisu....",
    url: "https://source.unsplash.com/random/1920x1080/?office,corporate"
}

export const footers = {
    logo: compLogo,
    product: ["product", "pricing", "intro video", "documentation", "for enterprise", "community"],
    company: ["About Us", "Team", "Patreons", "Partners", "Contact Us", "Careers"],
    newsletter: {
        title: "Stay Informed",
        btnTxt: "No Spamming :)"
    },
    additionals: {
        moreLinks: ["Customer Agreement", "Imprint", "Privacy Policiy", "Terms Of Services"],
        links: [
            { icon: <AiFillTwitterCircle /> }, { icon: <AiFillLinkedin /> }, { icon: <AiFillGithub /> }, { icon: <AiFillFacebook /> }
        ]
    }
}