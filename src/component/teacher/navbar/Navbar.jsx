import React from 'react'

export default function Navbar({navItem}) {
  return (
    <nav className='h-auto text-[white] bg-[#35374B] w-full flex flex-wrap'>
<div className='w-[60%] h-full text-[14px] '>
    <ul className='flex h-full  flex-wrap '>
        <li className='h-[60px] flex items-center  px-2'>
            <span className='font-bold px-1'>Faculty:</span>
            {navItem.faculty}
            </li>
            <li className='h-[60px] flex items-center px-2 '>
                <span className='font-bold px-1'>Sem:</span>
                {navItem.sem}
            </li>
            <li className='h-[60px] flex items-center px-2'>
                <span className='font-bold px-1'>Sec:</span>
                {navItem.section}
            </li>
    </ul>
</div>
<div className='w-[40%] ' >
<p className='h-full text-[14px] flex justify-center items-center'>
    <span className='font-bold pr-2'>Teacher:</span>
    {navItem.teacher}
</p>
</div>
    </nav>
  )
}
