import React from 'react'
import data from '../data/data'
import { Link } from 'react-router-dom'
function StudentList() {
  const mapped = data.map((entry) => {
    return <tr key={entry.id}><td>{entry.id}</td><td>{entry.name}</td><td>{entry.Course}</td><td><Link to={`/students/${entry.id}`}><button>View Detail</button></Link></td></tr>
  })
  return (

    <div className='container'>
      <h2>Students List</h2>
      <table border={0}>
        <thead><tr><th>ID</th><th>Name</th><th>Course</th><th></th></tr></thead>
        <tbody>
          {mapped}
        </tbody>
      </table>
    </div>
  )
}
export default StudentList
