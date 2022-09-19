import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'


function Avatar() {
    const { data: session} = useSession()


  return (
    <div>
      <Image src={`https://avatars.decebear.com/api/open-peeps/$
      {session?.user?.name || 'placeholder'
    }`}/>
    </div>
    )
}

export default Avatar