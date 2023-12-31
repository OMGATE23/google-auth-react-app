import React from 'react'
import useLogin from '../hooks/useLogin'
import { useLoaderData } from 'react-router-dom'

const LandingPage = () => {
  const {login , error , isPending} = useLogin()
  return (
    <div className='flex items-center justify-center h-full flex-col gap-4'>
      <h1 className=' text-3xl md:text-5xl font-bold'>React + <span className='text-blue-600'>G</span>
      <span className='text-red-600'>o</span>
      <span className='text-yellow-600'>o</span>
      <span className='text-blue-600'>g</span>
      <span className='text-green-600'>l</span>
      <span className='text-red-600'>e</span> Auth  
        
      </h1>
      <p className=' text-xl md:text-2xl'>Click the Log in Button below to log in</p>
      <button 
        disabled = {isPending} 
        className='text-xl outline outline-1 py-2 px-4 rounded-md'
        onClick={login}
      >Login using Google</button>
      {error && <p className='text-red-700'>{error.message}</p>}
    </div>
  )
}

export default LandingPage