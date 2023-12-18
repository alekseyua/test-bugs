import React from 'react'

export default function MainScreen() {
  function handlerClickGoto (){
    console.log(window.Telegram.WebApp.openLink('https://t.me/alekseyuadnepr'))
  }

  return (
    <div className={['md:container md:mx-auto']}>
      <input type='text' className='rounded text-pink-500'/>
      <br />
      <div onClick={handlerClickGoto}>Test link go to telegram chat</div>
      MainScreen
    </div>
  )
}
