import React, { useState } from "react";
import Step1 from "./Step1.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";
import "./MutliStepForm.css";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Form Data:", formData);
    // Save the form data or submit to a server
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} />;
      case 2:
        return <Step2 formData={formData} handleChange={handleChange} />;
      case 3:
        return <Step3 formData={formData}  />;
      default:
        return <Step1 formData={formData} handleChange={handleChange} />;
    }
  };

  return (
    <div className="main-container-wrapper">
    <div className="main-container">
      {renderStep()}

      {/* {currentStep > 1 && (
            <button type="button" onClick={handlePrev}>
              Previous
            </button>
          )} */}
          <div className="button"> 
      {currentStep < 3 && (
        <button type="button" onClick={handleNext}>
          Continue
        </button>
      )}
      {currentStep === 3 && <button type="submit">Confirm</button>}
    </div>
    </div>
    </div>
  );
};

export default MultiStepForm;
