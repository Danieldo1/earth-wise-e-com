'use client'

import {
  Sheet,

  SheetContent,

  SheetHeader,
  SheetTitle,

} from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Separator } from "@radix-ui/react-separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Cart = () => {
    const {
        cartCount,
        shouldDisplayCart,
        handleCartClick,
        cartDetails,
        removeItem,
        totalPrice,
        redirectToCheckout,
      } = useShoppingCart();

      const handleCheckout = async (e:any) => {
          e.preventDefault()
          try {
              const result = await redirectToCheckout()
              if (result?.error) {
                  console.log("Error:", result.error.message)
              }
          } catch (error) {
              console.log("Error:", error)
          }
      }
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}> 
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
                <>
                {Object.values(cartDetails ?? {}).map((item) => (
                    <li key={item.id} className="flex py-6 ">
                        <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 '>
                            <Image 
                            src={item.image as string}
                            alt={item.name as string}
                            width={100}
                            height={100}
                            />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                            <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{item.name}</h3>
                                    <p className="ml-4">${item.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{item.description}</p>
                            </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty: {item.quantity}</p>

                                    <div className="flex">
                                        <button 
                                        type="button" 
                                        onClick={() => {
                                           removeItem(item.id) 
                                        }}
                                        className="font-medium text-primary hover:text-primary/80">
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </li>
                ))}
                </>
                )}
            </ul>
        </div>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout</p>
            <div className="mt-6">
                <Button onClick={handleCheckout} variant={'default'} className='w-full rounded-lg h-12'>
                    Checkout
                </Button>

            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          
                    <Link
                    href="/"
                    className="ml-1 font-medium text-primary hover:text-primary/80"
                    onClick={() => handleCartClick()}
                    >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                    </Link>
           
            </div>
        </div>
    </div>
    </SheetContent>
  </Sheet>
  )
}

export default Cart