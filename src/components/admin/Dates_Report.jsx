import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dates_Report = () => {
  const [showPassword, setShowPassword] = useState({});
  const [showPassword1, setShowPassword1] = useState({});

  const [todate, setToDate] = useState("");
  const [fromdate, setFromDate] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8081/dates_report", {
        fromdate: fromdate,
        todate: todate,
      });

      setData(response.data);

      if (response.data.length === 0) {
        setData2([{ id: 1 }]); // Add a placeholder object to data2
      } else {
        setData2([]); // Clear data2 if data is found
      }
    } catch (error) {
      console.error("Error searching donor:", error);
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
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Between Dates Report</h5>

            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12">
                <label htmlFor="inputFromDate" className="form-label">
                  From Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputFromDate"
                  name="fromdate"
                  autoComplete="off"
                  required
                  value={fromdate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputToDate" className="form-label">
                  To Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputToDate"
                  name="todate"
                  autoComplete="off"
                  required
                  value={todate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
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
                                      isPasswordVisible
                                        ? "fa-eye-slash"
                                        : "fa-eye"
                                    } field-icon toggle-password-2 btn btn-primary`}
                                    onClick={() =>
                                      togglePasswordVisibility(donor.id)
                                    }
                                  ></span>
                                  {isPasswordVisible
                                    ? donor.contact
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
                                      togglePasswordVisibility1(donor.id)
                                    }
                                  ></span>
                                  {isPasswordVisible1
                                    ? donor.email
                                    : "********"}
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

export default Dates_Report;
