'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {ShoppingBag} from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'

const links =[
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Essentials',
        href: '/Essentials'
    },
    {
        label: 'Beauty',
        href: '/Beauty'
    },
    {
        label: 'Eco Office',
        href: '/EcoOffice'
    },
    {
        label: 'Furry Friends Haven',
        href: '/FurryFriendsHaven'
    }
]
const Nav = () => {
    const pathname = usePathname()
    const {handleCartClick} =useShoppingCart()
  return (
    <header className='mb-8 shadow-lg py-3 md:py-0'>
      <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
        <Link href='/'>
          <h1 className='text-5xl font-bold text1'>Earth 
          <span className='text-5xl font-bold text-primary text1'>Wise</span>
          </h1>
        </Link>

        <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
            {links.map((link, index) => (
                <div key={index}>
                    {pathname === link.href ? (
                    <Link href={link.href} className='text-lg font-semibold text-primary'>
                         {link.label}
                     </Link>
                    ): (
                        <Link href={link.href} className='text-lg font-semibold text-gray-600 transition duration-200 hover:text-primary'>
                            {link.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
        <div className='flex divide-x group'>
         <Button variant='ghost' className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none'
         onClick={() => handleCartClick()}
         >
            <ShoppingBag className='group-hover:text-primary transition delay-100'/>
            <span className='text-sm hidden font-semibold sm:block text-gray-500 group-hover:text-primary transition delay-150'>Cart</span>
         </Button>
        </div>
      </div>
    </header>
  )
}

export default Nav