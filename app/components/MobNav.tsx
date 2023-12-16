'use client'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { StoreIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
const MobNav = () => {
  return (
    <div className='cursor-pointer items-center lg:hidden'>
        <DropdownMenu >
  <DropdownMenuTrigger>
    <Button variant={'ghost'} className='flex flex-col hover:text-primary transition delay-100 gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24  rounded-none'>
    <StoreIcon className='w-6 h-6 ' />
    <span className='text-sm hidden font-semibold sm:block text-gray-500 group-hover:text-primary transition delay-150'>Shop</span>
    </Button>
    
    </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Category</DropdownMenuLabel>
    <DropdownMenuSeparator />
   {links.map((link, index) => (
       <DropdownMenuItem key={index}>
           <Link href={link.href} className='text-lg font-semibold text-gray-600 transition duration-200 hover:text-primary'>
               {link.label}
           </Link>
       </DropdownMenuItem>
   ))}
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default MobNav