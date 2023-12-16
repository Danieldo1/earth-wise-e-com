'use client'

import {
  Sheet,

  SheetContent,

  SheetHeader,
  SheetTitle,

} from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"

const Cart = () => {
    const {cartCount,shouldDisplayCart,handleCartClick} = useShoppingCart()
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}> 
    <SheetContent className='sm:max-w-lg w-[90vw]'>
      <SheetHeader>
        <SheetTitle>Shopping Cart</SheetTitle>
      </SheetHeader>
   
    <div className="flex flex-col justify-between h-full">
        <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-100">
                {cartCount === 0 ? (
                <h1 className="text-center py-6 text-4xl">Your cart is empty</h1>
                ):(
                <h1>hello</h1>
                )}
            </ul>
        </div>
    </div>
    </SheetContent>
  </Sheet>
  )
}

export default Cart