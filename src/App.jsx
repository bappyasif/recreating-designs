import './App.css'
import { ContactInfo } from './components/ContactInfo'
import { FooterContent } from './components/Footer'
import { Header } from './components/header'
import { HeroContent } from './components/heroContent'
import { ProductsListings } from './components/products'
import { SpecialOffer } from './components/specialOffer'

function App() {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <HeroContent />
      <ProductsListings />
      <SpecialOffer />
      <ContactInfo />
      <FooterContent />
    </div>
  )
}

export default App
