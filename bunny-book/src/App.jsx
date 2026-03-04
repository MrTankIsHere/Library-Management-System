import Navbar from './components/Main-layout/Navbar'
import Home from './components/Main-layout/Home'
import Aboutus from './components/Main-layout/Aboutus'
import Testimonials from './components/Main-layout/Testimonials'
import Contactus from './components/Main-layout/Contactus'
import Footer from './components/Main-layout/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import { useEffect } from 'react'

const App = () => {
  
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Small delay so all sections are rendered
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // When clicking "Home" → scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [hash])

  return (
    <div>
      <Navbar/>

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="*" element={
          <>
            <Home />
            <Aboutus />
            <Testimonials />
            <Contactus />
            <Footer />
          </>
        } />

      </Routes>
    </div>
  )
}

export default App