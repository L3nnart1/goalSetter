import React, { useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { register, reset } from "../features/auth/authSlice"
import { FaUser } from "react-icons/fa"
import Spinner from "../components/Spinner"

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  })

  const {name, email, password, password2} = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message);
    }
    if (isSuccess || user){
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch])

  function onChange(e){
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  function onSubmit(e){
    e.preventDefault()

    if(password !== password2){
      toast.error("Passwords do not match")
    } else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="from">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text"
              className="from-control"
              id="name" name="name"
              value={name} placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
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
          <div className="form-group">
            <input 
              type="password"
              className="from-control"
              id="password2" name="password2"
              value={password2} placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="from-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register