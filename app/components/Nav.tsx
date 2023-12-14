'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {ShoppingBag} from 'lucide-react'

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
  return (
    <header className='mb-8 border-b'>
      <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
        <Link href='/'>
          <h1 className='text-3xl font-bold'>Earth 
          <span className='text-3xl font-bold text-primary'>Wise</span>
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
        <div className='flex divide-x border-r sm:border-l'>
         <Button variant='outline' className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none'>
            <ShoppingBag className=''/>
            <span className='text-sm hidden font-semibold sm:block text-gray-500'>Cart</span>
         </Button>
        </div>
      </div>
    </header>
  )
}

export default Nav