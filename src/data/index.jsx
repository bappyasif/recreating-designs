import {BiCartAdd, BiCheckShield, BiDownvote, BiMinus, BiPlus, BiStar, BiUpvote, BiUser, BiUserCircle} from "react-icons/bi"
import {BsBagCheckFill, BsFillStarFill, BsGear, BsHearts} from "react-icons/bs"
import {TbBrandPepsi} from "react-icons/tb"

export const topNavs = {
    logo: {
        icon: <TbBrandPepsi />,
        text: "ABCD"
    },
    navs: ["Products", "Sales", "About Us", "FAQ"],
    more: [{ icon: <BiUserCircle /> }, { icon: <BsBagCheckFill /> }]
}

export const productInfo = {
    headings: {
        titTxt: "CBD Oil - Mint Flavor",
        price: "$ 65",
        revDet: {
            icon: "A",
            rating: 4.9,
            review: "220* reviews"
        }
    },
    detail: {
        descText: "Cupcake ipsum dolor sit amet. Bear claw sweet gummi bears caramels soufflé tootsie roll. Toffee fruitcake macaroon dragée pudding chocolate cake gummies tart.",
        keypoints: ["moisturising", "vegan", "organic", "immune system"]
    },
    cart: {
        decr: <BiMinus />,
        incr: <BiPlus />,
        btnTxt: "Add To Cart",
        btnIcon: <BiCartAdd />
    },
    wishList: {
        icon: <BsHearts />,
        text: "Add To Wishlist"
    }
}

export const tabs = ["General Information", "Additional Information", "Reviews"]

export const reviewRatings = {
    customerReviews: {
        headings: {
            titTxt: "Customer Reviews",
            revDet: productInfo.headings.revDet
        },
        numbers: [
            {
                fig: "76",
                txt: "5 star"
            },
            {
                fig: "60",
                txt: "4 star"
            },
            {
                fig: "45",
                txt: "3 star"
            },
            {
                fig: "33",
                txt: "2 star"
            },
            {
                fig: "29",
                txt: "1 star"
            },
            {
                fig: "22",
                txt: "0 star"
            }
        ]
    },
    positiveRatings: {
        heading: "By positive ratings",
        ratings: [
            { text: "Positive", percentile: "92%" },
            { text: "Negative", percentile: "4%" },
            { text: "Neutral", percentile: "4%" }
        ]
    },
    reviewProd: {
        heading: "Review this product",
        subTxt: " first to be able to rate and review",
        btnTxt: "Write a review"
    }
}

export const topReviews = [
    {
        heading: {
            user: {
                icon: <BiUser />,
                url: "https://source.unsplash.com/random/?beautifulgirl&skyler",
                name: "Hoxie",
                ago: "1 week ago",
            },
            verified: {
                txt: "verified Purchase",
                icon: <BiCheckShield />
            }
        },
        review: {
            icons: [
                {icon: <BiUpvote />},
                {icon: <BiDownvote />},
                {icon: <BsGear />}
            ],
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    },
    {
        heading: {
            user: {
                icon: "AA",
                url: "https://source.unsplash.com/random/?girl&loxie",
                name: "Skyler",
                ago: "1 week ago",
            },
            verified: {
                txt: "verified Purchase",
                icon: <BiCheckShield />
            }
        },
        review: {
            icons: [
                {icon: <BiUpvote />},
                {icon: <BiDownvote />},
                {icon: <BsGear />}
            ],
            text: "pariatur ratione dolor asperiores aliquam nemo, aut fugit perferendis numquam dolorem nihil quae."
        }
    },
    {
        heading: {
            user: {
                icon: "AA",
                url: "https://source.unsplash.com/random/?pretty&girl",
                name: "Gray",
                ago: "1 week ago",
            },
            verified: {
                txt: "verified Purchase",
                icon: <BiCheckShield />
            }
        },
        review: {
            icons: [
                {icon: <BiUpvote />},
                {icon: <BiDownvote />},
                {icon: <BsGear />}
            ],
            text: "Itaque nostrum at excepturi quibusdam blanditiis amet explicabo molestiae, pariatur ratione dolor asperiores aliquam nemo."
        }
    },
    {
        heading: {
            user: {
                icon: "AA",
                url: "https://source.unsplash.com/random/?sexy&laura",
                name: "Laura",
                ago: "1 week ago",
            },
            verified: {
                txt: "verified Purchase",
                icon: <BiCheckShield />
            }
        },
        review: {
            icons: [
                {icon: <BiUpvote />},
                {icon: <BiDownvote />},
                {icon: <BsGear />}
            ],
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    }
]

export const footerItems = {
    line1: topNavs.navs,
    line2: ["contact us", "return", "privacy", "terms & condition"],
    line3: {
        addr: {
            name: "ABCD Corp",
            txt: "New york,96 Ch-3366",
            country: "Landon"
        },
        email: "abcd#corp.com",
        tele: "+123 456 78901"
    },
    socials: ["Facebook", "Twitter", "Instagram", "Mastadon"],
    comp: topNavs.logo.text,
    copyright: "ABCD all right is reserved"
}

export const star = <BsFillStarFill />