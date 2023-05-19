import React from 'react'
import { Link, redirect } from 'react-router-dom'

export const HeroContent = () => {
  return (
    <section>
        <h1>Kingdom of Volcanoes and Glaciers</h1>
        <img src="#" alt="a view of icelandic nature wth mountains and glaciers" />
        <Link to={"/tours"}>{<button>Book Now</button>}</Link>
    </section>
  )
}
