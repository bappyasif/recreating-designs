import './App.css'
import FeaturesContents from './components/Contents'
import { Footer } from './components/Footer'
import Header from './components/Header'
import HeroContent from './components/HeroContent'

function App() {
  return (
    <div 
      className='font-novaSlim text-slate-400 px-40 py-4 flex flex-col gap-28'
    >
      <Header />
      <HeroContent />
      <FeaturesContents />
      <Footer />
    </div>
  )
}

export default App
