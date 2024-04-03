import React, { useState } from 'react'

export default function CreateClass() {
  const [faculty,setFaculty] = useState('');
  const [semester,setSemester] = useState('');
  const [section,setSection] = useState(null);
  const [creator,setCreator] = useState('admin');
  const [classTeacher,setClassTeacher] = useState('');
  return (
    <>
      <div className='w-[100%] sm:flex sm:flex-col  sm:items-center sm:justify-center'>
    <form className='sm:w-[400px] sm:flex sm:flex-col  sm:items-center sm:justify-center'>
    <h1 className='font-bold my-[10px] text-center text-[20px]'>Create Class</h1>
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
        <label htmlFor="" className='pb-[10px]'>Semester</label>
        <input
          type="text"
          name='semester'
          className='px-[10px]'
          value={semester}
          onChange={e => setSemester(e.target.value)}
          placeholder='semester' />
      </div>
      <div className='flex flex-col w-[100%] h-[70px] px-[40px] '>
        <label htmlFor="" className='pb-[10px]'>Section</label>
        <input
          type="text"
          className='px-[10px]'
          name='section'
          value={section}
          onChange={e => setSection(e.target.value)}
          placeholder='section' />
      </div>
      <div className='flex flex-col w-[100%]   h-[70px] px-[40px] ' >
        <label htmlFor="" className='pb-[10px]'>Created By</label>
        <input
          type="text"
          className='px-[10px]'
          name='creator'
          value={creator}
          onChange={e => setCreator(e.target.value)}
          placeholder=' admin' />
      </div>
      <div className='flex flex-col w-[100%]  h-[70px] px-[40px] '>
        <label htmlFor="" className='pb-[10px]'>Class Teacher</label>
        <input
          type="text"
          className='px-[10px]'
          name='classTeacher'
          value={classTeacher}
          onChange={e => setClassTeacher(e.target.value)}
          placeholder=' class teacher' />
      </div>
      <div className=' w-[100%]  h-[70px] px-[40px] my-[20px] '>
        <button type='submit' className='h-[30px] w-[100px] border-2 bg-green-500 text-white'>Submit</button>
      </div>
    </form>
    </div>
    </>
  )
}
