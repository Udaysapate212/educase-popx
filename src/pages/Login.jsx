import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import InputContainer from "./../components/InputContainer";
import React from "react";
import { toast } from 'react-toastify';

function Login() {
  const [errorObj, setErrorObj] = useState({});
  const [loginObj, setLoginObj] = useState({
    email: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Standard regex patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

  function validate(userObj) {
    const errorsData = {};
    
    if (!userObj.email.trim()) {
      errorsData.email = "Email is required";
    } else if (!emailRegex.test(userObj.email)) {
      errorsData.email = "Please enter a valid email address";
    }
    
    if (!userObj.password) {
      errorsData.password = "Password is required";
    } else if (!passwordRegex.test(userObj.password)) {
      errorsData.password = "Password must be at least 8 characters with at least one letter and one number";
    }

    setErrorObj(errorsData);
    return errorsData;
  }

  useEffect(() => {
    setIsDisabled(!(loginObj.email && loginObj.password));
  }, [loginObj]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(loginObj);
    
    if (Object.keys(errors).length) {
      toast.error("Please fix the errors in the form", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }
    
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Login successful! Redirecting...", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => navigate("/home"), 2000);
    } catch (error) {
      toast.error("Login failed. Please try again.", {
        position: "top-center",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F7F8F9] p-4">
      <form
        className="w-full max-w-md bg-white rounded-lg shadow-sm border border-[#CBCBCB] p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-[#1D2226] mb-2">
          Signin to your PopX account
        </h2>
        <p className="text-[#1d222699] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        
        <div className="space-y-6">
          <InputContainer
            name="email"
            placeholderText="Enter email address"
            required={true}
            type="email"
            value={loginObj.email}
            setUserObj={setLoginObj}
            label="Email Address"
            errorObj={errorObj}
            setErrorObj={setErrorObj}
          />
          
          <InputContainer
            name="password"
            placeholderText="Enter password"
            required={true}
            type="password"
            value={loginObj.password}
            setUserObj={setLoginObj}
            label="Password"
            errorObj={errorObj}
            setErrorObj={setErrorObj}
          />
          
          <button
            type="submit"
            disabled={isDisabled || isLoading}
            className={`w-full py-3 px-4 rounded-md text-white font-medium transition-all ${
              isDisabled || isLoading 
                ? "bg-gray-300 cursor-not-allowed" 
                : "bg-[#6C25FF] hover:bg-[#5a1de6]"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <span className="loading-spinner mr-2"></span>
                Logging in...
              </div>
            ) : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;