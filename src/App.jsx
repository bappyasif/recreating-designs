import './App.css'
import { CompanyFeatures } from './components/CompanyFeatures'
import { FeaturedNews } from './components/FeaturedNews'
import { Sideview } from './components/Sideview'
import { TopMenu } from './components/TopMenu'

function App() {
  return (
    <div>
      <TopMenu />
      <div className='flex w-full px-4'>
        <Sideview />
        <div className='flex flex-col gap-2 w-full h-fit'>
          <FeaturedNews />
          <CompanyFeatures />
        </div>
      </div>
    </div>
  )
}

export default App
