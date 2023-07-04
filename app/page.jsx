'use client'
import { CustomTextField, LoginPage, SignInButton } from "@/assets/styled";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState(false)
  const getEmail = localStorage.getItem('myEmail')
  const getPassword = localStorage.getItem('myPassword')
  const router = useRouter()



  const handleSubmit = () => {
    if (getEmail == 'omersarisoy1993@gmail.com' && getPassword == '555761ts') {
        setLogin(getEmail == 'omersarisoy1993@gmail.com' && getPassword == '555761ts')
        // redirect('/home')
        router.push('/home')
    }
  }
  return (
    <LoginPage>
      <div className="loginWrapper">
        <h1>MANAGE COURSES</h1>
        <div className="sign-in">
          <h2>SIGN IN</h2>
          <p>Enter your credentials to access your account</p>
        </div>
        <form className="email-form" onSubmit={handleSubmit}>
          <span>Email</span>
          <CustomTextField 
            id="outlined-basic" 
            label="Enter Your Email" 
            variant="outlined" 
            onChange={(e) => localStorage.setItem("myEmail", e.target.value)}
          />
          <span>Password</span>
          <CustomTextField 
            id="outlined-basic" 
            label="Enter Your Password" 
            variant="outlined" 
            onChange={(e) => localStorage.setItem("myPassword", e.target.value)}


          />
          <SignInButton variant="contained" type="submit" >SIGN IN</SignInButton>
          <p className="forgot">Forgot your password? <a>Reset Password</a> </p>
        </form>
      </div>
    </LoginPage>
  )
}
