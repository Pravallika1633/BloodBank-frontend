import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Donor_Search = () => {
  const [showPassword, setShowPassword] = useState({});
  const [showPassword1, setShowPassword1] = useState({});

  const [donorname, setDonorname] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
 
    try {
      const response = await axios.get(
        `http://localhost:8081/donor_search?donorname=${donorname}`
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
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Search Donor</h5>

            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12">
                <label htmlFor="inputName4" className="form-label">
                  Search by Donor ID/Name/Contact No.
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={donorname}
                  onChange={(e) => setDonorname(e.target.value)}
                  id="inputName4"
                  placeholder="Enter Donor ID/Name/Contact No"
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

export default Donor_Search;
