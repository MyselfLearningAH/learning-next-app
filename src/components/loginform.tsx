"use client"

import { useState } from "react";
import Button from "./Button";
import { userLogin } from "@/utils/utils";
import { useRouter } from "next/navigation";

const LoginForm = () => {

  const intitialformdata : any = {
    username : "",
    password : ""
  }

  const router = useRouter();
  const [formData , setFormData] = useState(intitialformdata);

  const handleChange = (e : any) => {
    const { name , value } = e.target;
    formData[name] = value;
    setFormData(formData);
  }

  return (
    <>       
      <div className='grid grid-cols-2 mb-4'>
        <p>Username</p>
        <input className="text-black" type="text" name="username" onChange={handleChange} />
      </div>

      <div className='grid grid-cols-2 mb-4'>
        
        <p>Password</p>
        <input className="text-black" type="password" name="password" onChange={handleChange} />
      </div>

      <div className="flex justify-center">
        <Button name="Login" onClick={() => userLogin(formData, router)}></Button>
      </div>
    </>
  )
}

export default LoginForm