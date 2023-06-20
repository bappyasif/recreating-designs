import {TbBeach} from "react-icons/tb"
import {GiDirectionSigns, GiMailbox, GiWalk, GiWallet} from "react-icons/gi"
import {FaSuitcaseRolling} from "react-icons/fa"
import {GrFacebook, GrLinkedin, GrPinterest, GrReddit, GrTwitter} from "react-icons/gr"

export const header = {
    company: "Worldwide",
    navs: [{name: "Home", to: "/"}, {name:"About Us", to: "/about-us"}, 
    {name: "Services", to: "/services"}, {name: "News", to: "/news"}, {name: "Contact", to: "/contact"}],
    call: "+12345678901",
    socials: [
        { name: "facebook", icon: <GrFacebook /> },
        { name: "pinterest", icon: <GrPinterest /> },
        { name: "twitter", icon: <GrTwitter /> },
        { name: "reddit", icon: <GrReddit /> },
        { name: "linkedin", icon: <GrLinkedin /> }
    ]
}

export const heroItems = {
    search: ["City", "Departure", "Arrival", "Budget"],
    links: ["Offers", "Testimonials", "Latest"],
}

export const decorativeItems = [
    {title: "Top Destinations", subtitle: "Vind goede plekken te reizen....", icon: <TbBeach />},
    {title: "Best Prices", subtitle: "Krijg goede prijs hier met ons....", icon: <GiWallet />},
    {title: "Amazing Services", subtitle: "Beste services altijd voor u en jouw familie....", icon: <FaSuitcaseRolling />}
]

export const popularPlaces = [
    {name: "Bali", subtext: "gaan naar bali voor veel leuke uitzichting", price: "from $693", special: "Special Offer"},
    {name: "Indonisia", subtext: "gaan naar Indonisia voor veel lekkere ervaringen", price: "from $696"},
    {name: "San Francisco", subtext: "gaan naar San Francisco voor veel pleziers", price: "from $696"},
    {name: "Paris", subtext: "gaan naar Paris voor veel lekkere plekken", price: "from $696"},
    {name: "Phi Phi Islands", subtext: "gaan naar Phi Phi Islands voor veel lekkere voelens", price: "from $696"},
    {name: "Mykoons", subtext: "gaan naar Mykoons voor veel lekkere dingen", price: "from $696"},
];

export const testimonies = [
    {title: "City Escape Clients", text: "somige texts hier als een testimionial. vind heel meer bij aan het clicken", name: "John Doe"},
    {title: "Cruises Clients", text: "somige texts hier als een testimionial. vind heel meer bij aan het clicken", name: "Jane Doe"},
    {title: "All Inclusive Clients", text: "somige texts hier als een testimionial. vind heel meer bij aan het clicken", name: "Juris Prudent"}
];

export const latestNews = [
    {
        dm: {date: 22, month: "June"},
        ts: {title: "Best Tips To Travel", subtext: "LIFESTYLE & TRAVEL", text: "vinden veel meer informatie over deze onderwerpen en heel veel meer"}
    },{
        dm: {date: 26, month: "June"},
        ts: {title: "Best Tips To Travel", subtext: "LIFESTYLE & TRAVEL", text: "vinden veel meer informatie over deze onderwerpen en heel veel meer"}
    },
    {
        dm: {date: 29, month: "June"},
        ts: {title: "Best Tips To Travel", subtext: "LIFESTYLE & TRAVEL", text: "vinden veel meer informatie over deze onderwerpen en heel veel meer"}
    }
]

export const footerItems = {
    newsletter: [
        {name: "name", placeholder: "your name", type: "text"},
        {name: "email", placeholder: "your email", type: "email"}
    ],
    links: [
        {icon: <GiDirectionSigns />, title: "Gives Us A Call", line1: "office landline: +12213324567889", line2: "mobile: +1223455677890"},
        {icon: <GiWalk />, title: "Come And Drop By", line1: "422 lakers street, bangalees", line2: "az-23345"},
        {icon: <GiMailbox />, title: "Send Us A Message", line1: "someemail@domain.com", line2: "office@worldwide.com"}
    ]
}