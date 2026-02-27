import React from "react";
import library from "../assets/images/hero.jpg";

const Home = () => {
  return (
    
    <div className="relative w-full h-screen flex items-center justify-center text-center" id="home">

      {/* Library Image */}
      <img 
        className="object-cover absolute inset-0 w-full h-full"
        src={library} 
        alt="Library Image" />
      
      {/* Dark Overlay for transperent image */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero section */}

      <div className="relative z-10 px-4">

        <h1 className="text-white font-bold text-3xl sm:text-5xl md:text-6xl mb-5 md:mb-8">Welcome To BunnyBook</h1>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">

          <button className="bg-white text-black hover:bg-gray-300 rounded-xl px-4 py-2 font-bold text-xl cursor-pointer transition">Search Books</button>
          <button className="bg-black text-white hover:bg-gray-950 rounded-xl px-4 py-2 font-bold text-xl cursor-pointer transition">Book Library</button>

        </div>

      </div>


    </div>



  );
};

export default Home;