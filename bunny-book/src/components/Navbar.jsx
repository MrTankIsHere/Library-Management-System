import React, {useState} from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='w-full bg-black'>

      {/* Container */}
      <div className='max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>

        {/* Logo Section */}
        <a href="#home">
          <div className='flex items-center space-x-2 cursor-pointer'>
              <img 
                src={Logo} 
                alt="bunnyBookLogo" 
                className='h-10 w-auto object-contain'
              />
              <span className='text-white text-xl font-bold'>
                Bunny Book
              </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center space-x-6 text-white font-semibold cursor-pointer'>
          <li className='hover:text-gray-400 cursor-pointer transition'>
            <a href="#home">Home</a>
          </li>
          <li className='hover:text-gray-400 cursor-pointer transition'>
            <a href="#about">About</a>
          </li>
          <li className='hover:text-gray-400 cursor-pointer transition'>
            Contact
          </li>
        </ul>

        {/* Desktop Button */}
        <div className='hidden md:block'>
          <button className='px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition cursor-pointer'>
            Login / Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='text-white text-3xl cursor-pointer border-2 px-2 py-0 rounded-xl border-white'>
            &#8801;
          </button>
        </div>

      </div>

       {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='md:hidden bg-black px-4 pb-4 space-y-3'>

          <ul className='flex flex-col items-end space-y-3 text-white font-semibold px-3'>
            <li className='hover:text-gray-400 cursor-pointer transition'>Home</li>
            <li className='hover:text-gray-400 cursor-pointer transition'>About</li>
            <li className='hover:text-gray-400 cursor-pointer transition'>Contact</li>
          </ul>

          <button className='cursor-pointer w-full mt-2 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition'>
            Login / Sign Up
          </button>

        </div>
      )}

    </nav>
  )
}

export default Navbar