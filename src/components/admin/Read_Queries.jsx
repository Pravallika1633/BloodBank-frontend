import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Read_Queries = () => {
  const [showPassword, setShowPassword] = useState({});
  const [showPassword1, setShowPassword1] = useState({});
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8081/unread_queries?action=Read')
      .then(res => {
        if (res.data.Status === "Success") {
          const contactus = res.data.Result;
          const initialShowPasswordState = contactus.reduce((state, contactus) => {
            return {
              ...state,
              [contactus.id]: false
            };
          }, {});
          setShowPassword(initialShowPasswordState);
          setData(contactus);
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  }, []);

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

  return (
    <div>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Read Queries</h5>
                
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Mobile Number</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Send Massage Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((contactus, index) => {
                        const isPasswordVisible = showPassword[contactus.id];
                        const isPasswordVisible1 = showPassword1[contactus.id];
                    return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{contactus.fullname}</td>
                      <td>
                        <div className="contact-field">
                        <span
                          className={`fa ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'} field-icon toggle-password-2 btn btn-primary`}
                          onClick={() => togglePasswordVisibility(contactus.id)}
                        ></span>
                        {isPasswordVisible ? contactus.mobile : '********'}
                      </div>
                    </td>

                    <td>
                      <div className="contact-field">
                        <span
                          className={`fa ${isPasswordVisible1 ? 'fa-eye-slash' : 'fa-eye'} field-icon toggle-password-2 btn btn-primary`}
                          onClick={() => togglePasswordVisibility1(contactus.id)}
                        ></span>
                        {isPasswordVisible1 ? contactus.email : '********'}
                      </div>
                    </td>
                      <td style={{color:"blue"}}>{contactus.status}</td>
                      <td>{contactus.creationdate.slice(0,10)}</td>
                      <td>
                        <Link
                          to={`/view_queries/${contactus.id}`}
                          className="btn btn-primary">
                          <i className="fa fa-eye"></i> 
                        </Link>
                      </td>
                    </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Read_Queries
