import './App.css'
import { CompanyFeatures } from './components/CompanyFeatures'
import { FeaturedNews } from './components/FeaturedNews'
import { Sideview } from './components/Sideview'
import { TopMenu } from './components/TopMenu'

function App() {
  return (
    <div className='font-righteous pr-6'>
      <TopMenu />
      <div className='flex w-full max-h-full px-4'>
        <Sideview />
        <div className='flex flex-col gap-6 w-3/4'>
          <FeaturedNews />
          <CompanyFeatures />
        </div>
      </div>
    </div>
  )
}

export default App
