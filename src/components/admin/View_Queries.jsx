import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const View_Queries = () => {
  const [showPassword, setShowPassword] = useState({});
  const [showPassword1, setShowPassword1] = useState({});
    const [data, setData] = useState({
        fullname: '',
        email: '',
        mobile: '',
        message: '',
        status: '', // Add 'status' to the state
      });
    
      const navigate = useNavigate();
      const { id } = useParams();
    
      useEffect(() => {
        axios.get(`http://localhost:8081/getcontact/${id}`)
          .then(res => {
            const contactus = res.data.Result;
            setData({
              fullname: contactus.fullname,
              email: contactus.email,
              mobile: contactus.mobile,
              message: contactus.message,
              status: contactus.status, // Update the status in the state
            });
          })
          .catch(err => console.log(err));
      }, [id]);
    
      const handlePrint = () => {
        window.print();
      };
    
      // You can also update the status here on page load, as we fetched the updated contact from the server
      useEffect(() => {
        if (data.status === 'Read') return;
    
        axios.post(`http://localhost:8081/getcontact/${id}`, { status: 'Read' })
          .then(res => {
            if (res.data.Status === 'Success') {
              setData(prevData => ({
                ...prevData,
                status: 'Read',
              }));
            }
          })
          .catch(err => console.log(err));
      }, [id, data.status]);
    
      const togglePasswordVisibility = (id) => {
        setShowPassword((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };
      const togglePasswordVisibility1 = (id) => {
        setShowPassword1((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };
      const isPasswordVisible = showPassword[data.id];
      const isPasswordVisible1 = showPassword1[data.id];
    
  
  return (
    <div>
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">View Queries</h5>
                <table class="table table-bordered border-primary">
                <tbody>
                 <tr>
                    <th scope="row">Name</th>
                    <td>{data.fullname}</td>
                    <th scope="row">Email</th>
                    <td><div className="contact-field">
                          <span
                            className={`fa ${isPasswordVisible1 ? 'fa-eye-slash' : 'fa-eye'} field-icon toggle-password-2 btn btn-primary`}
                            onClick={() => togglePasswordVisibility1(data.id)}
                          style={{color:"red"}}></span>
                          {isPasswordVisible1 ? data.email : '********'}
                      </div></td>
                 </tr>
                  <tr>
                    <th scope="row">Mobile Number</th>
                    <td><div className="contact-field">
                      <span
                        className={`fa ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'} field-icon toggle-password-2 btn btn-primary`}
                        onClick={() => togglePasswordVisibility(data.id)}
                        style={{color:"red"}}></span>
                      {isPasswordVisible ? data.mobile : '********'}
                    </div></td>
                    <th>Message</th>
                    <td>{data.message}</td>
                  </tr>
                </tbody>
              </table>
              <div className='text-center'>
                <button className="btn btn-primary" onClick={handlePrint}>
                    <i className="fa fa-print"></i> Print
                </button>
                </div>
              </div>
              </div>
    </div>
  )
}

export default View_Queries
