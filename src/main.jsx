import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import TeacherPage from './pages/teacher/TeacherPage.jsx'
import AdminPage from './pages/admin/AdminPage.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import ProfilePage from './pages/admin/ProfilePage.jsx'
import HomePage from './pages/admin/HomePage.jsx'
import FormPage from './pages/admin/FormPage.jsx'
import ClassPage from './pages/admin/ClassPage.jsx'
import CreateClass from './component/admin/forms/CreateClass.jsx'
import AddStudent from './component/admin/forms/AddStudent.jsx'

const router = createBrowserRouter([
  {
    path:'/teacher',
    element:<TeacherPage />
  },
  {
    path:'/admin',
    element:<AdminPage />,
    children:[
      {
        path:'',
        element:<HomePage/>
      },
      {
        path:'profile',
        element:<ProfilePage />
      },
      {
        path:'forms',
        element:<FormPage />,
        children:[
          {
            path:'',
            element:<CreateClass/>
          },
          {
            path:'addstudent',
            element:<AddStudent />
          }
        ]
      },
      {
        path:'classes',
        element:<ClassPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
)
