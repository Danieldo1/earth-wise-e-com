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
    successUrl={process.env.NEXT_PUBLIC_URL!+`/stripe/success`}
    cancelUrl={process.env.NEXT_PUBLIC_URL!+`/stripe/cancel`} 
    cartMode='client-only' 
    stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
    language='en-US'
    >
        {children}
    </ShopCart>
  )
}

export default CartProvider