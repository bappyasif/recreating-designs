import { Header } from "../components/Header"
import { HeroReusable } from "../components/HeroReusable"
import { PopularDesserts, PopularFoods } from "../components/forHomePage/PopularFoods"
import { Showcasing } from "../components/forHomePage/Showcasing"
import { hero } from "../data"

export const Home = () => {
  return (
    <div>
        <Header />
        <HeroReusable items={hero} />
        <PopularFoods />
        <PopularDesserts />
        <Showcasing />
    </div>
  )
}
