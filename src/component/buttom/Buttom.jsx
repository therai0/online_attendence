import React from 'react'

export default function Buttom({getData,submit}) {
  return (
    <div className='h-[60px]  flex justify-end items-center pr-10'>
        <button 
        // type={submit} 
        onClick={getData}
         className='h-[30px]  rounded-sm bg-[#6420AA] text-white px-8'>submit</button>
    </div>
  )
}
