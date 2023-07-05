"use client";
import { CustomTextField, LoginPage, SignInButton } from "@/assets/styled";
import { useRouter } from "next/navigation";
import { useState } from "react";

const savedCredentials = {
  email: "omersarisoy1993@gmail.com",
  password: "555761ts",
};

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      formData.email === savedCredentials.email &&
      formData.password === savedCredentials.password
    ) {
      router.push("/home");
    }
  };
  return (
    <LoginPage>
      <div className="loginWrapper">
        <h1>MANAGE COURSES</h1>
        <div className="sign-in">
          <h2>SIGN IN</h2>
          <p>Enter your credentials to access your account</p>
        </div>
        <form className="email-form">
          <span>Email</span>
          <CustomTextField
            name="email"
            label="Enter your email"
            variant="outlined"
            onChange={handleChange}
          />
          <span>Password</span>
          <CustomTextField
            name="password"
            label="Enter your password"
            variant="outlined"
            onChange={handleChange}
          />
          <SignInButton variant="contained" onClick={handleSubmit}>
            SIGN IN
          </SignInButton>
          <p className="forgot">
            Forgot your password? <a href="#">Reset Password</a>
          </p>
        </form>
      </div>
    </LoginPage>
  );
 }