import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Manage_Donorlist = () => {
  const [showPassword, setShowPassword] = useState({});
  const [showPassword1, setShowPassword1] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/manage_donorlist")
      .then((res) => {
        if (res.data.Status === "Success") {
          const donor = res.data.Result;
          const initialShowPasswordState = donor.reduce((state, donor) => {
            return {
              ...state,
              [donor.id]: false,
            };
          }, {});
          setShowPassword(initialShowPasswordState);
          setData(donor);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this donor?"
    );
    if (confirmed) {
      axios
        .delete(`http://localhost:8081/deleteDonor/${id}`)
        .then((res) => {
          if (res.data.Status === "Success") {
            setData(data.filter((donor) => donor.id !== id));
          } else {
            alert("Error");
          }
        })
        .catch((err) => console.log(err));
    }
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

  return (
    <div>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Manage Donor List</h5>

                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Donor ID</th>
                      <th scope="col">Full Name</th>
                      <th scope="col">Mobile Number</th>
                      <th scope="col">Email</th>
                      <th scope="col">Blood Group</th>
                      <th scope="col">Posting Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((donor, index) => {
                      const isPasswordVisible = showPassword[donor.id];
                      const isPasswordVisible1 = showPassword1[donor.id];
                      return (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>{donor.id}</td>
                          <td>{donor.donorname}</td>
                          <td>
                            <div className="contact-field">
                              <span
                                className={`fa ${
                                  isPasswordVisible ? "fa-eye-slash" : "fa-eye"
                                } field-icon toggle-password-2 btn btn-primary`}
                                onClick={() =>
                                  togglePasswordVisibility(donor.id)
                                }
                              ></span>
                              {isPasswordVisible ? donor.contact : "********"}
                            </div>
                          </td>

                          <td>
                            <div className="contact-field">
                              <span
                                className={`fa ${
                                  isPasswordVisible1 ? "fa-eye-slash" : "fa-eye"
                                } field-icon toggle-password-2 btn btn-primary`}
                                onClick={() =>
                                  togglePasswordVisibility1(donor.id)
                                }
                              ></span>
                              {isPasswordVisible1 ? donor.email : "********"}
                            </div>
                          </td>
                          <td>{donor.bloodId}</td>
                          <td>{donor.creationdate.slice(0, 10)}</td>
                          <td>
                            <Link
                              to={`/view_donorlist/${donor.id}`}
                              className="btn btn-primary"
                            >
                              <i className="fa fa-eye"></i>
                            </Link>{" "}
                            &nbsp;
                            <button
                              onClick={() => handleDelete(donor.id)}
                              className="btn btn-danger"
                            >
                              <i className="fa fa-trash"></i>
                            </button>
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
  );
};

export default Manage_Donorlist;
