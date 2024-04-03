import React from 'react'

export default function TableHead({tableHead}) {
   
  return (
    <>
    <div className='flex w-100 h-[40px] border bg-[white]'>
        <div className='w-[15%] h-full flex items-center justify-center text-[14px] px-[8px]'>
          {tableHead.rollno}
        </div>
        <div className='w-[25%] h-full  flex items-center justify-center text-[14px] px-[8px]'>
          {tableHead.student}
        </div>
        <div className='w-[60%] h-full flex items-center justify-center text-[14px] px-[8px]'>
          {tableHead.attendence}
        </div>
    </div>
    </>
  )
}
