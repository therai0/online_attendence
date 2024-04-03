import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FromNav() {
    return (
        <>
            <div className='w-[100%] flex lg:px-[200px]'>
                <div className='w-[50%] h-[40px] flex items-center justify-center '>
                    <NavLink
                        to='/admin/forms'
                    >
                        Create Class
                    </NavLink>
                </div>
                <div className='w-[50%]  h-[40px] flex justify-center items-center'>
                    <NavLink
                        to='/admin/forms/addstudent'
                    >
                        Add Student
                    </NavLink>
                </div>
            </div>
        </>
    )
}
