import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search_Contact = () => {
  const [showPassword, setShowPassword] = useState({});
  const [showPassword1, setShowPassword1] = useState({});

  const [fullname, setFullname] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8081/contact_search?fullname=${fullname}`
      );
      setData(response.data.Result);

      // Check if data is empty and display appropriate message
      if (response.data.Result.length === 0) {
        setData2([{ id: 1 }]); // Add a placeholder object to data2
      } else {
        setData2([]); // Clear data2 if data is found
      }
    } catch (error) {
      console.log(error);
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
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Search User Queries</h5>

            <form class="row g-3" onSubmit={handleSubmit}>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">
                  Search by Name/Mobile No.
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  id="inputNanme4"
                  placeholder="Enter Name/Mobile No."
                />
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {data.length > 0 && (
            <section className="section">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-body">
                    <h5 className="card-title">Search User Queries</h5>
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
                                    className={`fa ${
                                      isPasswordVisible
                                        ? "fa-eye-slash"
                                        : "fa-eye"
                                    } field-icon toggle-password-2 btn btn-primary`}
                                    onClick={() =>
                                      togglePasswordVisibility(contactus.id)
                                    }
                                  ></span>
                                  {isPasswordVisible
                                    ? contactus.mobile
                                    : "********"}
                                </div>
                              </td>

                              <td>
                                <div className="contact-field">
                                  <span
                                    className={`fa ${
                                      isPasswordVisible1
                                        ? "fa-eye-slash"
                                        : "fa-eye"
                                    } field-icon toggle-password-2 btn btn-primary`}
                                    onClick={() =>
                                      togglePasswordVisibility1(contactus.id)
                                    }
                                  ></span>
                                  {isPasswordVisible1
                                    ? contactus.email
                                    : "********"}
                                </div>
                              </td>
                              {contactus.status === 'Read' ? (
                                <td style={{ color: "blue" }}>{contactus.status}</td>
                                ) : (
                                <td style={{ color: "red" }}>{contactus.status}</td>
                              )}
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
            </section>
          )}
          {data2.length > 0 && (
            <div className="container-fluid">
              <div className="text-center">
                <h2>No data found</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search_Contact;
