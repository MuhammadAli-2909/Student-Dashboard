import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../data/data'

function StudentEdit() {
  const { id } = useParams()
  const navigate = useNavigate()

  const student = data.find(s => s.id === Number(id))

  const [name, setName] = useState(student.name)
  const [course, setCourse] = useState(student.Course)

  const submitting = (e) => {
    e.preventDefault()
    student.name = name
    student.Course = course
    navigate(`/students/${id}`)
  }

  return (
    <div className="front">
      <h2>Edit Student</h2>

      <form onSubmit={submitting}>
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Course</label>
          <input
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        <div className="actions">
          <button type="submit">💾 Save</button>
          <button type="button" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default StudentEdit