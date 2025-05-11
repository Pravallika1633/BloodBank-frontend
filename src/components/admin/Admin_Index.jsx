import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import React, { useEffect} from 'react'

const Admin_Index = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
      axios.get('http://localhost:8081/dashboard')
      .then(res => {
          if(res.data.Status === "Success") {
              if(res.data.role === "admin") {
                  navigate('/');
              } else {
                  navigate('/index')
              }
          } else {
              navigate('/index')
          }
      })
  }, [])

  const handleLogout = () => {
      axios.get('http://localhost:8081/logout')
      .then(res => {
          navigate('/index')
          alert("Logout Successfully")
      }).catch(err => console.log(err));
  }
  
    const handleToggleSidebar = () => {
        document.body.classList.toggle('toggle-sidebar');
      };

  return (

<div>
<header id="header" className="header fixed-top d-flex align-items-center">

<div className="d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" />
        <span className="d-none d-lg-block">BBDMS</span>
      </Link>
      <i className="bi bi-list toggle-sidebar-btn" onClick={handleToggleSidebar}></i>
    </div>

  <nav className="header-nav ms-auto">
    <ul className="d-flex align-items-center">
      <li className="nav-item dropdown pe-3">

        <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
          <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"/>
          <span className="d-none d-md-block dropdown-toggle ps-2"></span>
        </Link>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <li className="dropdown-header">
            <h6>Account Settings</h6>
          </li>
          <li>
            <hr className="dropdown-divider"/>
          </li>
          <li>
            <hr className="dropdown-divider"/>
          </li>

          <li>
            <Link className="dropdown-item d-flex align-items-center" to="/change_password">
              <i className="bi bi-gear"></i>
              <span>Change Password</span>
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider"/>
          </li>
          <li>
            <hr className="dropdown-divider"/>
          </li>

          <li>
            <Link className="dropdown-item d-flex align-items-center" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right"></i>
              <span>Sign Out</span>
            </Link>
          </li>

        </ul>
      </li>

    </ul>
  </nav>

</header>
<aside id="sidebar" className="sidebar">

  <ul className="sidebar-nav" id="sidebar-nav">

    <li className="nav-item">
      <Link className="nav-link " to="/">
        <i className="bi bi-grid"></i>
        <span>Dashboard</span>
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="#">
        <i className="bi bi-menu-button-wide"></i><span>Blood Group</span><i className="bi bi-chevron-down ms-auto"></i>
      </Link>
      <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <Link to="/add_blood">
            <i className="bi bi-circle"></i><span>Add Blood Group</span>
          </Link>
        </li>
        <li>
          <Link to="/manage_blood">
            <i className="bi bi-circle"></i><span>Manage Blood Group</span>
          </Link>
        </li>
      </ul>
    </li>

    <li className="nav-item">
      <Link className="nav-link collapsed" to="/add_donor">
        <i className="bi bi-journal-text"></i><span>Add Donor</span>
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link collapsed" to="/manage_donorlist">
        <i className="bi bi-layout-text-window-reverse"></i><span>Donor List</span>
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" to="#">
        <i className="bi bi-telephone"></i><span>Contact Us Queries</span><i className="bi bi-chevron-down ms-auto"></i>
      </Link>
      <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <Link to="/unread_queries">
            <i className="bi bi-circle"></i><span>Unread Queries</span>
          </Link>
        </li>
        <li>
          <Link to="/read_queries">
            <i className="bi bi-circle"></i><span>Read Queries</span>
          </Link>
        </li>
      </ul>
    </li>

    <li className="nav-item">
      <Link className="nav-link collapsed" to="/dates_report">
        <i className="bi bi-file-earmark-richtext"></i><span>B/W Dates Report</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link collapsed" data-bs-target="#charts-nav1" data-bs-toggle="collapse" to="#">
        <i className="bi bi-search"></i><span>Search</span><i className="bi bi-chevron-down ms-auto"></i>
      </Link>
      <ul id="charts-nav1" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <Link to="/search_contact">
            <i className="bi bi-circle"></i><span>Contact Search</span>
          </Link>
        </li>
        <li>
          <Link to="/donor_search">
            <i className="bi bi-circle"></i><span>Donor Search</span>
          </Link>
        </li>
      </ul>
    </li>
  </ul>

</aside>

<main id="main" className="main">

  <div className="pagetitle">
    <h1>Dashboard</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>
    </nav>
  </div>

 <Outlet/>
</main>

    </div>
  )
}

export default Admin_Index
