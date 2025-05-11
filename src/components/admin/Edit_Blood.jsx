import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit_Blood = () => {
    const [data, setData] = useState({
        name: ''
      });
    
      const navigate = useNavigate();
      const { id } = useParams();
    
      useEffect(() => {
        axios.get(`http://localhost:8081/getBlood/${id}`)
          .then(res => {
            const blood = res.data.Result[0];
            setData(prevData => ({
              ...prevData,
              name: blood.name,
            }));
          })
          .catch(err => console.log(err));
      }, [id]);
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const updatedData = {
          name: data.name,
        };
        axios.put(`http://localhost:8081/updateBlood/${id}`, updatedData)
          .then(res => {
            if (res.data.Status === "Success") {
              navigate('/manage_blood');
              alert("Update successful");
            }
          })
          .catch(err => console.log(err));
      };
    
  return (
    <div>
      <div className="col-lg-10">
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Update Blood Group</h5>

    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-12">
        <label htmlFor="inputNanme4" className="form-label">Blood Group Name</label>
        <input type="text" className="form-control" name='name' 
             id="inputNanme4"
            placeholder='Blood Group Name'autoComplete="off"
            onChange={e => setData(prevData => ({ ...prevData, name: e.target.value }))}
            value={data.name}/>
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

export default Edit_Blood
