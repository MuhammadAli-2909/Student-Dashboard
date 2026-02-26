import React from 'react'
import back from '../assets/back.svg'
import { useParams, useNavigate, Outlet } from 'react-router-dom'
import data from '../data/data'

function StudentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const student = data.find((s) => s.id === Number(id))

  return (
    <div className='container'>
      <button className='back' onClick={() => navigate('/students')}>
        <img src={back} alt="" width={30} />
      </button>
      <h1>Student Detail</h1>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.Course}</p>
      <button className='edit' onClick={() => navigate(`/students/${id}/edit`)}>
        Edit Student
      </button>
      <Outlet />
    </div>

  )
}

export default StudentDetail