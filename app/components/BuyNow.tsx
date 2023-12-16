'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity'
import { CartProps } from './AddToCart'



const BuyNow = ({currency,name,description,price,image,price_id}:CartProps) => {
    const {checkoutSingleItem} = useShoppingCart()
    const product = {
        name,
        description,
        price,
        currency,
        image: urlFor(image).url(),
        price_id,
    }

    const handleBuyNow = (priceId:string) => {
      checkoutSingleItem(priceId)
    }
  return (
    <Button
    className='w-full md:w-1/2 rounded-lg h-12 '
    onClick={() => {
        handleBuyNow(product.price_id)
    }}
    >
    Buy Now
    </Button>
  )
}

export default BuyNow