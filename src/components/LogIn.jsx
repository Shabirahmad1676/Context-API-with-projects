import React from 'react'
import { useState,useContext } from 'react'
import userContext from '../context/UserContext'


const LogIn = () => {

  const [name, setname] = useState('')
  const [pass, setpass] = useState('')

  const {setuser} = useContext(userContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setuser({name,pass})
    setpass('')
    setname('')
  }

  return (
    <div>
      <h2>LogIn</h2>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter name' value={name} onChange={(e)=>{setname(e.target.value)}} />
      <input type="password" placeholder='Enter password' value={pass} onChange={(e)=>{setpass(e.target.value)}} />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default LogIn