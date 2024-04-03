import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../../context/UserContext'

export default function Navbar() {
    const { setBool } = useContext(UserContext);
    const [menu, setMenu] = useState(<span class="material-symbols-outlined">
        menu
    </span>)

    function toggleSideBar() {
        setBool(prev => !prev)
    }
    return (
        <>
            <div className='h-[50px]  flex border-b-[1px] px-[20px] sm:px-[45px]'>
                <div className='h-full w-[50%] flex items-center'>
                    <button
                        onClick={toggleSideBar}
                        className='h-auto flex justify-center items-center opacity-70'>
                        {menu}
                    </button>
                </div>
                <div className='w-[50%] h-full flex justify-end items-center opacity-70'>
                    <NavLink
                        className="flex h-full"
                        to='/admin/profile'
                    >
                        <span className='h-full px-2 flex items-center'>Profile</span>

                        <span class="material-symbols-outlined flex items-center text-[30px]">
                            account_circle
                        </span>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
