import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Metadata } from 'next';
import { Chilanka } from 'next/font/google'
import React, {ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Hunter",
  description: "A Video Calling App",
  icons:{
     icon: '/icons.logo.svg'
  }
};
const Homelayout = ({children } : {children :ReactNode}) => {
  return (
    <main className='relative bg-purple-1 '>
        <Navbar/>
        <div className='flex'>
            <Sidebar/>
            <section className=' flex min-h-screen rounded-lg flex-1 flex-col px-6 pt-20 max-md:pb-14 sm:px-14'>
                <div className='w-full '>
                {children}
                </div>
            </section>
        </div>

      
    </main>
  )
}

export default Homelayout
