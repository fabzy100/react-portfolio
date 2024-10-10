import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'

const App = () => {
  return (
    <main>
     <Navbar/>
     <Hero/>
     <Services/>
     <Banner/>
      </main>
  )
}

export default App