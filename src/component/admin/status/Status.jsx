import React from 'react'

export default function Status({status}) {
  return (
    <>
    <div className='h-[auto] w-[100%] bg-white rounded-[10px] flex flex-col justify-center p-[30px] lg:h-[200px] lg:ml-[10px] lg:w-[100%]'>
        <h1 className='font-bold text-black'>Today's status</h1>
        <div className='sm:flex'>
        <div className=' opacity-75 my-[5px] sm:w-[50%] sm:text-[24px]'>
            <h3 className=''>Total present</h3>
            <p className='text-[green] text-[14px] font-bold sm:text-[24px]'>{status.present}</p>
        </div>
        <div className=' opacity-75 mt-[5px] sm:text-[24px]'>
            <h3 className=''>Total bbsent</h3>
            <p className='text-[red] text-[14px] font-bold sm:text-[24px]'>{status.absent}</p>
        </div>
        </div>
    </div>
    </>
  )
}
