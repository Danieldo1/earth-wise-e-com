import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const PaymentSuccess = () => {
  return (
    <div className='container p-8 flex flex-col justify-center items-center'>
            <CheckCircle className=' justify-center mb-4 items-center w-16 h-16 text-primary' />
        <div className=' md:max-w-[50vw] mx-auto justify-center items-center'>
            <h1 className='text-5xl text-center font-bold text1'>Payment Success</h1>
            <p className='text-gray-500 text-center font-medium text-lg'>Thank you for your payment. Your order is on its way!</p>
        </div>
        <Image src={'/paymentsuccess.svg'} alt='success' width={500} height={500} />
        <Link href={'/'} >
            <Button variant={'default'} className='w-full rounded-lg h-12 mt-4'>
            Back to Shopping
            </Button>
        </Link>
    </div>
  )
}

export default PaymentSuccess