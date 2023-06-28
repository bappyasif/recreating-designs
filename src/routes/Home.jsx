import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroReusable } from "../components/HeroReusable"
import { BookTable, Perks } from "../components/forHomePage/Perks"
import { PopularDesserts, PopularFoods } from "../components/forHomePage/PopularFoods"
import { Showcasing } from "../components/forHomePage/Showcasing"
import { hero } from "../data"

export const Home = () => {
  return (
    <div 
      className="flex flex-col items-center gap-10"
    >
        <Header />
        <HeroReusable items={hero} />
        <PopularFoods />
        <PopularDesserts />
        <Showcasing />
        <Perks />
        <BookTable />
        <Footer />
    </div>
  )
}
