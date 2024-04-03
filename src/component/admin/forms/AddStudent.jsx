import React, { useState } from 'react'

export default function AddStudent() {
    const [stdName,setStdName] = useState('');
    const [faculty,setFaculty] = useState('');
    const [semester,setSemester]= useState('')
    const [lcno,setLcno] = useState('');
    const [section,setSection] = useState(null);
    const [rollno,setRollNo] = useState('');
  return (
    <>
    <div className='w-[100%] sm:flex sm:flex-col  sm:items-center sm:justify-center'>
    <form action="" className='sm:w-[400px] sm:flex sm:flex-col  sm:items-center sm:justify-center'>
    <h1 className='font-bold my-[10px] text-center text-[20px]'>Add Student</h1>
    <div className='flex flex-col w-[100%]  border-2  h-[70px] px-[40px] '>
        <label htmlFor="" className='pb-[10px]'>Student name</label>
        <input
          type="text"
          name='stdname'
          className='px-[10px]'
          value={stdName}
          onChange={e => setStdName(e.target.value)}
          placeholder='name' />
      </div>
    <div className='flex flex-col w-[100%]  border-2  h-[70px] px-[40px] '>
        <label htmlFor="" className='pb-[10px]'>LC no</label>
        <input
          type="text"
          name='lcno'
          className='px-[10px]'
          value={lcno}
          onChange={e => setLcno(e.target.value)}
          placeholder='LC XXXXXXXXXXXXx' />
      </div>
    <div className='flex flex-col w-[100%]  border-2  h-[70px] px-[40px] '>
        <label htmlFor="" className='pb-[10px]'>Roll No</label>
        <input
          type="text"
          name='rollno'
          className='px-[10px]'
          value={lcno}
          onChange={e => setRollNo(e.target.value)}
          placeholder='Roll No' />
      </div>
    <div className='flex flex-col w-[100%]  border-2  h-[70px] px-[40px] '>
        <label htmlFor="" className='pb-[10px]'>Faculty</label>
        <input
          type="text"
          name='faculty'
          className='px-[10px]'
          value={faculty}
          onChange={e => setFaculty(e.target.value)}
          placeholder='faculty' />
      </div>
    <div className='flex flex-col w-[100%]  border-2  h-[70px] px-[40px] '>
        <label htmlFor="" className='pb-[10px]'>Section</label>
        <input
          type="text"
          name='faculty'
          className='px-[10px]'
          value={section}
          onChange={e => setSection(e.target.value)}
          placeholder='section' />
      </div>
    <div className='flex flex-col w-[100%]  border-2  h-[70px] px-[40px] '>
        <label htmlFor="" className='pb-[10px]'>Semester</label>
        <input
          type="text"
          name='faculty'
          className='px-[10px]'
          value={semester}
          onChange={e => setSemester(e.target.value)}
          placeholder='semester' />
      </div>
      <div className=' w-[100%]  h-[70px] px-[40px] my-[20px] '>
        <button type='submit' className='h-[30px] w-[100px] border-2 bg-green-500 text-white'>Submit</button>
      </div>
    </form>
    </div>
    </>
  )
}
