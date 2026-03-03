import Navbar from './components/Navbar'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Testimonials from './components/Testimonials'
import Contactus from './components/Contactus'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Aboutus/>
      <Testimonials/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default App