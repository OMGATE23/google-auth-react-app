import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

const Header = () => {
    const {user} = useAuthContext()
    const {logout , isPending , error} = useLogout()
  return (
    <>
        {
            user && (
                <header className='p-4 flex justify-end gap-4'>
                    <button 
                    disabled = {isPending} 
                    onClick={logout}
                    className={`outline outline-1 py-2 px-4 rounded-md`}>
                    </button>
                </header>
            )

        }
    </>
  )
}

export default Header