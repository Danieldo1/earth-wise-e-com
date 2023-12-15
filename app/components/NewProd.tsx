import React from 'react'
import { client } from '../lib/sanity'
import { shortProduct } from '../interface'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
    const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
        _id,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`

      const data = await client.fetch(query)
    //   console.log(data,'DATA')
      return data
}

const NewProd = async () => {
    const data: shortProduct[] = await getData()
  return (
    <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <div className='flex justify-between items-center '>
                <h2 className='text-2xl font-bold tracking-tight text-gray-900'>New Products</h2>
                    <Link href='/all'>
                        <span className='text-primary flex items-center gap-x-1'>View All &rarr;</span>
                    </Link>
            </div>

            <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {data.map((product) => (
                    <div key={product._id} className='group relative'>
                        <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className='mt-4 flex justify-between'>
                            <div>
                                <h3 className='text-sm font-semibold text-gray-900'>
                                    <Link href={`/product/${product.slug}`}>
                                        <span aria-hidden='true' className='absolute inset-0' />
                                        {product.name}
                                    </Link>
                                </h3>
                                <p className='mt-1 text-sm text-gray-500'>{product.categoryName}</p>
                            </div>
                            <p className='text-sm font-medium text-gray-900'>${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewProd