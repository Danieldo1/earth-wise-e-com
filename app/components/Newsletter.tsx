import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Newsletter = () => {
  return (
<div className='container p-24 relative'>
    <div className='w-full h-full object-cover object-center  absolute inset-0 z-0'>
  <Image src='/signup.jpg' alt='newsletter' width={1000} height={1000} className='w-full h-full object-cover'  />
    </div>
  <div className='flex flex-col justify-center items-center relative z-1 bg-opacity-75 bg-white p-8 md:p-24 rounded-lg'>
    <h1 className='text-5xl font-bold text1'>Newsletter</h1>
    <p className='text-gray-500 text-center font-medium text-lg'>Subscribe to our newsletter to stay up-to-date with our latest news and promotions.</p>
    <div className='md:flex md:justify-between md:items-center  gap-x-8 w-full'>

    <input type="email" placeholder="Enter your email address" className='w-full md:w-1/3 rounded-lg h-12 mt-4' />
    <Button variant={'default'} className='w-full rounded-lg md:w-1/3 h-12 mt-4'>
    Subscribe
    </Button>
    </div>
  </div>
</div>
  )
}

export default Newsletter