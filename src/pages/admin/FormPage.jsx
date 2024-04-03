import React from 'react'
import FromNav from '../../component/admin/forms/FromNav'
import { Outlet } from 'react-router-dom'

export default function FormPage() {
  return (
    <>
    <div>
    <div className='w-[100vw]'>
      <FromNav />
    </div>
    <div className='bg-slate-200 w-[100%] h-[auto] py-[50px]'>
      <Outlet />
    </div>
    </div>
    </>
  )
}
