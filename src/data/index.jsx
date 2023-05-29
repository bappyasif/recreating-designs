import { GiHamburgerMenu, GiScissors } from "react-icons/gi"
import {FaAngleRight} from "react-icons/fa"
import {IoMdOptions, IoMdSearch} from "react-icons/io"
import {CgProfile} from "react-icons/cg"
import {GrTextAlignCenter} from "react-icons/gr"

export const newsMenu = [
    {
        icon: <GiHamburgerMenu />,
        text: "News"
    },
    {
        icon: <FaAngleRight />,
        text: "Check more news here"
    }
]

export const newsIcons = [
    {icon: <IoMdOptions />}, {icon: <IoMdSearch />},
    {icon: <CgProfile />}, {icon: <GrTextAlignCenter />},
    {icon: <GiScissors />}
]

export const topNavs =  ["Company", "Sign in", "Get started"]