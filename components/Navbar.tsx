import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <nav className=' flex flex-between  fixed z-50 w-full 
    text-dark-1 px-6 py-3 lg:px-10'>
      <Link href='/' className = 'flex pt-5 justify-center item-center gap-1'>
      <Image
      src="/icons/logo.svg" 
      width={32}
      height={32}
      alt='Hunter logo'
      className='max-sm:size-10'
      />
      <p className='text-[26px] font-bold text-dark-1 max-sm:hidden'>Hunter</p>
      </Link>
      <div className='flex-between gap-5'>
       
        <SignedIn>
          <UserButton  />
        </SignedIn>

        <MobileNav/>

      </div>
    </nav>
  )
}

export default Navbar
