import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BecomeDonor = () => {

  const [data, setData] = useState({
    bloodId: '',
    donorname: '',
    contact: '',
    email: '',
    age: '',
    gender: '',
    address: '',
    message: '',
});

const [myBlood, setMyBlood] = useState([]);
const navigate = useNavigate();
const [error, setError] = useState('');

useEffect(() => {
    // Fetch doctors and patients data
    const fetchBlood = async () => {
        try {
            const response = await axios.get('http://localhost:8081/getBloods');
            if (Array.isArray(response.data)) {
                setMyBlood(response.data);
            } else {
                setError('Failed to fetch Blood Group. Invalid response.');
            }
        } catch (error) {
            setError('Failed to fetch Donor.');
            console.log(error);
        }
    };

    fetchBlood();
}, []);

const handleSubmit = async (event) => {
    event.preventDefault();

    if (!data.bloodId ||
        !data.donorname ||
        !data.contact ||
        !data.email ||
        !data.age ||
        !data.gender ||
        !data.address ||
        !data.message) {
        setError('Please fill in all fields.');
        return;
    }

    try {
        await axios.post('http://localhost:8081/add_donor', data);
        navigate('/BecomeDonor');
        alert('Donor added successfully');
    } catch (error) {
        setError('Failed to add Donor.');
        console.log(error);
    }
};

    const openNav = () => {
        document.getElementById("myNav").classList.add("menu_width");
        document.querySelector(".menu_btn-style").style.display = "block";
    };
      
    const closeNav = () => {
        document.getElementById("myNav").classList.remove("menu_width");
        document.querySelector(".menu_btn-style").style.display = "none";
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
        <Link className="navbar-brand" to="/BecomeDonor">
          <span>
            Become A Donor
          </span>
        </Link>
        <div className="user_option">
          <Link to="/login">
            <i className="fa fa-user" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="name_style">
          <h6>
            S
            e
            o
            M
            a
            r
            k
            e
            t
            i
            n
            g
          </h6>
        </div>
      </nav>
    </header>
  </div>


  <section className="client_section">
    <div className="container" style={{height:"100px"}}>
      <br/>
      <div className="heading_container">
        <h2>
        Blood Donor Fill the Form
        </h2>
      </div>
    </div>
  </section>
    <div class="content-wrapper" style={{marginLeft:"260px"}}>
    <div class="container">
        <div class="row">
          <div class="col-lg-8">
          <br/>
            <div class="card">
              <div class="card-header border-0">
                <h5 class="card-title">Become Donor</h5>
              </div>
                <hr/>
              <div class="card-block" style={{marginLeft:"50px"}}>
              <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-10">
                <label htmlFor="inputNanme4" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="inputNanme4"
                name='donorname' 
                value={data.donorname}
                onChange={(e) => setData({ ...data, donorname: e.target.value })} 
                placeholder='Enter Name'/>
              </div>
              <div className="col-10">
                <label htmlFor="inputNanme4" className="form-label">Contact Number</label>
                <input type="text" className="form-control" id="inputNanme4"
                name='contact' 
                value={data.contact}
                onChange={(e) => setData({ ...data, contact: e.target.value })}
                placeholder='Enter Contact Number'/>
              </div>
              <div className="col-10">
                <label htmlFor="inputNanme4" className="form-label">Email ID</label>
                <input type="text" className="form-control" id="inputNanme4" 
                name='email'
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder='Enter Email'/>
              </div>
              <div className="col-10">
                <label htmlFor="inputNanme4" className="form-label">Age</label>
                <input type="text" className="form-control" id="inputNanme4" 
                name='age'
                value={data.age}
                onChange={(e) => setData({ ...data, age: e.target.value })}
                placeholder='Enter Age'/>
              </div>
              <div className="col-10">
                <label className="form-label">Gender</label>
                <div style={{ marginLeft: "15px" }}>
                  <label htmlFor="femaleRadio">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      id="femaleRadio"
                      checked={data.gender === "Female"}
                      onChange={(e) => setData({ ...data, gender: e.target.value })}
                    /> Female
                  </label>&nbsp;
                  <label htmlFor="maleRadio">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      id="maleRadio"
                      checked={data.gender === "Male"}
                      onChange={(e) => setData({ ...data, gender: e.target.value })}
                    /> Male
                  </label>
                </div>
              </div>
            <div className="col-10 ">
                <label htmlFor="inputNanme4" className="form-label">Blood Group</label>
                <select
                    className="form-control"
                    id="inputDoctor"
                    value={data.bloodId}
                    onChange={(e) => setData({ ...data, bloodId: e.target.value })}
                >
                    <option value="">Select Blood Group</option>
                    {myBlood.map((blood) => (
                        <option key={blood.name} value={blood.name}>
                            {blood.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-10">
                <label htmlFor="inputNanme4" className="form-label">Address</label>
                <div className="col-sm-12">
                    <textarea type="text" className="form-control" name="address" 
                    value={data.address}
                    onChange={(e) => setData({ ...data, address: e.target.value })}
                    placeholder="Enter Address"/>
                </div>
            </div>
            <div className="col-10">
                <label htmlFor="inputNanme4" className="form-label">Message</label>
                <div className="col-sm-12">
                    <textarea type="text" className="form-control" 
                    value={data.message}
                    onChange={(e) => setData({ ...data, message: e.target.value })}
                    name="message" placeholder="Enter Message"/>
                </div>
            </div>
            <div align="center">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </form>
              </div>
              <br/>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </div>

  <section className="info_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="info_contact">
            <h4>
              Address
            </h4>
            <div className="contact_link_box">
              <Link to="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </Link>
              <Link to="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </Link>
              <Link to="">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  demo@gmail.com
                </span>
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
            <h4>
              Info
            </h4>
            <p>
              necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <h4>
            Subscribe
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
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
          Copyright &copy; <span id="displayYear">2023 </span> Blood Bank & Donor Management System
        </p>
        </div>
      </div>
    </div>
  </footer>
  </div>
    </div>
  )
}

export default BecomeDonor
