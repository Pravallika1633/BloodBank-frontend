import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Add_Donor = () => {
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
                setError('Failed to fetch Blood. Invalid response.');
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
        navigate('/manage_donorlist');
        alert('Donor added successfully');
    } catch (error) {
        setError('Failed to add Donor.');
        console.log(error);
    }
};

  return (
    <div>
      <div className="col-lg-10">

<div className="card">
  <div className="card-body">
    <h5 className="card-title">Add Donor</h5>

    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-12">
        <label htmlFor="inputNanme4" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="inputNanme4"
        name='donorname' 
        value={data.donorname}
        onChange={(e) => setData({ ...data, donorname: e.target.value })} 
        placeholder='Enter Name'/>
      </div>
      <div className="col-12">
        <label htmlFor="inputNanme4" className="form-label">Contact Number</label>
        <input type="text" className="form-control" id="inputNanme4"
        name='contact' 
        value={data.contact}
        onChange={(e) => setData({ ...data, contact: e.target.value })}
        placeholder='Enter Contact Number'/>
      </div>
      <div className="col-12">
        <label htmlFor="inputNanme4" className="form-label">Email ID</label>
        <input type="text" className="form-control" id="inputNanme4" 
        name='email'
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        placeholder='Enter Email'/>
      </div>
      <div className="col-12">
        <label htmlFor="inputNanme4" className="form-label">Age</label>
        <input type="text" className="form-control" id="inputNanme4" 
        name='age'
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
        placeholder='Enter Age'/>
      </div>
      <div className="col-12">
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
    <div className="col-12 ">
        <label htmlFor="inputNanme4" className="form-label">Blood Group</label>
        <select
            className="form-control"
            id="inputDoctor"
            value={data.bloodId}
            onChange={(e) => setData({ ...data, bloodId: e.target.value })}
        >
            <option value="">Select Blood</option>
            {myBlood.map((blood) => (
                <option key={blood.name} value={blood.name}>
                    {blood.name}
                </option>
            ))}
        </select>
    </div>
    <div className="col-12 ">
        <label htmlFor="inputNanme4" className="form-label">Address</label>
        <div className="col-sm-12">
            <textarea type="text" className="form-control" name="address" 
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            placeholder="Enter Address"/>
        </div>
    </div>
    <div className="col-12">
        <label htmlFor="inputNanme4" className="form-label">Message</label>
        <div className="col-sm-12">
            <textarea type="text" className="form-control" 
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            name="message" placeholder="Enter Message"/>
        </div>
    </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-secondary">Reset</button>
      </div>
    </form>
</div>
  </div>
</div>
    </div>
  )
}

export default Add_Donor
