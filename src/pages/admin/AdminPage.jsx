import React, { useContext } from 'react'
import Navbar from '../../component/admin/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../component/admin/sidebar/Sidebar'
import UserContext from '../../context/UserContext'

export default function AdminPage() {
  const {bool,setBool} = useContext(UserContext);
  function toggleSideBar()
  {
      setBool(prev => !prev)
  }
  return (
    <div>
      <div>
        <Navbar toggleSideBar={toggleSideBar} />
      </div>
      <div className='flex flex-row w-[100%] '>
        <div className='w-[auto]'>
      { bool ? <Sidebar  toggleSideBar={toggleSideBar}/>: null}
        </div>
        <div className='w-[auto] overflow-x-scroll lg:w-[100%] lg:overflow-hidden lg:flex lg:items-center lg:justify-center'>
        <Outlet/>
        </div>
      </div>
    </div>
  )
}
