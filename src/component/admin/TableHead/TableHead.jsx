import React from 'react'

export default function TableHead() {
  return (
   <>
  <div className='bg-white flex w-[100%] p-[10px]'>
    <div className='w-[25%] h-[35px] flex items-center justify-center'>Faculty</div>
    <div className='w-[25%] h-[35px] flex items-center justify-center'>Semester</div>
    <div className='w-[25%] h-[35px] flex items-center justify-center'>Section</div>
    <div className='w-[25%] h-[35px] flex items-center justify-center'>Attendence status</div>
  </div>
   </>
  )
}
