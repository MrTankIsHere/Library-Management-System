import React from 'react'

const Contactus = () => {
  return (
    <div id="contactus" className="bg-[#05051B]">
      <div className="container mx-auto px-5 py-24">
        {/* Title - fixed typo and centered */}
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-16 text-white">
          Contact Us
        </h1>

        {/* Centered form container */}
        <div className="lg:w-1/2 md:w-2/3 mx-auto bg-[#A99AD3] rounded-2xl p-8">
          <form>
            <div className="flex flex-wrap">

              {/* First Name input */}
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  {/* <label htmlFor="firstName" className="leading-7 text-sm text-gray-700">
                First Name
              </label> */}
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full bg-[#221248] rounded border border-[#05051B] focus:border-gray-300  focus:ring-2 focus:ring-[#A99AD3] text-base outline-none text-white py-2 px-3 transition-all"
                  />
                </div>
              </div>

              {/* Last Name input */}
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  {/* <label htmlFor="lastName" className="leading-7 text-sm text-gray-700">
                Last Name
              </label> */}
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full bg-[#221248] rounded border border-[#05051B] focus:border-gray-300 focus:ring-2 focus:ring-[#A99AD3] text-base outline-none text-white py-2 px-3 transition-all"
                  />
                </div>
              </div>

              {/* Email input */}
              <div className="p-2 w-full">
                <div className="relative">
                  {/* <label htmlFor="email" className="leading-7 text-sm text-gray-700">
                Email
              </label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="demo@email.com"
                    className="w-full bg-[#221248] rounded border border-[#05051B] focus:border-gray-300 focus:ring-2 focus:ring-[#A99AD3] text-base outline-none text-white py-2 px-3 transition-all"
                  />
                </div>
              </div>

              {/* Message input */}
              <div className="p-2 w-full">
                <div className="relative">
                  {/* <label htmlFor="message" className="leading-7 text-sm text-gray-700">
                Message
              </label> */}
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full bg-[#221248] rounded border border-[#05051B] focus:border-gray-300 focus:ring-2 focus:ring-[#A99AD3] text-base outline-none text-white py-2 px-3 resize-none transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto bg-[#05051B] text-[#A99AD3] hover:bg-gray-950 active:scale-95 px-8 py-3 rounded-xl font-bold text-xl cursor-pointer transition-all">
                  Submit
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus