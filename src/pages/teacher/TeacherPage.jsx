import React, { useContext } from 'react'
import TableHead from '../../component/teacher/tablehead/TableHead'
import Navbar from '../../component/teacher/navbar/Navbar'
import Table from '../../component/teacher/table/Table'
import Buttom from '../../component/buttom/Buttom'
import UserContext from '../../context/UserContext'

export default function TeacherPage() {
let {stdData} = useContext(UserContext)
    const tableHead = {
        rollno:"RollNo",
        student:"Student Name",
        attendence:"Attendence"
    }

    const navItem = {
        faculty:"BIT",
        sem:"8th",
        section:"A",
        teacher:"Lochan Poudel"
    }

    const studentData = [
        {
            rollno:"1",
            name:"Aysuh Rai",
        },
        {
            rollno:"2",
            name:"Manish Sitoula",
        },
        {
            rollno:"3",
            name:"Bishal Kafle",
        },
        {
            rollno:"4",
            name:"Sameer Giri"
        },
        {
            rollno:"5",
            name:"Jemsih Chuldal"
        },
        {
            rollno:"6",
            name:"Samir Neupane"
        },
        {
            rollno:"7",
            name:"Sirj Oli"
        },
        {
            rollno:"8",
            name:"Ashis Neupane"
        },
        {
            rollno:"9",
            name:"Suman Khadka"
        },
        {
            rollno:"10",
            name:"Adil Rai"
        },
        {
            rollno:"11",
            name:"Aditi Rai"
        },
        {
            rollno:"12",
            name:"Sita Karki"
        },
    ]

    function getallAttendenceData() {
        console.log(stdData)
    }
  return (
    <>
    <div>
        <Navbar navItem={navItem}/>
    </div>
    <div className='h-screen w-full flex bg-gradient-to-t from-[white] to-[#6420AA] justify-center'>
        <div className='w-full  h-auto px-4 mt-[40px]'>
            <TableHead tableHead={tableHead}/>
            <Table student={studentData}/>
            <Buttom submit="Submit" getData={getallAttendenceData}/>
        </div>
    </div>  
    </>
  )
}
