import React from 'react'

export default function StudentTable({ studentDetails }) {
    return (
        <>
            <div className='h-[40px] w-[100%]'>
                {
                    studentDetails.map((key, index) => {
                        return <ul key={key.lcno} className='w-[100%] flex h-[100%] border border-b-[#363636]'>
                            <li className='h-[100%] w-[25%] flex items-center justify-center text-[12px]'>{key.rollno}</li>
                            <li className='h-[100%] w-[25%] flex items-center justify-center text-[12px] border border-x-[#363636]'>{key.name}</li>
                            <li className='h-[100%] w-[25%] flex items-center justify-center text-[12px] border border-r-[#363636]'>{key.lcno}</li>
                            <li className='h-[100%] w-[25%] flex items-center justify-center text-[12px]'>{key.stats}</li>
                        </ul>
                    })
                }
            </div>
        </>
    )
}
