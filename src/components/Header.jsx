import { useState } from "react"
import { header } from "../data"
import { CgArrowDown, CgArrowDownO, CgMenu } from "react-icons/cg"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="flex justify-between w-full py-4 px-2">
            <Company />
            <span className="xxs:hidden lg:block"><RenderNavs navs={header.navs} /></span>
            <div className="flex gap-4 place-items-end">
                <BookTable />
                <NavsInDropDowns />
            </div>
        </div>
    )
}

const NavsInDropDowns = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(prev => !prev);

    const renderNavItems = () => header.navs.map(item => <Link to={`/${item !== "Home" ? item.toLowerCase() : ""}`} key={item}>{item}</Link>)

    const renderNavs =
        <div className="absolute right-0 z-40 bg-slate-800 w-24 text-right px-4 py-2 flex flex-col gap-2">
            {renderNavItems()}
        </div>

    return (
        <div className="xxs:block lg:hidden relative">
            <p className="text-4xl" onClick={handleToggle}><CgMenu /></p>
            {
                open
                    ? renderNavs
                    : null
            }
        </div>
    )
}

const Company = () => {
    return (
        <div className="text-4xl">Meal <span>.</span></div>
    )
}

const RenderNavs = ({ navs, subMenu }) => {
    // const [show, setShow] = useState(false)

    const renderItems = () => navs.map(item => <RenderNavItem key={item} item={item} subMenu={subMenu}
    // setShow={setShow} show={show} 
    />
    )

    return (
        <div className={`flex gap-4 ${subMenu ? "flex-col" : "flex-row"}`}>{renderItems()}</div>
    )
}

const RenderNavItem = ({ item, subMenu }) => {
    const [show, setShow] = useState(false)
    // // const handleHoverOn = () => setShow(true);
    // // const handleHoverOut = () => setShow(false)

    const handleToggle = () => {
        console.log("CLOSEEEEE22222222222222")
        setShow(prev => !prev);
    }
    const handleClose = () => {
        console.log("CLOSEEEEE")
        setShow(false);
    }
    const handleOpen = () => setShow(true);

    console.log(show, "showwwwww", item)

    return (
        <div
            className="relative flex text-xl gap-2 items-baseline justify-center px-6"
        // onClick={item === "Menu" && !subMenu ? handleOpen : item === "Menu Two" && subMenu ? handleOpen : handleClose}
        >
            <Link
                // to={`/${item !== "Home" && !subMenu ? item.toLowerCase() : subMenu ? "menu" : ""}`}

                // onClick={item !== "Menu" && item !== "Menu Two" ? handleClose : null}

                to={`/${item !== "Home" && !subMenu ? item.toLowerCase() : ""}`}
                className={`w-max text-center ${subMenu ? "text-2xl" : "text-4xl"}`}
            >{item}</Link>
            <RerenderSubmenus item={item} handleToggle={handleToggle} show={show} />
        </div>
    )
}

const RerenderSubmenus = ({ item, show, handleToggle }) => {
    return (
        <>
            <span
                className=""
                // onClick={(item === "Menu") ? handleToggle : item === "Menu Two" ? handleOpen : null}
                // onClick={(item === "Menu" || item === "Menu Two") ? handleToggle : null}
                onClick={(item === "Menu" || item === "Menu Two") ? handleToggle : null}
            >
                {
                    (item === "Menu" || item === "Menu Two")
                        ? <span className="text-2xl"><CgArrowDownO /></span>
                        : null
                }
            </span>
            <ShowSubmenus item={item} show={show} />
        </>
    )
}

const ShowSubmenus = ({ show, item }) => {
    return (
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
    )
}

const BookTable = () => {
    return (
        <button className="h-fit p-0 xxs:px-4 lg:px-10 py-1 xxs:text-xl lg:text-2xl">Book Table</button>
    )
}