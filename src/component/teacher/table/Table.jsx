import React, { useContext, useState } from 'react'
import UserContext from '../../../context/UserContext'

export default function Table({ student }) {
 let {stdData} = useContext(UserContext)
    return (
        <>
            <div className='w-100 bg-[#f5f2f2]'>
                {
                    student.map((key, index) => {
                        return <div
                            className='flex flex-wrap w-100 h-[50px]'
                            key={index}>
                            <div className='w-[15%] h-full flex items-center justify-center text-[12px] '>{key.rollno}</div>
                            <div className='w-[25%] h-full flex items-center justify-center text-[12px]  '>{key.name}</div>

                            <form className="h-full w-[60%] text-[12px] flex flex-wrap 
                            md:justify-center lg:justify-center">
                                <div
                                    className='text-[12px] w-[33%] flex justify-center 
                                    items-center flex-wrap hover:cursor-pointer md:w-[30%]   lg:w-[20%] '>
                                    <input type="radio"
                                        value="present"
                                        name='attendence'
                                        // onChange={e => setAttendence(`${key.rollno}` `${key.name}` `${e.target.value}`)}
                                        // onChange={e =>stdData.push(`${key.rollno}${e.target.value}`)}
                                        onChange={e =>stdData.push(`${key.rollno}${e.target.value} ${new Date().getTime()}`)}
                                        className='h-[10px] mr-[3px] hover:cursor-pointer' />
                                    <span>Present</span>
                                </div>
                                <div className='text-[12px] w-[33%] flex justify-center items-center 
                flex-wrap hover:cursor-pointer
                  md:w-[30%]   lg:w-[20%]'>
                                    <input
                                        type="radio"
                                        value="absent"
                                        name='attendence'
                                        // onChange={e => setAttendence(`${key.rollno}${key.name}${e.target.value}`)}
                                        // onChange={e =>stdData.push(`${key.rollno}${key.name}${e.target.value}`)}
                                        onChange={e =>stdData.push(`${key.rollno}${e.target.value} ${new Date().getTime()}`)}
                                        className='h-[10px] mr-[3px] hover:cursor-pointer' />
                                    <span>Absent</span>
                                </div>
                                <div className='text-[12px] w-[33%] flex justify-center 
                                items-center flex-wrap hover:cursor-not-allowed md:w-[30%]
                                    lg:w-[20%] '>
                                    <input
                                        type="radio"
                                        value="application"
                                        name='attendence'
                                        className='h-[10px] mr-[3px]' disabled />
                                    <span className='opacity-60'>Application</span>
                                </div>
                            </form>
                        </div>
                    })
                }
            </div>
        </>
    )
}
