import { useSession } from 'next-auth/react'
import React from 'react'

function Avatar() {
    const { data: session} = useSession()


  return (
    <div>
      <Image src={`https://avatars.decebear.com/api/open-peeps/${session?.user.name}`}/>
    </div>
    )
}

export default Avatar