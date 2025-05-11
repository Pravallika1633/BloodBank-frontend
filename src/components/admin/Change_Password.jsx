import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Change_Password = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const changePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    axios
      .put(
        "http://localhost:8081/changePassword",
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
        }
      )
      .then((response) => {
        alert("Password changed successfully!");
        navigate('/index'); // Replace '/' with the desired route after password change
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          alert(`Error: ${error.response.data.error}`);
        } else {
          console.error("Error:", error.message);
        }
      });
  }; 

  return (
    <div>
       <div class="col-lg-10">
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Change Password</h5>

    <form class="row g-3">
      <div class="col-12">
        <label for="inputNanme4" class="form-label">Current Password</label>
        <input type="password" class="form-control" name='name' 
            id="inputNanme4"
            placeholder='Current Password'
            autoComplete="off"
            value={currentPassword}
            onChange={(event) => {
              setCurrentPassword(event.target.value);
            }}
            />
      </div>
      <div class="col-12">
        <label for="inputNanme4" class="form-label">New Password</label>
        <input type="password" class="form-control" name='name' 
            autoComplete="off"
             value={newPassword}
             onChange={(event) => {
               setNewPassword(event.target.value);
             }}
              id="inputNanme4"
            placeholder='New Password'/>
      </div>
      <div class="col-12">
        <label for="inputNanme4" class="form-label">Confirm Password</label>
        <input type="password" class="form-control" name='name' 
            autoComplete="off"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
             id="inputNanme4"
            placeholder='Confirm Password'/>
      </div>
      <div class="text-center">
        <button type="submit" onClick={changePassword} class="btn btn-primary">ChangePassword</button>
      </div>
    </form>
</div>
  </div>
</div>
    </div>
  )
}

export default Change_Password
