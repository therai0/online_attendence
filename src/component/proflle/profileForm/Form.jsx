import React, { useState } from 'react'

export default function Form() {
    const [eye, setEye] = useState(<span class="material-symbols-outlined">
        visibility
    </span>)
    const [bool, setbool] = useState(true)
    const [user, setUser] = useState('admin');
    const [password, setPassword] = useState();


    // function to update the eye
    function updateEyeBtn() {
        setbool(prev => !prev)
    }
    return (
        <div className='flex items-center justify-center py-[50px]'>
            <form action="" className='sm:w-[400px] sm:flex sm:flex-col  sm:items-center sm:justify-center'>
                <div className='flex flex-col w-[100%]  border-2  h-[70px] px-[40px] '>
                    <label htmlFor="user" className='mb-[10px]'>User</label>
                    <input
                        type="text"
                        className='px-[5px] h-[30px]'
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        placeholder='' />
                </div>
                <div className='flex flex-col w-[100%] my-[10px]  h-[70px] px-[40px] '>
                    <label htmlFor="password">Password</label>
                    <div className='flex w-[100%]  '>
                    <input
                    className='w-[100%]  h-[30px] px-[10px]'
                        type={bool ? "password" : "text"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='' />
                    <div onClick={updateEyeBtn}
                    className=' font-[15px] bg-[white] opacity-70 text-[12px]'
                    >{bool ? <span className="material-symbols-outlined h-[100%] opacity-70 flex items-center justify-center text-[16px] sm:text-[24px]">
                        visibility
                    </span> : <span className="material-symbols-outlined  h-[100%] pl-[5px] flex items-center justify-center text-[16px] sm:text-[24px]">
                        visibility_off
                    </span>}</div>
                    </div>
                </div>
                <div className=' w-[100%]  h-[70px] px-[40px] my-[10px] '>
                    <button type='submit'  className='h-[30px] w-[100px] border-2 bg-green-500 text-white'>Update</button>
                </div>
            </form>
        </div>
    )
}
