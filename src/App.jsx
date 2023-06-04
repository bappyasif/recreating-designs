import './App.css'
import FeaturesContents from './components/Contents'
import { Footer } from './components/Footer'
import Header from './components/Header'
import HeroContent from './components/HeroContent'

function App() {
  return (
    <div className='font-righteous text-slate-400 px-4 flex flex-col gap-16'>
      <Header />
      <HeroContent />
      <FeaturesContents />
      <Footer />
    </div>
  )
}

export default App
