import React from 'react'
import Image from 'next/image'
import Icon from '../public/Icon.png'

function Header() {
  return (
    <div className='relative h-10 w-20'>
        <Image 
        objectFit='contain'
        src= {Icon}
        layout="fill"
        />
    </div>
  )
}

export default Header