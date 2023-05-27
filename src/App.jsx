import './App.css'
import { CompanyFeatures } from './components/CompanyFeatures'
import { FeaturedNews } from './components/FeaturedNews'
import { Sideview } from './components/Sideview'
import { TopMenu } from './components/TopMenu'

function App() {
  return (
    <div className='flex items-center w-full px-4 py-2'>
      <Sideview />
      <div>
        <TopMenu />
        <div>
          <FeaturedNews />
          <CompanyFeatures />
        </div>
      </div>
    </div>
  )
}

export default App
