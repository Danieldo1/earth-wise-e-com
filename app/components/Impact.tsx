import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Impact = () => {
  return (
    <section className='container p-8 flex flex-col justify-center items-center'>
  <div className='w-full h-full flex flex-col md:flex-row'>
  <div className='flex flex-col gap-4 md:w-1/2 order-2 md:order-1'>
    <p className='text-xl text-orange-400 text-start  font-bold'>Our Shared Impact</p>
    <h2 className='text-5xl md:text-7xl font-bold tracking-tight mb-5 text-gray-900 text1'>Committing to the Planet</h2>
    <p className='text-gray-500 text-start font-medium text-lg'>Shopping on EarthHero means you’re helping to build a more sustainable world. These certifications are just one example of our commitment to a better planet, and serve as a representation to how your choices make real impact on our planet. Learn more about these certifications below.</p>
    <Button className='w-full md:w-1/4 rounded-lg h-12 mt-4'>
      Learn more
    </Button>
  </div>
  <div className='md:w-1/2 order-1 md:order-2 flex justify-center items-center '>
    <Image 
      src={'/impact.webp'}
      alt='impact'
      width={1000}
      height={1000}
    />
  </div>
</div>
    </section>
  )
}

export default Impact