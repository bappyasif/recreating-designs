import React from 'react'

export const Sideview = () => {
  return (
    <div>
        <IntroView />
        <HeroView />
        <TidbitsView />
    </div>
  )
}

const IntroView = ({item}) => {
    // const {text, icon, brand} = item
    return (
        <div>
            <p><img src="#" alt="icon" /></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea harum eius laboriosam rerum, at beatae voluptatem veritatis nulla odio ex, autem ab aspernatur, inventore molestiae cumque error voluptatibus a sequi.</p>
            <p>^</p>
        </div>
    )
}

const HeroView = () => {
    return (
        <div>
            <img src="#" alt="productive view" />
            <p>Productive</p>
        </div>
    )
}

const TidbitsView = () => {
    return (
        <div>
            <FirstExcerpt />
            <SecondExcerpt />
        </div>
    )
}

const SecondExcerpt = () => {
    return (
        <div>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error hic expedita ut quo molestias natus nobis adipisci tempore, voluptas vitae fugit mollitia obcaecati! Ab ratione voluptatibus error in, corporis qui.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repudiandae voluptas saepe accusantium. Aperiam tempore doloribus reprehenderit adipisci voluptas qui nostrum soluta quam? Molestias natus quasi consequuntur ullam beatae mollitia?</p>
            <img src="#" alt="some picture" />
        </div>
    )
}

const FirstExcerpt = () => {
    return (
        <div>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error hic expedita ut quo molestias natus nobis adipisci tempore, voluptas vitae fugit mollitia obcaecati! Ab ratione voluptatibus error in, corporis qui.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repudiandae voluptas saepe accusantium. Aperiam tempore doloribus reprehenderit adipisci voluptas qui nostrum soluta quam? Molestias natus quasi consequuntur ullam beatae mollitia?</p>
            <img src="#" alt="some picture" />
        </div>
    )
}
