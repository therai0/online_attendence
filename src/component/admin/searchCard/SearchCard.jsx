import React, { useState } from 'react'

export default function SearchCard() {
    const [stdName, setStdName] = useState('');
    const [stdData, setStdData] = useState(`Search the name of student and get the all the information about the student here.`);

    function searchStudent(e) {
        e.preventDefault();
    }
    return (
        <>
            <div className='h-[auto] w-[100%] bg-white rounded-[10px] flex flex-col justify-center p-[30px]'>
                <form action="" className='w-[100%]'>
                    <input
                        type="text"
                        name='stdName'
                        className='border border-black-400 h-[30px] rounded-[5px] w-[80%] px-[3px] '
                        value={stdName}
                        onChange={e => setStdName(e.target.value)}
                        placeholder='student name'
                        required />
                    <button type='submit'
                        onClick={searchStudent}
                        className='ml-[10px]'>search</button>
                </form>
                <div className='py-[20px]'>
                    {stdData}
                </div>
            </div>
        </>
    )
}
