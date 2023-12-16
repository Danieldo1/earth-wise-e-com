import { StarIcon } from 'lucide-react';
import React from 'react'

const Reviews = ({product}:{product:string}) => {
    const reviewsArray = [
        {
          title: 'Sustainable Excellence!',
          rating: '4',
          review: `${product} is not just eco-friendly; it's an eco-chic essential. The quality is exceptional, and the commitment to sustainability is evident from the packaging to the product itself. A must-have for the conscious consumer!`
        },
        {
          title: 'Eco-Friendly Marvel!',
          rating: '5',
          review: `${product} is a smart choice for the environmentally conscious. Its sustainable features, coupled with top-notch quality, make it a winner. Highly recommend!`
        },
        {
          title: 'Beyond Expectations!',
          rating: '3',
          review: `${product} goes above and beyond! The eco-friendly packaging and high-quality design make it a standout choice. A purchase that aligns with both my values and expectations.`
        },
        {
          title: 'Stylish and Green!',
          rating: '4',
          review: `${product} effortlessly combines style with sustainability. The eco-friendly approach is evident in every detail. A stylish, green addition to my collection.`
        },
        {
          title: 'Smart and Sustainable!',
          rating: '5',
          review: `${product} is a smart choice for the environmentally conscious. Its sustainable features, coupled with top-notch quality, make it a winner. Highly recommend!`
        },
        {
          title: 'Green Living Essential!',
          rating: '2',
          review: `${product} is an essential for green living. Its eco-friendly design and functionality make it a standout. A top pick for those prioritizing sustainability.`
        },
        {
          title: 'Responsible Luxury!',
          rating: '4',
          review: `${product} strikes the perfect balance between luxury and responsibility. The eco-friendly packaging is a thoughtful touch, and the product's performance is unmatched.`
        },
        {
          title: 'Conscious Comfort!',
          rating: '3',
          review: `${product} provides comfort with a conscience. The eco-friendly materials and sustainable practices make it a guilt-free indulgence. A conscious consumer's dream!`
        },
        {
          title: 'Green Innovation!',
          rating: '5',
          review: `${product} is a testament to green innovation. Its eco-friendly features and forward-thinking design make it a standout choice for those embracing sustainability.`
        },
        {
          title: 'Eco-Chic Essential!',
          rating: '3',
          review: `${product} is not just eco-friendly; it's an eco-chic essential. The quality is exceptional, and the commitment to sustainability is evident from the packaging to the product itself. A must-have for the conscious consumer!`
        }
      ];
    const getRandomReviews = (count: number) => {
        const shuffledReviews = reviewsArray.sort(() => 0.5 - Math.random());
        return shuffledReviews.slice(0, count);
      };
      const randomReviews = getRandomReviews(3);
      console.log(product)
  return (
    <div>
<h3 className='text-4xl font-bold tracking-tight text-center text1 text-gray-900 lg:text-4xl'>Reviews</h3>
      {randomReviews.map((review, index) => (
        <div key={index} className='py-8 px-8 md:px-24 md:mx-24 bg-slate-100 m-12 rounded-lg'>
            <div className='flex items-center justify-between '>
          <h3 className='text-lg font-semibold py-2'>{review.title}</h3>
          <p className='font-bold flex'>
            <span className='font-bold'>Rating: </span>
            {review.rating}<StarIcon className='w-5 h-5 text-yellow-500 ' fill='orange' />
        </p>
          </div>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  )
}

export default Reviews