import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
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
        <Link className="navbar-brand" to="/About">
          <span>
            About Us
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


  

  <section className="about_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About Us
              </h2>
            </div>
            <p>
            A blood donation occurs when a person voluntarily has blood drawn and used for transfusions and/or made into biopharmaceutical medications by a process called fractionation (separation of whole blood components). Donation may be of whole blood, or of specific components directly (apheresis). Blood banks often participate in the collection process as well as the procedures that follow it.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <div className="stripe_design sd1"></div>
            <div className="stripe_design sd2"></div>
            <div className="stripe_design sd3"></div>
            <div className="stripe_design sd4"></div>
            <div className="stripe_design sd5"></div>
            <div className="stripe_design sd6"></div>
            <img src="images/about-img.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>


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
            <Link className="active" to="/">
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

export default About
