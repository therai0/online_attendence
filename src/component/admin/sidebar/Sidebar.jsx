import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../../context/UserContext'

export default function Sidebar({toggleSideBar}) {
    const [faculty,setFaculty] = useState(['BIT 3rd sem']);
  return (
    <>
    <div className='h-[100vh] w-[180px] bg-white z-[1] border-r-2'>
    <div className='w-[100%] h-auto'>
        <div  className='h-[50px] opacity-70 w-[100%] flex justify-center items-center '>
            <NavLink
            onClick={toggleSideBar} 
            to='/admin/'
            >
                Home
            </NavLink>
        </div>
        <div  className='h-[50px] opacity-70 w-[100%] flex justify-center items-center '>
            <NavLink 
            onClick={toggleSideBar} 
            to='/admin/forms'
            >
                Forms
            </NavLink>
        </div>
    </div>
    <div className='w-[100%] h-[auto]'>
    <div className='h-[50px] opacity-60 w-[100%] flex justify-center items-center  font-bold'>
        Classes
    </div>
    <div>
    {
        faculty.map((key,index)=>{
            return <div
            className='h-[50px] opacity-60 w-[100%] flex justify-center items-center'
            >
                <NavLink 
                 onClick={toggleSideBar} 
                to="/admin/classes"
                >
                    {key}</NavLink>  
            </div>
        })
    }
    </div>
    </div>
    </div>
    </>
  )
}
