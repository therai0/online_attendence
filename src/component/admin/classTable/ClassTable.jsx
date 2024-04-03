import React from 'react'
import TableHead from '../TableHead/TableHead'

export default function ClassTable({classTable}) {
  return (
    <>
    <div className='w-[100%]'>
        <TableHead />
    </div>
    <div>
        {
classTable.map((key,index)=>{
    return <div
    key={index}
    className='bg-[#f1f1f1] flex w-[100%] h-[auto]'
    >
<div className='w-[25%] h-[auto] flex items-center justify-center py-[10px]'>{key.classname}</div>
<div className='w-[25%] h-[auto] flex items-center justify-center  py-[10px]'>{key.sem}</div>
<div className='w-[25%] h-[auto] flex items-center justify-center  py-[10px]'>{key.section}</div>
<div className='w-[25%] h-[auto] flex items-center justify-center  py-[10px]'>{key.attendence ? <span className='text-[green]'>Done</span>:<span className='text-[red]'>Not done</span>}</div>
    </div>
})
        }
    </div>
    </>
  )
}
