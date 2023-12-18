import React, { useEffect } from 'react'
import { handlerClickGoto, tg } from '../../helters/helpers'
import { useNavigate } from 'react-router';

export default function TextareaScreen() {
  const navigate = useNavigate();
  useEffect(()=>{
    tg.BackButton.show()
    tg.BackButton.onClick(navigate('/')) 
  })
  return (
    <div className={['container mt-8 grid grid-cols-1 justify-items-center']}>
      <div
        className='flex mt-8 flex-col items-center'
      >
        <label>form input textarea</label>
        <textarea type='text' className='rounded text-pink-500' />
        <br />
        <button
          className='w-48 mt-2 border-indigo-500/100 ring-offset-2 ring-2 rounded-md hover:bg-sky-700'
          onClick={handlerClickGoto}
        >
          Test link go to telegram chat 
        </button>
      </div>



    </div>
  )
}
