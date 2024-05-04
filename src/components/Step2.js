import React, { useState } from "react";
import "./MutliStepForm.css";

const Step2 = ({ formData, handleChange }) => {
  const [selectedOption, setSelectedOption] = useState(formData.topic);

  const handleOptionChange = (e) => {
    const value = e.target.value;

    setSelectedOption(value);

    handleChange({
      target: {
        name: "topic",
        value: value,
      },
    });
  };
  // console.log("Updated formData:", formData);

  return (
    <div className="container">
      <h2>Which topics you are interested in?</h2>
      <label className={`radio-input ${selectedOption === "SoftwareDevelopment" ? 'radio-checked' : ''}`}>
        <input
          className="radio-input-select"

          type="radio"
          value="Software Development"
          name="topic"
          checked={selectedOption === "SoftwareDevelopment"}
          onChange={handleOptionChange}
        />
        <span> Software Development</span>
      </label>
      <label className={`radio-input ${selectedOption === "UserExperience" ? 'radio-checked' : ''}`}>
        <input
          className="radio-input-select"
          type="radio"
          value="User Experience"
          name="topic"
          checked={selectedOption === "UserExperience"}
          onChange={handleOptionChange}
        />
        <span> User Experience</span>
      </label>
      <label className={`radio-input ${selectedOption === "GraphicDesign" ? 'radio-checked' : ''}`}>
        <input
          className="radio-input-select"

          type="radio"
          value="Graphic Design"
          name="topic"
          checked={selectedOption === "GraphicDesign"}
          onChange={handleOptionChange}
        />
        <span> Graphic Design</span>
      </label>
    </div>
  );
};

export default Step2;
