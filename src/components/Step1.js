import React from "react";
import "./MutliStepForm.css";

const Step1 = ({ formData, handleChange }) => {
  return (
    <div className="container">
      <h2>Register</h2>
      <label>
        Name
        
      </label>
      <input
          type="text"
          name="name"
          placeholder="enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      <label>
        Email
        
      </label>
      <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
    </div>
  );
};

export default Step1;
