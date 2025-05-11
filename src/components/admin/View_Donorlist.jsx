import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const View_Donorlist = () => {
  const [showPassword, setShowPassword] = useState({});
  const [showPassword1, setShowPassword1] = useState({});
    const [data, setData] = useState({
        bloodId: '',
        donorname: '',
        contact: '',
        email: '',
        age: '',
        gender: '',
        address: '',
        message: '',
        id:'',
      });
    
      const navigate = useNavigate();
      const { id } = useParams();
    
      useEffect(() => {
        axios.get(`http://localhost:8081/donor/${id}`)
          .then(res => {
            const donor = res.data.Result[0];
            setData(prevData => ({
              ...prevData,
              bloodId: donor.bloodId,
              id: donor.id,
              donorname: donor.donorname,
              contact: donor.contact,
              email: donor.email,
              age: donor.age,
              gender: donor.gender,
              address: donor.address,
              message: donor.message,
              creationdate: donor.creationdate,
            }));
          })
          .catch(err => {
            console.error('Error retrieving donor details:', err);
          });
      }, [id,navigate]);
    
      const handlePrint = () => {
        window.print();
  };
  
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
              <h5 class="card-title">View Donorlist</h5>
                <table class="table table-bordered border-primary">
                <tbody>
                <tr>
                    <th scope="row">Donor Number</th>
                    <td>{data.id}</td>
                    <th scope="row">Donor Name</th>
                    <td>{data.donorname}</td>
                  </tr>
                  <tr>
                    <th scope="row">Mobile Number</th>
                    <td>
                  
                    <div className="contact-field">
                      <span
                        className={`fa ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'} field-icon toggle-password-2 btn btn-primary`}
                        onClick={() => togglePasswordVisibility(data.id)}
                        style={{color:"red"}}></span>
                      {isPasswordVisible ? data.contact : '********'}
                    </div>
                    </td>
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
                    <th scope="row">Gender</th>
                    <td>{data.gender}</td>
                    <th scope="row">Age</th>
                    <td>{data.age}</td>
                  </tr>
                  <tr>
                    <th>Blood Group</th>
                    <td>{data.bloodId}</td>
                    <th>Address</th>
                    <td>{data.address}</td>
                  </tr>
                  <tr>
                    <th>Message</th>
                    <td>{data.message}</td>
                    <th>Posting Date</th>
                    <td>{typeof data.creationdate === 'string' ? data.creationdate.slice(0, 10) : 'Invalid Date'}</td>
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

export default View_Donorlist
