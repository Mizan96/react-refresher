import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
    let navigate = useNavigate()
  return (
    <div>
      <button 
      onClick={()=>{
         navigate('/')
      }}
      className='bg-blue-900 rounded text-xl px-2 py-3 m-2 cursor-pointer active:scale-95'>
        Return Home
    </button>
      <button 
      onClick={()=>{
         navigate(-1)
      }}
      className='bg-blue-900 rounded text-xl px-2 py-3 m-2 cursor-pointer active:scale-95'>Previous</button>
      <button
      onClick={()=>{
         navigate(+1)
      }}
      className='bg-blue-900 rounded text-xl px-2 py-3 m-2 cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Nav2
