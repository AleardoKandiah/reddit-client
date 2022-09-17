import { useSession } from 'next-auth/react'
import React from 'react'

function PostBox() {
    const { data: session} = useSession()

  return (
    <div>
        <div>
           {/* Avatar */}

            <input type='text' placeholder='Create a post by entering a title'/>

        </div>
    </div>
  )
}

export default PostBox