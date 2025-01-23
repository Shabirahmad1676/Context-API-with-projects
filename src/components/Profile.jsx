import React from 'react'
import userContext from '../context/UserContext'
import { useContext } from 'react'

const Profile = () => {

  const {user} = useContext(userContext)

  if(!user) return <div>Please LogIn!</div>
  
  return <div>Welcome {user.name} </div>
}

export default Profile