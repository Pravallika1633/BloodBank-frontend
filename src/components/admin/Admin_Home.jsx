import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admin_Home = () => {

  const [readCount, setReadCount] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);
  const [donorCount, setDonorCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8081/unread')
      .then(res => {
        setUnreadCount(res.data.count);
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:8081/read')
      .then(res => {
        setReadCount(res.data.count);
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:8081/donorCount')
        .then(res => {
            setDonorCount(res.data[0].donor)
        }).catch(err => console.log(err));

  }, []);

  return (
    <div>
       <section className="section dashboard">
      <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-xxl-4 col-md-4">
          <Link to="/unread_queries">
            <div className="card info-card sales-card">
              <div className="card-body">
                <h5 className="card-title">Total Unread <span>| Queries</span></h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="fa fa-book"></i>
                  </div>
                  <div className="ps-3">
                    <h6>{unreadCount}</h6>
                    
                  </div>
                </div>
              </div>

            </div>
            </Link>
          </div>
          <div className="col-xxl-4 col-md-4">
          <Link to="/read_queries">
            <div className="card info-card revenue-card">

              <div className="card-body">
                <h5 className="card-title">Total Read <span>| Queries</span></h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-book"></i>
                  </div>
                  <div className="ps-3">
                    <h6>{readCount}</h6>
                    
                  </div>
                </div>
              </div>
            </div>
            </Link>
            </div>
            <div className="col-xxl-4 col-md-4">
            <Link to="/manage_donorlist">
            <div className="card info-card revenue-card">

              <div className="card-body">
                <h5 className="card-title">Total | Donors</h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="ps-3">
                    <h6>{donorCount}</h6>
                    
                  </div>
                </div>
              </div>

            </div>
            </Link>
          </div>
          </div>
          </div>
</div>
  </section>

    </div>
  )
}

export default Admin_Home
