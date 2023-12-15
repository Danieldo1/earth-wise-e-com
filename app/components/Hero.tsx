import Image from 'next/image'
import React from 'react'
import { client, urlFor } from '../lib/sanity'
import Link from 'next/link'


const getData = async () => {
    const query = "*[_type == 'imagesMain'][0]"
    const data = await client.fetch(query)
    // console.log(data,'DATA')
    return data
}

const Hero = async () => {
    const data = await getData()
  return (
    <section className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
            <div className='mb-6 flex  w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
                <h1 className='text-3xl font-bold mb-4 sm:text-4xl md:mb-8 md:text-5xl'>Elevate Your Lifestyle, Sustainably</h1>
                <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>Discover the Power of Nature.Our eco-friendly products are made with natural ingredients to help you and our World live a longer,healthier and a happier life.</p>
            </div>

            <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
                <div className='relative  z-10 md:-ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
                <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />                
            </div>

            <div className=' hidden md:block overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
                <Image
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
            </div>
            </div>
        </div>

        <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
            <div className='flex h-12 w-full divide-x overflow-hidden rounded-lg border'>
                <Link href='/Essentials' className='flex w-1/3 items-center justify-center text-gray-500 transition duration-200 hover:bg-slate-200 active:bg-slate-300'>
                    Essentials
                </Link>
                <Link href='/Beauty' className='flex w-1/3 items-center justify-center text-gray-500 transition duration-200 hover:bg-slate-200 active:bg-slate-300'>
                    Beauty
                </Link>
                <Link href='/EcoOffice' className='flex w-1/3 items-center justify-center text-gray-500 transition duration-200 hover:bg-slate-200 active:bg-slate-300'>
                    Eco Office
                </Link>
                <Link href='/FurryFriendsHaven' className='flex w-1/3 items-center justify-center text-gray-500 transition duration-200 hover:bg-slate-200 active:bg-slate-300'>
                Furry Friends
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero