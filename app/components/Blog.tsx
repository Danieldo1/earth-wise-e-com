import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div className='container p-8 flex flex-col justify-center items-center'>
    <div className='justify-center items-center'>
        <h1 className='text-5xl font-bold text1'>Read Our blog</h1>
    </div>
    <div className='flex flex-col md:grid md:grid-cols-2 md:gap-8 items-center justify-center p-8 md:items-start'>
        <div className='flex flex-col justify-center items-center p-8'>
            <div className='min-h-80 aspect-square w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
            <Image src={'/candle.webp'} alt='candle' width={500} height={500} className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
            </div>
            <div className='mt-4 '>
            <p className='text-md text-orange-400 text-start font-medium uppercase'>sustainable christmas</p>
            <h2 className=' font-bold tracking-wider text-start mb-2 text-gray-900 text-2xl'>20 Must-Have Sustainable Kitchen Products for Every Holiday Host</h2>
            <p className='text-gray-500 text-start ont-normal text-md'>Hosting the holidays? Here are 20 sustainable kitchen products you need for a stress-free season</p>
            </div>
        </div>
  
        <div className='flex flex-col justify-center items-center p-8'>
            <div className='min-h-80 aspect-square w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
            <Image src={'/presents.webp'} alt='candle' width={500} height={500} className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
            </div>
            <div className='mt-4 '>
            <p className='text-md text-orange-400 text-start font-medium uppercase'>christmas gift ideas</p>
            <h2 className=' font-bold tracking-wider text-start mb-2 text-gray-900 text-2xl'>30 Thoughtful and Sustainable Christmas Gift Ideas for Eco-conscious Shoppers</h2>
            <p className='text-gray-500 text-start font-normal text-md'>Find the perfect sustainable gift for your loved ones this year! Discover our top 30 ideas for every budget and interest and make their day unforgettable.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Blog