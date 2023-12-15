'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { urlFor } from '../lib/sanity'

interface Props {
    images: any
}

const ImageComp = ({images}:Props) => {
    const [mainImg, setMainImg] = useState(images[0])

    const handleClick = (image:any) => {
        setMainImg(image)
    }
  return (
    <div className='grid gap-4 lg:grid-cols-5'>
        <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
        {images.map((image:any, index:any) => (
            <div className='overflow-hidden rounded-lg bg-gray-100' key={index}>
                <Image 
                    src={urlFor(image).url()}
                    alt="Great Photo"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover cursor-pointer object-center"
                    onClick={() => handleClick(image)}
                />
            </div>
        ))}
</div>

        <div className='relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4'>
            <Image 
                src={urlFor(mainImg).url()}
                alt="Great Photo"
                width={500}
                height={500}
                className="h-full w-full object-cover cursor-pointer object-center"
            />
          <span className='absolute top-0 left-0 bg-orange-400 px-2 py-1 text-xs font-bold uppercase text-white'>Sale</span>
        </div>
    </div>
  )
}

export default ImageComp