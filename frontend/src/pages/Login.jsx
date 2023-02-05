import React, { useState, useEffect} from "react"
import {FaSignInAlt} from "react-icons/fa"

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const {email, password} = formData;

  function onChange(e){
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  function onSubmit(e){
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Register
        </h1>
        <p>Login and start setting Goals</p>
      </section>

      <section className="from">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="email"
              className="from-control"
              id="email" name="email"
              value={email} placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="password"
              className="from-control"
              id="password" name="password"
              value={password} placeholder="Enter your password"
              onChange={onChange}
            />
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
