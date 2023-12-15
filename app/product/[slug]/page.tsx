import ImageComp from '@/app/components/ImageComp'
import Reviews from '@/app/components/Reviews'
import SimilarProducts from '@/app/components/SimilarProducts'
import { fullProduct } from '@/app/interface'
import { client } from '@/app/lib/sanity'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Star, Truck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const getProduct = async (slug:string) =>{
    const query = `*[_type == "product" && slug.current== "${slug}"][0]{
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
      }`

      const data = await client.fetch(query)

      return data
}

const ProductPage = async ({params}:{params:{slug:string}}) => {
    const data: fullProduct = await getProduct(params.slug)
    function generateRandomNumber() {
        return Math.floor(Math.random() * 1001);
      }
      const randomNumber = generateRandomNumber();

      function generateRandomNumberDecimal() {
        return Math.floor(Math.random() * 51) / 10;
      }
      const randomNumberDecimal = generateRandomNumberDecimal();
      function addThreeDays() {
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(futureDate.getDate() + 3);
      
        const options = { day: 'numeric', month: 'short', weekday: 'short' };
        const formattedDate = futureDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', weekday: 'short' });
        return formattedDate;
      }
      const threeDays = addThreeDays();
      function addFourDays() {
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(futureDate.getDate() + 4);
      
        const options = { day: 'numeric', month: 'short', weekday: 'short' };
        const formattedDate = futureDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', weekday: 'short' });
        return formattedDate;
      }
      const fourDays = addFourDays();
  return (
    <div className='min-h-screen bg-white '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid gap-8 md:grid-cols-2 '>
                <ImageComp images={data.images} />

                <div className='md:py-8'>
                    <div className='mb-2 md:mb-3'>
                        <h2 className='text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl'>{data.name}</h2>
                        <span className='text-gray-400 tracking-tighter inline-block mb-0.5  italic'><Link className='hover:underline' href={`/${data.categoryName}`}>{data.categoryName}</Link></span><span className=' text-gray-400 tracking-tighter italic'>/{data.name}</span>

                    </div>

                    <div className='mb-3 flex items-center gap-3 md:mb-10'>
                        <Button className='rounded-full'>
                            <Star className='w-4 h-4 text-orange-400 mr-2' fill='orange' />
                            <span className='text-sm font-bold'>{randomNumberDecimal}</span>
                        </Button>
                        <span className='text-sm text-gray-500 transition duration-100 hover:underline'>{randomNumber} reviews</span>
                    </div>

                    <div className='mb-4 '>
                        <div className='flex items-end gap-2'>
                            <span className='text-xl font-bold text-gray-900 md:text-2xl'>${data.price}</span>
                            <span className='text-gray-400 line-through mb-0.5 '>${data.price +randomNumberDecimal}</span>
                        </div>

                        <span className='text-sm text-gray-500 uppercase'>Including all taxes</span>
                    </div>

                    <div className=' flex items-center  gap-2 text-gray-500 '>
                        <Truck />
                        <span className='text-sm '>Order Now</span>
                    </div>
                    <div className='mb-6'>
                        <span className='text-sm text-gray-500 '>Get it by {threeDays} - {fourDays}</span>
                    </div>
                    <Separator className='mb-6'/>

                    <p className='my-6 text-base text-gray-800 md:text-lg tracking-wide'>{data.description}</p>

                    <div className='flex gap-2.5 mb-12 '>
                        <Button className='w-full md:w-1/2 rounded-lg h-12 '>Buy now</Button>
                        <Button variant={'secondary'} className='w-full md:w-1/2 rounded-lg h-12'>Add to cart</Button>
                    </div>   
                </div>
            </div>
                    <div>
                        <Reviews product={data.name} />
                    </div>

                    <SimilarProducts params={{ category: data.categoryName }}/>
        </div>
    </div>
  )
}

export default ProductPage