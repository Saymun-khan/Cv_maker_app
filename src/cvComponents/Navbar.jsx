import React from 'react'
import { FaArchive } from 'react-icons/fa'
const Navbar = () => {
  return (
    <div>
        <div>
            <div  className='grid grid-cols-2 p-4'>
                <h1 className='text-xl flex font-bold text-green-800'> <span className='mt-1'><FaArchive /></span> CvMaker</h1>
                <p className='md:mt-2 mt-1 text-red-300 font-bold'>make your professional vite</p>
            </div>
            {/*<div>
                <ul className='grid grid-cols-2 md:grid-cols-4 font-semibold text-blue-800'>
                    <li>Home</li>
                    <li>Subscription</li>
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </div>
            <div className='ml-24 pl-10 pr-8'>
                <ul className='grid grid-cols-3 font-bold text-gray-600'>
                    <li>Contact</li>
                    <li>Service</li>
                    <li>Get in touch</li>
                </ul>
  </div>*/}
        </div>
    </div>
  )
}

export default Navbar