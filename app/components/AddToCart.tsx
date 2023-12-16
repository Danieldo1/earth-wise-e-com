'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity'

export interface CartProps {
 name:string
 description:string
 price:number
 currency:string
 image: any   
 price_id:string
}

const AddToCart = ({currency,name,description,price,image,price_id}:CartProps) => {
    const {addItem,handleCartClick} = useShoppingCart()
    const product = {
        name,
        description,
        price,
        currency,
        image: urlFor(image).url(),
        price_id,
    }
  return (
    <Button
    variant={'secondary'} className='w-full md:w-1/2 rounded-lg h-12'
    onClick={() => {
        addItem(product),
        handleCartClick()
    }}
    >
    Add to cart
    </Button>
  )
}

export default AddToCart