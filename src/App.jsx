import './App.css'
import { AnalyticsDetails } from './components/Analytics'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProductDetail } from './components/Product'
import { RelatedProducts } from './components/RelatedProducts'
import { TopReviews } from './components/Reviews'
import { TabsView } from './components/tabs'


function App() {
  return (
    <div
      className='font-macondo text-slate-400 xxs:px-2 lg:px-40 py-4 flex flex-col gap-28'
    >
      <Header />
      <ProductDetail />
      <TabsView />
      <div className='flex xxs:flex-col md:flex-row gap-9 justify-between'>
        <AnalyticsDetails />
        <TopReviews />
      </div>
      <RelatedProducts />
      <Footer />
    </div>
  )
}

export default App
