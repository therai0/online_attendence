import React from 'react'
import ClassNav from '../../component/admin/classes/ClassNav'
import StudentTable from '../../component/admin/classes/StudentTable'
import TableHead from '../../component/admin/classes/TableHead'

export default function ClassPage() {
  const classdetails = {
    faculty: "BIT",
    sem: "3rd",
    section: "null",
  }

  const studentDetails = [
    {
      name: "Sameer Giri",
      rollno: 1,
      lcno:"lc123810380840934",
      stats:"present"
    },
    {
      name: "Bishal Kalfe",
      rollno: 2,
      lcno:"lc12381000840934",
      stats:"absent"
    },
  ]

  return (
    <>
      <div className='w-[100vw] h-[100vh] bg-slate-200'>
        <div className='w-[100%]'>
          <ClassNav classdetails={classdetails} />
        </div>
        <div>
          <TableHead />
          <StudentTable studentDetails={studentDetails}/>
        </div>
      </div>
    </>
  )
}
