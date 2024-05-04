import React from 'react'
import "./MutliStepForm.css"



const Step3 = ({formData}) => {
  console.log(formData)
  return (
    <div className="container">
      <h2>Summary</h2>
<div>
  <p>Name:<span className='summary'>{formData.name}</span> </p>
  <p>Email:<span className='summary'>{formData.email}</span> </p>
  <p>Topic:<span className='summary'>{formData.topic}</span> </p>

</div>
    </div>
  )
}

export default Step3