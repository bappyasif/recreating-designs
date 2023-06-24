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
      className='font-serif text-slate-400 flex flex-col gap-16'
    >
      <div
        className='pb-10'
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/?Tourism,prestine,dusky,view,vibrant,landmarks')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          objectFit: "contain"
        }}
      >
        <div className='bg-slate-800 fixed w-full z-40 py-2 opacity-80'>
          <Header />
        </div>

        <div className='mx-auto mt-40 w-fit relative'>
          <HeroComponent />
        </div>

      </div>

      <div className='px-6'>
        <Decorative />
      </div>

      <div
        className='font-serif text-slate-400 xxs:px-2 lg:px-40 py-4'
      >
        <PopularDestinations />
      </div>

      <Testimonials />
      
      <div
        className='font-serif text-slate-400 xxs:px-2 lg:px-40 py-4'
      >
        <LatestNews />
      </div>

      <Footer />
    </div>
  )
}

export default App
