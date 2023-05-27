import {AiOutlineFileDone, AiFillCalendar, AiTwotoneMessage, AiTwotoneProfile, AiFillProfile, AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillFacebook} from "react-icons/ai"
import {BiLink, BiSearchAlt2} from "react-icons/bi"

// import React from 'react'

// export const Test = () => {
//   return (
//     <div>index</div>
//   )
// }


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
        desc: "some Desc"
    },
    {
        icon: <AiFillProfile />,
        title: "Development",
        desc: "some Desc"
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
        text: "some trrext fasd ads asd asd ad sd afd dfg asffs favv faf",
        user: {
            name: "buns bugsy",
            title: "CTO, Founder",
            industry: "Events Planning"
        }
    },
    {
        text: "some trrext fasd ads asd asd ad sd afd dfg asffs favv faf",
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
    excerpt: "Reasl estate reastr jshbchj skjdbfkjb skjdfkjf kjsksjhgfk jukdijgk jb j nhj n,cj cckfjhkxf fj",
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