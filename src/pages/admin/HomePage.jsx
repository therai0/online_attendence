import React from 'react'
import Calender from '../../component/admin/calender/Calender'
import Status from '../../component/admin/status/Status'
import SearchCard from '../../component/admin/searchCard/SearchCard'
import ClassTable from '../../component/admin/classTable/ClassTable'

export default function HomePage() {
  const status = {
    present: "1243",
    absent: "234"
  }

  const classTable = [
    {
      classname: "BIT",
      sem: '8th',
      section: 'null',
      attendence: false
    },
    {
      classname: "BBA",
      sem: '5th',
      section: 'A',
      attendence: false
    },
    {
      classname: "BBA",
      sem: '1th',
      section: 'B',
      attendence: true
    }
  ]
  return (
    <div className='h-[auto] w-screen bg-slate-200 flex  flex-col items-center py-[50px]'>
      <div className='flex flex-col w-[100%] items-center lg:flex lg:flex-row  lg:justify-center lg:flex-wrap'>
        <div className='w-[80%] my-[10px] lg:w-[40%]'>
          <Calender />
        </div>
        <div className='w-[80%] my-[10px] lg:w-[40%]'>
          <Status status={status} />
        </div>
        <div className='w-[80%] my-[10px] lg:w-[80%]'>
          <SearchCard />
        </div>
      </div>
      {/* table for all classes*/}
      <div className='w-[80%] rounded-[10px] overflow-hidden'>
        <ClassTable classTable={classTable}/>
      </div>
    </div>
  )
}
