import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { tg } from '../../helters/helpers'

export default function MainScreen() {
  useEffect(()=>{
    tg.BackButton.hide()
  },[])
  return (
    <div
      className='container grid justify-center '
    >
      <div className='flex w-64 mt-8 text-blue-600/100 justify-between' >
      <Link to={'/input'}>screen input</Link>
      <Link to={'/textarea'}>screen textarea</Link>
      </div>
    </div>
    
  )
}
