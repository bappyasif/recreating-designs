export const topNavs = {
    logo: {
        icon: null,
        text: ABCD
    },
    navs: ["Products", "Sales", "About Us", "FAQ"],
    more: [{ icon: AA }, { icon: AA }]
}

const productInfo = {
    headings: {
        titTxt: "CBD Oil - Mint Flavor",
        price: "$ 65",
        revDet: {
            icon: "A",
            rating: 4.9,
            review: "20* reviews"
        }
    },
    detail: {
        descText: "Cupcake ipsum dolor sit amet. Bear claw sweet gummi bears caramels soufflé tootsie roll. Toffee fruitcake macaroon dragée pudding chocolate cake gummies tart.",
        keypoints: ["moisturising", "vegan", "organic", "immune system"]
    },
    cart: {
        decr: "-",
        incr: "+",
        btnTxt: "Add To Cart",
        btnIcon: "[]"
    },
    wishList: {
        icon: "[]",
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
                fig: "33%",
                txt: "Excellent"
            },
            {
                fig: "33%",
                txt: "Good"
            },
            {
                fig: "33%",
                txt: "Fair"
            },
            {
                fig: "33%",
                txt: "Average"
            },
            {
                fig: "33%",
                txt: "Poor"
            },
            {
                fig: "33%",
                txt: "Very Poor"
            }
        ]
    },
    positiveRatings: {
        heading: "By positive ratings",
        ratings: [
            {text: "Positive", percentile: "92%"},
            {text: "Negative", percentile: "4%"},
            {text: "Neutral", percentile: "4%"}
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
                icon: "AA",
                name: "hoxie"
            },
            meta: {
                ago: "1 week ago",
                verified: "verified Purchase"
            }
        },
        review: {
            icon: "[]",
            text: "Smell is fuken Eyyy"
        }
    },
    {
        heading: {
            user: {
                icon: "AA",
                name: "hoxie"
            },
            meta: {
                ago: "1 week ago",
                verified: "verified Purchase"
            }
        },
        review: {
            icon: "[]",
            text: "Smell is fuken Eyyy"
        }
    },
    {
        heading: {
            user: {
                icon: "AA",
                name: "hoxie"
            },
            meta: {
                ago: "1 week ago",
                verified: "verified Purchase"
            }
        },
        review: {
            icon: "[]",
            text: "Smell is fuken Eyyy"
        }
    },
    {
        heading: {
            user: {
                icon: "AA",
                name: "hoxie"
            },
            meta: {
                ago: "1 week ago",
                verified: "verified Purchase"
            }
        },
        review: {
            icon: "[]",
            text: "Smell is fuken Eyyy"
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
        mobile: "+123 456 78901"
    },
    socials: ["Facebook", "Twitter", "Instagram", "Mastadon"],
    comp: topNavs.logo.text,
    copyright: "ABCD all right is reserved"
}