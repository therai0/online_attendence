import React from 'react'

export default function ClassNav({ classdetails }) {
    return (
        <>
            <div className='flex w-[100%] flex-wrap text-[14px]'>
                <div className='h-[50px] w-[70%] px-[45px]'>
                    <ul className='flex h-[100%] font-bold'>
                        <li className='h-[100%] w-[30%] flex justify-center items-center sm:w-[auto] sm:text-[16px] sm:px-[10px]'>{classdetails.faculty}</li>
                        <li className='h-[100%] w-[30%] flex justify-center items-center sm:w-[auto] sm:text-[16px] sm:px-[10px]'>Sem:{classdetails.sem}</li>
                        <li className='h-[100%]  w-[40%] flex justify-center items-center sm:w-[auto] sm:text-[16px] sm:px-[10px]'>Sec:{classdetails.section}</li>
                    </ul>
                </div>
                <div className='h-[50px] flex items-center opacity-70 sm:w-[30%] sm:px-[45px] sm:justify-end'>
                    Add Student
                </div>
            </div>
        </>
    )
}
