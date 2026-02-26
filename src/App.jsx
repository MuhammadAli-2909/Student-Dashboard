import React from 'react'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import StudentList from "./pages/StudentList"
import StudentDetail from "./pages/StudentDetail"
import StudentEdit from "./pages/StudentEdit"
import RootLayout from './layout/RootLayout'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='students'>
          <Route index element={<StudentList />} />
          <Route path=':id' element={<StudentDetail />}>
            <Route path='edit' element={<StudentEdit />} />
          </Route>
        </Route>
        <Route path='about' element={<About />} />
        <Route path='dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='login' element={<Login />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
