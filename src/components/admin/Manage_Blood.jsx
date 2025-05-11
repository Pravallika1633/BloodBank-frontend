import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Manage_Blood = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchBlood = async () => {
      try {
        const response = await axios.get('http://localhost:8081/manageBlood');
        if (response.data.Status === 'Success') {
          setData(response.data.Result);
        } else {
          alert('Error');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlood();
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this Blood Group?');
    if (confirmed) {
      axios
        .delete(`http://localhost:8081/deleteBlood/${id}`)
        .then((res) => {
          if (res.data.Status === 'Success') {
            setData(data.filter((blood) => blood.id !== id));
          } else {
            alert('Error');
          }
        })
        .catch((err) => console.log(err));
    }
  };

 
  return (
    <div>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Manage Blood Group</h5>
                

                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Blood Group Name</th>
                      <th scope="col">Creation Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((blood, index) => {
                    return (
                      <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{blood.name}</td>
                      <td>{blood.creationdate.slice(0,10)}</td>
                      <td>
                      <Link to={`/edit_blood/${blood.id}`} className="btn btn-primary"><i className="fa fa-edit"></i> </Link>
                      &nbsp;
                      <button onClick={() => handleDelete(blood.id)} className="btn btn-danger">
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

export default Manage_Blood;
