import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Avatar from './Avatar'
import { LinkIcon, PhotographIcon } from '@heroicons/react/outline'
import { useForm } from 'react-hook-form'

function PostBox() {
    const { data: session} = useSession()
    const [ imageBoxOpen, setImageBoxOpen] = useState<boolean>(false)
    const {
      register,
      setValue,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<FormData>()


  return (
    <form className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2'>
        <div className='flex items-center space-x-3'>
           {/* Avatar */}
           <Avatar seed='Al' />

            <input
            disabled={!session}
            className='flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none'
            type='text' placeholder={
                session ? 'Create a post by entering a title': 'Sign in to post'
            
            }/>

            <PhotographIcon onClick={()=> setImageBoxOpen(!imageBoxOpen)}
             className={` cursor-pointer h-6 text-gray-300 ${imageBoxOpen && 'text-blue-300'}`}/>
            <LinkIcon className='h-6 text-gray-300'/>
        </div>
            {!!watch('postTiles') && (
              <div className='flex flex-col py-2'>
                {/* Body */}
                <div className='flex items-center px-2 '>
                  <p className='min-w-[90px]'>Body:</p>
                  <input
                  className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                  {...register('postBody')}
                   type="text"
                    placeholder='Text (optional)'
                    />
                </div>


                {/* Subreddit */}
                <div className='flex items-center px-2 '>
                  <p className='min-w-[90px]'>Subreddit:</p>
                  <input
                  className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                  {...register('subreddit', {required: true})}
                   type="text"
                    placeholder='i.e. reactjs'
                    />              
                  </div>
             

                {/* Image embed */}
                {imageBoxOpening && (
                  <div className='flex items-center px-2 '>
                    <p className='min-w-[90px]'>Image URL:</p>
                    <input
                    className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                    {...register('postImage')}
                      type="text"
                      placeholder='Optional'
                      />              
                    </div>
                )}


                  {/* Errors */}
                  {Object.keys(errors).length > 0 && (
                    <div className='space-y-2 p-2 text-red'>
                      {errors.postTitle?.type === 'require' && (
                        <p>- A post Title is required</p>
                      )}

                      {errors.subreddit?.type === 'require' && (
                        <p>- A post Title is required</p>
                      )}                                  
                    </div>
                  )}
                 </div>
            )}

    </form>
  )
}

export default PostBox