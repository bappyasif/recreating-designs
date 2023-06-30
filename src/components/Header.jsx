import { useState } from "react"
import { header } from "../data"
import { CgArrowDown, CgArrowDownO } from "react-icons/cg"

export const Header = () => {
    return (
        <div className="flex justify-between w-full">
            <Company />
            <RenderNavs navs={header.navs} />
            <BookTable />
        </div>
    )
}

const Company = () => {
    return (
        <div>Meal <span>.</span></div>
    )
}

const RenderNavs = ({ navs, subMenu }) => {
    const renderItems = () => navs.map(item => <RenderNavItem key={item} item={item} />)

    return (
        <div className={`flex gap-4 ${subMenu ? "flex-col" : "flex-row"}`}>{renderItems()}</div>
    )
}

const RenderNavItem = ({ item }) => {
    const [show, setShow] = useState(false)
    // const handleHoverOn = () => setShow(true);
    // const handleHoverOut = () => setShow(false)

    const handleToggle = () => setShow(prev => !prev);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <div
            className="relative flex text-xl gap-2 items-baseline justify-center px-6"
        >
            <span className="w-max text-center text-2xl" onClick={handleClose}>{item}</span>
            <span
                className=""
                // onClick={(item === "Menu") ? handleToggle : item === "Menu Two" ? handleOpen : null}
                onClick={(item === "Menu" || item === "Menu Two") ? handleToggle : null}
            >
                {
                    (item === "Menu" || item === "Menu Two")
                        ? <span className="text-2xl"><CgArrowDownO /></span>
                        : null
                }
            </span>
            <span className="relative">
                {
                    show
                        ? <span
                            className="absolute top-0 -left-10 z-10 
                            bg-slate-600 py-1"
                        >
                            <RenderNavs navs={item === "Menu" ? header.subMenu : item === "Menu Two" ? header.subMenuTwo : []} subMenu={true} />
                        </span>
                        : null
                }
            </span>
        </div>
    )
}

const BookTable = () => {
    return (
        <button className="h-fit p-0 px-10 py-1">Book Table</button>
    )
}