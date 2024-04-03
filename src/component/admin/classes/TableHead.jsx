import React from 'react'

export default function TableHead() {
  return (
    <>
    <div className='flex h-[40px] w-[100%]'>
        <ul className='h-[100%] flex w-[100%] bg-slate-400'>
            <li className='h-[100%] w-[25%] flex items-center justify-center text-[12px] '>Roll No</li>
            <li className='h-[100%] w-[25%] flex items-center justify-center text-[12px]'>Name</li>
            <li className='h-[100%] w-[25%] flex items-center justify-center text-[12px] '>Lc No</li>
            <li className='h-[100%] w-[25%] flex items-center justify-center text-[12px]'>Status</li>
        </ul>
    </div>
    </>
  )
}
