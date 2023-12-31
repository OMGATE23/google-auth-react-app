import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

const HomePage = () => {
  const {user} = useAuthContext()
  const {email, displayName , photoURL , uid} = user
  console.log(user)
  return (
    <div className='flex items-center justify-center flex-col gap-8 my-8'>
      <h1 className='text-center text-3xl  md:text-5xl font-bold'>Hello, {displayName}</h1>
      <h2 className=' text-xl md:text-2xl text-gray-700 '>Only logged in users can see this page!</h2>
      <div className='outline outline-1 flex items-center justify-center flex-col gap-4 text-lg md:text-xl p-6 outline-gray-300 rounded-md shadow-md bg-gray-50'>
      {photoURL && <img src={photoURL} alt = {displayName + "'s photo"} />}
      <p>Email : {email}</p>
      <p>ID : {uid}</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-4'>
        <p className='text-2xl font-bold text-blue-900'>My Socials</p>
        <div className='flex items-center justify-center gap-4'>
          <a className='p-4 bg-white transition-all duration-150 rounded-full shadow-md hover:bg-blue-50' href = "https://twitter.com/om_gate">
            <img width={36} src='./twitter.svg' />
          </a>
          <a className='p-4 bg-white transition-all duration-150 rounded-full shadow-md hover:bg-blue-50' href = "https://hashnode.com/@OmGaTe">
            <img width={36} src='./hashnode.svg' />
          </a>
          <a className='p-4 bg-white transition-all duration-150 rounded-full shadow-md hover:bg-blue-50' href = "https://github.com/OMGATE23">
            <img width={36} src='./github.svg' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage