import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchBlood = () => {
  const [showPassword, setShowPassword] = useState({});
  const [showPassword1, setShowPassword1] = useState({});

  const openNav = () => {
    document.getElementById("myNav").classList.add("menu_width");
    document.querySelector(".menu_btn-style").style.display = "block";
  };

  const closeNav = () => {
    document.getElementById("myNav").classList.remove("menu_width");
    document.querySelector(".menu_btn-style").style.display = "none";
  };

  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8081/SearchBlood?address=${address}`
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
      <div className="sub_page">
        <div className="hero_area">
          <header className="header_section">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <div className="custom_menu-btn">
                <button onClick={openNav}>
                  <span className="s-1"> </span>
                  <span className="s-2"> </span>
                  <span className="s-3"> </span>
                </button>
              </div>
              <div id="myNav" className="overlay">
                <div className="menu_btn-style">
                  <button onClick={closeNav}>
                    <span className="s-1"> </span>
                    <span className="s-2"> </span>
                    <span className="s-3"> </span>
                  </button>
                </div>
                <div className="overlay-content">
                  <Link className="active" to="/">
                    Home
                  </Link>
                  <Link className="" to="/About">
                    About
                  </Link>
                  <Link className="" to="/SearchBlood">
                    Search Blood
                  </Link>
                  <Link className="" to="/BecomeDonor">
                    Become A Donor
                  </Link>
                  <Link className="" to="/contact">
                    Contact Us
                  </Link>
                </div>
              </div>
              <Link className="navbar-brand" to="/SearchBlood">
                <span>Search Blood</span>
              </Link>
              <div className="user_option">
                <Link to="/login">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </Link>
              </div>
              <div className="name_style">
                <h6>S e o M a r k e t i n g</h6>
              </div>
            </nav>
          </header>
        </div>
        <section className="contact_section layout_padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-10 border offset-md-3 offset-lg-1">
                <br />
                <div className="form_container">
                  <div className="heading_container">
                    <h2>Search Donor</h2>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Search by Location/Blood Group"/>
                    </div>
                    <div className="d-flex ">
                      <button>Search</button>
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
                                <th scope="col">Address</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((donor, index) => {
                                const isPasswordVisible =
                                  showPassword[donor.id];
                                const isPasswordVisible1 =
                                  showPassword1[donor.id];
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
                                   <td>{donor.creationdate ? donor.creationdate.slice(0, 10) : "N/A"}</td>
                                    <td>{donor.address}</td>
                                    {/* Added the missing <td> for Address */}
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
                <br />
              </div>
            </div>
          </div>
        </section>

        <section className="info_section layout_padding2">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="info_contact">
                  <h4>Address</h4>
                  <div className="contact_link_box">
                    <Link to="">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span>Location</span>
                    </Link>
                    <Link to="">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span>Call +01 1234567890</span>
                    </Link>
                    <Link to="">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span>demo@gmail.com</span>
                    </Link>
                  </div>
                </div>
                <div className="info_social">
                  <Link to="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                  <Link to="">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                  <Link to="">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </Link>
                  <Link to="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info_link_box">
                  <h4>Links</h4>
                  <div className="info_links">
                    <Link className="active" to="index.html">
                      <img src="images/nav-bullet.png" alt="" />
                      Home
                    </Link>
                    <Link className="" to="/About">
                      <img src="images/nav-bullet.png" alt="" />
                      About
                    </Link>
                    <Link className="" to="/SearchBlood">
                      <img src="images/nav-bullet.png" alt="" />
                      Search Blood
                    </Link>
                    <Link className="" to="/BecomeDonor">
                      <img src="images/nav-bullet.png" alt="" />
                      Become A Donor
                    </Link>
                    <Link className="" to="/contact">
                      <img src="images/nav-bullet.png" alt="" />
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info_detail">
                  <h4>Info</h4>
                  <p>
                    necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 Latin words,
                    combined with a handful
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Subscribe</h4>
                <form action="#">
                  <input type="text" placeholder="Enter email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer_section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <p>
                  Copyright &copy; <span id="displayYear">2023 </span> Blood
                  Bank & Donor Management System
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SearchBlood;
