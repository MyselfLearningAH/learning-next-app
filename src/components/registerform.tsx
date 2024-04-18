"use client"

import { useState } from "react";
import Button from "./Button";

const RegisterForm = () => {

  const intitialformdata : any = {
    name : "",
    username : "",
    password : "",
    cpassword : ""
  }

  const [formData , setFormData] = useState(intitialformdata);

  const handleChange = (e : any) => {
    const { name , value } = e.target;
    intitialformdata[name] = value;
    setFormData(intitialformdata);
  }

  return (
    <>

      <div className='grid grid-cols-2 mb-4'>
          <p>Full Name</p>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      
      <div className='grid grid-cols-2 mb-4'>
          <p>Username</p>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </div>

      <div className='grid grid-cols-2 mb-4'>

          <p>Password</p>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>

      <div className='grid grid-cols-2 mb-4'>

          <p>Confirm Password</p>
          <input type="password" name="cpassword" value={formData.cpassword} onChange={handleChange} />
      </div>

      <div className="flex justify-center">
          <Button name="Register" onClick={() => null}></Button>
      </div>

    </>
  )
}

export default RegisterForm