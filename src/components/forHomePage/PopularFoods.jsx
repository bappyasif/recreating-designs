import { useState } from "react";
import { desserts, popular } from "../../data";

export const PopularFoods = () => {
    const [whichType, setWhichType] = useState("Breakfast")

    const updateType = value => setWhichType(value);

    const headings = popular.map(item => item.heading);

    const getFoods = () => {
        return popular.map(item => item.heading === whichType ? item.items : null).filter(item => item)[0]
    }

    const findIdxOfWhichTytpeFood = () => {
        return popular.findIndex(item => item.heading === whichType) + 1
    }

    return (
        <div className="flex xxs:flex-col lg:flex-row justify-between gap-0 xxs:w-full lg:w-2/3 items-center">
            <RenderHeadings items={headings} updateType={updateType} />
            <RenderFoods items={getFoods()} idx={findIdxOfWhichTytpeFood()} type={whichType} />
        </div>
    )
}

const RenderHeadings = ({ items, updateType }) => {
    const renderItems = () => items.map(item => <RenderHeading key={item} item={item} updateType={updateType} />);

    return (
        <div className="flex xxs:flex-row flex-wrap xxs:justify-center lg:flex-col gap-4 items-baseline" style={{ minWidth: "400px" }}>
            {renderItems()}
        </div>
    )
}

const RenderHeading = ({ item, updateType }) => {
    const handleClick = () => {
        updateType(item)
    }
    return (
        <button className="bg-slate-600 w-60 py-2 text-center rounded-full text-4xl" onClick={handleClick}>{item}</button>
    )
}

const RenderFoods = ({ items, type, idx }) => {
    const renderItems = () => items.map(item => <RenderFood key={item.name} item={item} />);

    return (
        <>
            <div className="xxs:hidden lg:flex flex-col justify-between" style={{ width: "800px" }}>
                <RenderFoodItems idx={idx} renderItems={renderItems} type={type} />
            </div>
            <div className="xxs:flex lg:hidden flex-col justify-between px-2">
                <RenderFoodItems idx={idx} renderItems={renderItems} type={type} />
            </div>
        </>
    )
}

const RenderFoodItems = ({ type, idx, renderItems }) => {
    return (
        <>
            <div className="flex justify-between text-2xl">
                <p>{type}</p>
                <p>{idx}/4</p>
            </div>
            <div className="flex gap-4 justify-between flex-wrap">{renderItems()}</div>
        </>
    )
}

const RenderFood = ({ item }) => {
    const { name, price, img } = item;

    return (
        <div className="w-2/5 flex flex-col text-xl">
            <img className="w-full xxs:h-40 lg:h-60 rounded-xl" src={img} alt={name} />
            <h2 className="">{name}</h2>
            <h3>{price}</h3>
        </div>
    )
}

export const PopularDesserts = () => {
    const renderItems = () => desserts.map(item => <RenderDessert key={item.name} item={item} />);

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <p>Choose Desserts</p>
            <h2 className="text-4xl">Popular Desserts</h2>
            <div className="flex gap-6 justify-between xxs:w-full lg:w-3/4 flex-wrap">
                {renderItems()}
            </div>
        </div>
    )
}

const RenderDessert = ({ item }) => {
    const { name, price, img } = item;

    return (
        <div className="flex gap-2 items-center">
            <img className="w-32 h-20 rounded-full" src={img} alt={name} />
            <div className="text-2xl">
                <h2>{name}</h2>
                <h3>{price}</h3>
            </div>
        </div>
    )
}