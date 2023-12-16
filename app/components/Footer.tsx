import Link from 'next/link'
import React from 'react'

const links =[
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Essentials',
        href: '/Essentials'
    },
    {
        label: 'Beauty',
        href: '/Beauty'
    },
    {
        label: 'Eco Office',
        href: '/EcoOffice'
    },
    {
        label: 'Furry Friends Haven',
        href: '/FurryFriendsHaven'
    }
]
const Footer = () => {
    function getCurrentYear() {
        return new Date().getFullYear();
      }
      const year = getCurrentYear();
  return (
    <div className='mt-8 pb-8 bg-primary w-full'>
        <div className="container p-8 flex flex-col justify-center items-center">
            <h1 className='text-5xl font-bold text1'>Earth 
            <span className='text-5xl font-bold text-white text1'>Wise</span>
            </h1>
            {links.map((link, index) => (
                <div key={index}>
                    <Link href={link.href} className='text-lg font-semibold text-white transition duration-200 hover:text-black'>
                        {link.label}
                    </Link>
                </div>
            ))}
            
        </div>
            <p className='text-white text-center font-medium text-lg'>© {year} Earth Wise. All rights reserved.</p>


    </div>
  )
}

export default Footer