import './App.css'
import { Header } from './components/Header'
import { HeroContent } from './components/HeroContent'

function App() {
  return (
    <div className='flex flex-col items-center w-full'>
      <Header />
      <HeroContent />
    </div>
  )
}

export default App
