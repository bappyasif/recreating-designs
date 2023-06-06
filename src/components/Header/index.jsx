import React from 'react'

export const Header = () => {
    return (
        <div>
            <div>
                <RenderComp />
                <RenderNavs />
            </div>
            <div>
                <Search />
                <RenderMores />
            </div>
        </div>
    )
}

const RenderComp = ({ item }) => {
    const { icon, text } = item
}

const Search = () => {
    return (
        <div>
            <input type="text" placeholder='search product' />
            <span>[]</span>
        </div>
    )
}

const RenderNavs = ({ items }) => {
    const renderItems = () => items.map(item => <div>{item}</div>)

    return (
        <div>
            {renderItems()}
        </div>
    )
}

const RenderMores = ({ items }) => {
    const renderItems = () => items.map((item, idx) => <RenderMore key={idx} item={item} />)

    return (
        <div>
            {renderItems()}
        </div>
    )
}

const RenderMore = ({ item }) => {
    const { icon } = item;

    return <div>{icon}</div>
}