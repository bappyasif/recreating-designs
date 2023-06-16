import './App.css'
import { Decorative } from './components/Decorative'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroComponent } from './components/Hero'
import { LatestNews } from './components/LatestNews'
import { PopularDestinations } from './components/PopularSpots'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <div
      className='font-serif text-slate-400 px-40 py-4 flex flex-col gap-28'
    >
      <Header />
      <HeroComponent />
      <Decorative />
      <PopularDestinations />
      <Testimonials />
      <LatestNews />
      <Footer />
    </div>
  )
}

export default App
