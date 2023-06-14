import './App.css'
import { LatestBlog } from './components/Blog'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroContents } from './components/HeroContents'
import { ProjectsInfo } from './components/ProjectsInfo'
import { SpecialMentions } from './components/SpecialMentions'
import { WhatWeDo } from './components/WhatWeDo'

function App() {
  return (
    <div className='flex flex-col items-center gap-11 w-full px-4 py-2'>
      <Header />
      <HeroContents />
      <WhatWeDo />
      <ProjectsInfo />
      <SpecialMentions />
      <LatestBlog />
      <Footer />
    </div>
  )
}

export default App
