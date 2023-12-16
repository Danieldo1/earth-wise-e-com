import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const CancelPage = () => {
  return (
    <div className='container p-8 flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold text1'>Payment Cancelled</h1>
        <Image src={'/paymentcancel.svg'} alt='cancel' width={500} height={500} />
        <Link href={'/'} >
            <Button variant={'default'} className='w-full rounded-lg h-12 mt-4'>
            Back to Home
            </Button>
        </Link>
    </div>
  )
}

export default CancelPage