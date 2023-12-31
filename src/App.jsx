import './App.css'
import {createBrowserRouter , RouterProvider, redirect} from 'react-router-dom'
import Main from './layout/Main'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import { useAuthContext } from './hooks/useAuthContext'



function App() {
  const {authIsReady , user} = useAuthContext()
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Main/>,
      errorElement : <h1>Oops , Something went wrong!</h1> ,
      children : [
        {
          index : true,
          element : <LandingPage/>,
          loader : () => {
            if(user){
              return redirect('/home')
            }
            return null
          }
          
        },
        {
          path : 'home',
          element : <HomePage/>,
          loader : () => {
            if(!user){
              return redirect('/')
            }
            return null
          }
        }
      ]
    }
  ])
  return (
    <>
      {authIsReady && (
        <RouterProvider router={router} />
      )}
    </>
  )
}

export default App
