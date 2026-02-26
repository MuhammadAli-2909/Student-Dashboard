import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const adminE = "admin@gmail.com"
  const adminP = "123456"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const submitting = (e) => {
    e.preventDefault()

    if (email === adminE && password === adminP) {
      localStorage.setItem('isAuth', true)
      navigate('/dashboard')
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>

      <form className='login' onSubmit={submitting}>
        <div>
          <label>Email</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className='error'>{error}</p>}

        <center><button type="submit">Login</button></center>
      </form>
    </div>
  )
}

export default Login