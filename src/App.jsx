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
      className='font-serif text-slate-400 px-40 py-4 flex flex-col gap-28'
    >
      <Header />
      <ProductDetail />
      <TabsView />
      <div className='flex gap-4 justify-between'>
        <AnalyticsDetails />
        <TopReviews />
      </div>
      <RelatedProducts />
      <Footer />
    </div>
  )
}

export default App
