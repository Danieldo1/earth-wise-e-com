'use client'

import React,{ReactNode} from 'react'
import {CartProvider as ShopCart} from 'use-shopping-cart'
const CartProvider = ({children}:{children:ReactNode}) => {
  return (
    <ShopCart 
    currency="USD" 
    mode='payment'
    billingAddressCollection={true} 
    shouldPersist={true} 
    successUrl='http://localhost:3000/success' 
    cancelUrl='http://localhost:3000/cancel' 
    cartMode='client-only' 
    stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
    language='en-US'
    >
        {children}
    </ShopCart>
  )
}

export default CartProvider