import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeacherPage from './pages/teacher/TeacherPage'
import UserContextProvider from './context/UserContextProvider'

function App() {
 

  return (
   <>
   <UserContextProvider>
   <TeacherPage />
   </UserContextProvider>
   </>
  )
}

export default App
