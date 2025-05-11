import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add_Blood = () => {
  const [data, setData] = useState({
    name: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:8081/addBlood', data);
      alert('Blood Group added successfully');
      navigate('/manage_blood');
    } catch (error) {
      console.log(error);
    }
    navigate('/manage_blood');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <div class="col-lg-10">
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Add Blood Group</h5>

    <form class="row g-3" onSubmit={handleSubmit}>
      <div class="col-12">
        <label for="inputNanme4" class="form-label">Blood Group Name</label>
        <input type="text" class="form-control" name='name' 
            value={data.name}
            onChange={handleInputChange} id="inputNanme4"
            placeholder='Blood Group Name'/>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="reset" class="btn btn-secondary">Reset</button>
      </div>
    </form>
</div>
  </div>
</div>
    </div>
  )
}

export default Add_Blood
