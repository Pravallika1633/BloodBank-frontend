import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [values, setValues] = useState({
    username: '',
    password: ''
})
const navigate = useNavigate()
axios.defaults.withCredentials = true;
const [ error, setError] = useState('')

const hendleSubmit =(event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/adminlogin', values)
    .then(res => {
        if(res.data.Status === 'Success') {
            navigate('/');
            alert("Login Successfull")
        } else {
            setError(res.data.Error);
            alert("Invalid User")
        }
    })
    .catch(err => console.log(err));
}

  return (
    <div>
      <div>
<section className="info_section layout_padding2">
  <br/>
  <br/>
  <br/>
  <br/>
    <div style={{content:"center"}} className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-lg-4 offset-md-1 offset-lg-4">
          <div className="form_container">
            <div className="heading_container text-center">
              <h2>
                Login
              </h2>
            </div>
            <hr/>
            <form onSubmit={hendleSubmit}>
            
              <div>
                <input type="text" name='username' onChange={e => setValues({...values, username: e.target.value})} placeholder="Username" />
              </div>
              
              <div>
                <input type="password" name='password' onChange={e => setValues({...values, password: e.target.value})} placeholder="Password" />
              </div>
              <br/>
              <div className="primary ">
                <button>
                  Login
                </button>
              </div>
              <br/>
              <div className="text-center">
                <Link to="/" style={{color:"yellow"}}><i className='fa fa-home' style={{marginRight:"15px"}}></i>    
                  Back to Home
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6  px-0">
          <div className="map_container">
            <div className="map">
              <div id="googleMap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  </section>
</div>
    </div>
  )
}

export default Login

