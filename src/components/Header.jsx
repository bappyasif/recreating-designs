import { useState } from "react"
import { header } from "../data"

export const Header = () => {
    return (
        <div className="flex justify-between">
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

const RenderNavs = ({ navs }) => {
    const renderItems = () => navs.map(item => <RenderNavItem key={item} item={item} />)

    return (
        <div className="flex gap-4">{renderItems()}</div>
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
            className="relative"
        // onMouseEnter={item === "Menu" ? handleHoverOn : null}
        // onMouseOut={item === "Menu" ? handleHoverOut : null}
        // onClick={(item === "Menu") ? handleToggle : null}
        // onClick={(item === "Menu" || item === "Menu Two") ? handleToggle : null}
        // onClick={(item === "Menu") ? handleToggle : item === "Menu Two" ? handleOpen : null}
        >
            <span onClick={handleClose}>{item}</span>
            <span
                // onClick={(item === "Menu") ? handleToggle : item === "Menu Two" ? handleOpen : null}
                onClick={(item === "Menu" || item === "Menu Two") ? handleToggle : null}
            >
                {
                    (item === "Menu" || item === "Menu Two")
                        ? " \\/"
                        : null
                }
            </span>
            <span>
                {
                    show
                        ? <span><RenderNavs navs={item === "Menu" ? header.subMenu : item === "Menu Two" ? header.subMenuTwo : []} /></span>
                        : null
                }
            </span>
        </div>
    )
}

const BookTable = () => {
    return (
        <button className="h-fit">Book Table</button>
    )
}