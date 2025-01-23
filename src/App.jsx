import { useState } from 'react'
import ContextProvider from './context/ContextProvider'
import LogIn from './components/LogIn'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ContextProvider>
    <LogIn/>
    <Profile/>
    </ContextProvider>
    </>
  )
}

export default App
