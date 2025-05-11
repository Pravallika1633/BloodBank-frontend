import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
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
            <Link className="navbar-brand" to="index.html">
              <span>Seomark</span>
            </Link>
            <div className="user_option">
              <br />
              <Link to="/login">
                <i className="fa fa-user" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="name_style">
              <h6>
                Blood
                <span style={{ marginTop: "25px" }}></span>
                <span>D</span>
                <span>o</span>
                <span>n</span>
                <span>a</span>
                <span>t</span>
                <span>i</span>
                <span>o</span>
                <span>n</span>
              </h6>
            </div>
          </nav>
        </header>

        <section className="slider_section position-relative">
          <div className="box">
            <div className="detail-box">
              <h4>
                <span>Blood Bank And</span>
                <br />
                <span>Donor MGMT System</span>
              </h4>
              <div
                className="carousel slide slider_text_carousel"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="heading_box">
                      <h1>
                        <span>Give</span>
                        <span>The</span>
                        <span>Gift</span>
                        <span>Of</span>
                        <span>Blood</span>
                      </h1>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="heading_box">
                      <h1>
                        <span>Save</span>
                        <span>A</span>
                        <span>Life</span>
                        <span>Give</span>
                        <span>Blood</span>
                      </h1>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="heading_box">
                      <h1>
                        <span>Help</span>
                        <span>Save</span>
                        <span>Lives</span>
                        <span>Donate</span>
                        <span>Blood</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-box">
              <div
                className="carousel slide slider_image_carousel carousel-fade"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="images/slider-img.jpg"
                      style={{ height: "465px" }}
                      alt=""
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/slider-img2.jpg"
                      style={{ height: "465px" }}
                      alt=""
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/slider-img3.jpg"
                      style={{ height: "465px" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr />
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
                Copyright &copy; <span id="displayYear">2023 </span> Blood Bank
                & Donor Management System
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
