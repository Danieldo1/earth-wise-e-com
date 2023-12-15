import { CheckCircle, LeafyGreen, PackageCheck, Waypoints } from 'lucide-react'
import React from 'react'

const Points = () => {
  return (
    <>
    <h2 className='text-5xl md:text-7xl font-bold tracking-tight mb-5 text-gray-900 text-center text1'>Our core Values</h2>
    <div className='grid grid-cols-4 gap-4 pb-8 container'>
        <div className='bg-primary rounded-lg col-span-4 md:col-span-2 p-8 flex flex-col justify-center items-center'>
            <CheckCircle className='hidden md:block justify-center mb-4 items-center w-16 h-16 text-white' />
            <h1 className='text-4xl font-bold text-white text1 md:text-5xl'>Time Well-Spent</h1>
            <p className='text-gray-200 text-center '>Everything on our site is vetted through our 5-Pillar Sourcing Methodology, and our Community Experience team is always here to help through chat, call, or email.</p>
        </div>
        <div className='bg-primary rounded-lg col-span-4 md:col-span-2 p-8 flex flex-col justify-center items-center'>
            <PackageCheck className='hidden md:block justify-center mb-4 items-center w-16 h-16 text-white' />
            <h1 className='text-4xl font-bold text1 text-white md:text-5xl'>Free Shipping for $75+</h1>
            <p className='text-gray-200 text-center '>We want sustainability to be more accessible. That’s why every order over $75 ships free, and all orders always ship carbon-neutral.</p>
        </div>
        <div className='bg-primary rounded-lg col-span-4 md:col-span-2 p-8 flex flex-col justify-center items-center'>
            <Waypoints className='hidden md:block justify-center mb-4 items-center w-16 h-16 text-white' />
            <h1 className='text-4xl font-bold text1 text-white md:text-5xl'>Best-In-Class Brands</h1>
            <p className='text-gray-200 text-center' >We've built a community of truly earth-conscious brands, dedicated to offering sustainable, quality products without compromises to our planet.</p>
        </div>
        <div className='bg-primary rounded-lg col-span-4 md:col-span-2 p-8 flex flex-col justify-center items-center'>
            <LeafyGreen className='hidden md:block justify-center mb-4 items-center w-16 h-16 text-white' />
            <h1 className='text-4xl font-bold text1 text-white md:text-5xl' >Furthering Your Impact</h1>
            <p className='text-gray-200 text-center '>Every order you make directly benefits our communities and environment through our Certified B Corp and 1% for the Planet membership.</p>
        </div>
    </div>
    </>
  )
}

export default Points