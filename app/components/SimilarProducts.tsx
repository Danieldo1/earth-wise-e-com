import React from 'react'
import { client } from '../lib/sanity'
import { shortProduct } from '../interface'
import Image from 'next/image'
import Link from 'next/link'
import CategoryPage from '../[category]/page'


const SimilarProducts = async ({params}:{params:{category:string}}) => {
    const getCategory = async (category:any,) =>{
        const query = `*[_type == "product" && category->name == "${category}"][0...4]{
            _id,
            "imageUrl": images[0].asset->url,
            price,
            name,
            "slug": slug.current,
            "categoryName": category->name
          }`
    
            const data = await client.fetch(query)
    
            return data
    }
    
    const data:shortProduct[] = await getCategory(params.category)
  return (
    <div className='bg-white'>
    <div className='mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8 '>
        <div className='flex justify-between items-center mb-5 '>
            <h2 className='text-5xl md:text-7xl font-bold tracking-tight text-gray-900 text1'>{params.category}</h2>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {data.map((product) => (
                <div key={product._id} className='group relative'>
                    <div className='min-h-80 aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className='mt-4 flex justify-between'>
                        <div >
                            <h3 className='text-lg md:text-sm font-semibold text-gray-900'>
                                <Link href={`/product/${product.slug}`}>
                                    <span aria-hidden='true' className='absolute inset-0' />
                                    {product.name}
                                </Link>
                            </h3>
                            <p className='mt-1 text-md md:text-sm text-gray-500'>{product.categoryName}</p>
                        </div>
                        <p className='text-md md:text-sm font-medium text-gray-900'>${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default SimilarProducts