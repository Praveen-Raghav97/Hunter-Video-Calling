'use client'
import React from 'react'
import {sidebarLinks} from '@/Constant'
import { usePathname } from 'next/navigation'
import  Link from 'next/link'

import {cn}  from '@/lib/utils'
import Image from 'next/image'
const Sidebar = () => {
    const pathname = usePathname()
    sidebarLinks
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col 
    justify-between bg-white p-6 pt-28 text-gray-600 max-sm:hidden lg:w-[264px]">
      <div className='flex flex- flex-col  gap-6 '>
       {sidebarLinks.map((link) => {
        const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
        return(
            <Link
            href={link.route}
            key={link.label}
            className={cn('flex  gap-4 items-center p-3 rounded-lg justify-start', {
                'bg-blue-1 text-white': isActive,
            })}
             > 
             <Image
             src={link.imgURL}
             alt={link.label}
              width={24}
              height={24}
  className=''
             />
             <p className='text-base  font-bold max-lg:hidden'>
             {link.label}
             </p>
           
            </Link>
        )
       })}
      </div>
    </section>
  )
}

export default Sidebar
