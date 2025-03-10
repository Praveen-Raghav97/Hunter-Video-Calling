import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next'
import React, {ReactNode } from 'react'




export const metadata: Metadata = {
  title: "Hunter",
  description: "A Video Calling App",
  icons:{
     icon: '/icons.logo.svg'
  }
};
const Rootlayout = ({children } : {children :ReactNode}) => {

  return (
    <main className='bg-dark-3'>
    <StreamVideoProvider>
    {children}
    </StreamVideoProvider>
     
    
    </main>
  )
}

export default Rootlayout
