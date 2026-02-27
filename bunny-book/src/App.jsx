import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Testimonials from './components/Testimonials'
import Contactus from './components/Contactus'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Aboutus/>
      <Testimonials/>
      <Contactus/>
    </div>
  )
}

export default App