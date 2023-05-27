import React from 'react'
import { newsIcons, newsMenu } from '../data'

export const FeaturedNews = () => {
  return (
    <div>
        <NewsMenu />
        <FeaturedArticle />
    </div>
  )
}

const FeaturedArticle = () => {
    return (
        <div>
            <RenderArticleView />
            <RenderMenuNavFilters />
        </div>
    )
}

const RenderMenuNavFilters = () => {
    const renderIcons = () => newsIcons.map((item, idx) => <span key={idx}>{item.icon}</span>)

    return (
        <div>
            <h2>Features..</h2>
            <div>
                {renderIcons()}
            </div>
        </div>
    )
}

const RenderArticleView = () => {
    return (
        <div>
            <p>orbital 1</p>
            <p>orbital 2</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, doloremque, animi velit tempora enim iste dolore nihil blanditiis sapiente rerum quisquam libero explicabo! Est vel ipsa officia reprehenderit odio nulla?</p>
            <p>orbital 3</p>
            <p>orbital 4</p>
            <p>orbital 5</p>
        </div>
    )
}

export const NewsMenu = () => {
    const renderMenus = () => newsMenu.map(item => <RenderNewsMenu key={item.text} item={item} />)
    return (
        <div>
            {renderMenus()}
        </div>
    )
}

const RenderNewsMenu = ({item}) => {
    const {text, icon} = item;

    return (
        <div>
            <span>{text}</span>
            <span>{icon}</span>
        </div>
    )
}

