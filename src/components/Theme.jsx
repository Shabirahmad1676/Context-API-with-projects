import React, { useContext } from 'react'
import { ThemeContext } from '../App'


const Theme = () => {

const {theme,setTheme} = useContext(ThemeContext)

const handleClick = ()=>{
  if(theme == 'light'){
    setTheme('dark')
  }else {
    setTheme('light')
  }
}

  return (
    <div className="flex h-screen mx-auto items-center justify-center">
    <button className='p-3 text-emerald-800 border ' onClick={handleClick} >Theme</button>
    </div>
  )
}

export default Theme