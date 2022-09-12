import React from 'react'
import Image from 'next/image'
import Icon from '../public/Icon.png'
import { BeakerIcon, ChevronDownIcon, HomeIcon } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/outline'

function Header() {
  return (

    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
        <div className=' relative h-10 w-20 flex-shrink-0 
        cursor-pointer overflow:hidden'>
            <Image 
            objectFit='contain'
            src= {Icon}
            layout="fill"
            />
        </div>
            <div className='mx-7 flex items-center xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5'/>
            <p className='flex-1 ml-2 lg:inline'>Home</p>
            <ChevronDownIcon className='h-5 w-5'/>
            </div>
    </div>
  )
}

export default Header