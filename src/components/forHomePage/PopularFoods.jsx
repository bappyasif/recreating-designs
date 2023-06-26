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

    console.log(whichType, getFoods())

    return (
        <div>
            <RenderHeadings items={headings} updateType={updateType} />
            <RenderFoods items={getFoods()} idx={findIdxOfWhichTytpeFood()} type={whichType} />
        </div>
    )
}

const RenderHeadings = ({ items, updateType }) => {
    const renderItems = () => items.map(item => <RenderHeading key={item} item={item} updateType={updateType} />);

    return (
        <div>
            {renderItems()}
        </div>
    )
}

const RenderHeading = ({ item, updateType }) => {
    const handleClick = () => {
        updateType(item)
    }
    return (
        <h2 onClick={handleClick}>{item}</h2>
    )
}

const RenderFoods = ({ items, type, idx }) => {
    const renderItems = () => items.map(item => <RenderFood key={item.name} item={item} />);

    return (
        <div>
            <div className="flex justify-between">
                <p>{type}</p>
                <p>{idx}/4</p>
            </div>
            <div className="flex gap-4 flex-wrap">{renderItems()}</div>
        </div>
    )
}

const RenderFood = ({ item }) => {
    const { name, price, img } = item;

    return (
        <div>
            <img className="w-60 h-80" src={img} alt={name} />
            <h2>{name}</h2>
            <h3>{price}</h3>
        </div>
    )
}

export const PopularDesserts = () => {
    const renderItems = () => desserts.map(item => <RenderDessert key={item.name} item={item} />);

    return (
        <div>
            <p>Choose Desserts</p>
            <h2>Popular Desserts</h2>
            <div className="flex gap-4">
                {renderItems()}
            </div>
        </div>
    )
}

const RenderDessert = ({ item }) => {
    const { name, price, img } = item;

    return (
        <div>
            <img className="w-40 h-60" src={img} alt={name} />
            <div>
                <h2>{name}</h2>
                <h3>{price}</h3>
            </div>
        </div>
    )
}