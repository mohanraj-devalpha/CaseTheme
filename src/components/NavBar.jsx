import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhoneFlip,faMapMarkerAlt,faInfinity,faMagnifyingGlass, } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,faTwitter,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";




const NavBar = () => {
  return (
    <div className='flex-col'>
      <div className='flex justify-center bg-black text-white '>
        <div className='flex py-3.5 text-sm space-x-[500px]'> 

            <div className='flex'>
            <span className='flex items-center mx-[15px]'>
            <FontAwesomeIcon icon={faSquarePhoneFlip} className="text-yellow-500 mr-2 text-lg" />
             Phone: +123 (4567) 890
          </span>
          <span className='flex items-center mx-[15px]'>
          <FontAwesomeIcon icon={faClock} className="h-6 w-4 text-yellow-500 mr-2" />
             Mon - Fri: 9 am - 7 pm
          </span>
          </div>
          <div>

          <span className='flex items-center mx-[15px]'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-2 text-lg" />

             921 St. Pault Ave, Main Street, USA
          </span>
          </div>
        </div>
        
      </div>   

      <div className='flex mx-44 justify-between text-2xl'>
        {/* branding */}
        <div className='m-[15px] flex font-bold cursor-pointer'>
        <FontAwesomeIcon icon={faInfinity} className="text-[#B197FC] flip-horizontal py-1 mr-2" />
        <h2>UNFINITY+</h2>
        </div>
        {/* main navigation */}
        <div className='flex py-3 text-gray-400'>
        <div className='mx-[15px] text-[15px] font-medium'>
        <span className='px-[15px] hover:text-black cursor-pointer transition-colors duration-700'>Home</span>
        <span className='px-[15px] hover:text-black cursor-pointer transition-colors duration-700'>Services</span>
        <span className='px-[15px] hover:text-black cursor-pointer transition-colors duration-700'>About</span>
        <span className='px-[15px] hover:text-black cursor-pointer transition-colors duration-700'>Projects</span>
        <span className='px-[15px] hover:text-black cursor-pointer transition-colors duration-700'>Testimonials</span>
        <span className='px-[15px] hover:text-black cursor-pointer transition-colors duration-700'>Blog</span>
        <span className='px-[15px] hover:text-black cursor-pointer transition-colors duration-700'>Contact</span>
      </div>
      <div className='flex py-2 text-black space-x-4 text-base'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="hover:text-orange-500 cursor-pointer mr-10 transition-colors duration-700 " />
      <FontAwesomeIcon icon={faFacebookF} className="hover:text-orange-500 cursor-pointer transition-colors duration-700" />
      <FontAwesomeIcon icon={faTwitter} className="hover:text-orange-500 cursor-pointer transition-colors duration-700" />
      <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-orange-500 cursor-pointer transition-colors duration-700" />
      

      

      {/* <FontAwesomeIcon icon={faFacebookF} className="text-black" /> */}
      </div>
      </div>
        </div>
    </div>
  )
}

export default NavBar
