import { useState, useEffect } from "react";
import InputContainer from "./InputContainer";
import { useNavigate } from "react-router-dom";
import React from "react";
import { toast } from 'react-toastify';

function RegisterForm() {
  const [userObj, setUserObj] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });

  const navigate = useNavigate();
  const [errorObj, setErrorObj] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Standard regex patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{3,6}$/;

  function validate(userObj) {
    const errorsData = {};
    
    if (!userObj.fullName.trim()) {
      errorsData.fullName = "Full name is required";
    } else if (userObj.fullName.trim().length < 4) {
      errorsData.fullName = "Name must be at least 4 characters";
    }
    
    if (!userObj.phoneNumber) {
      errorsData.phoneNumber = "Phone number is required";
    } else if (!phoneRegex.test(userObj.phoneNumber)) {
      errorsData.phoneNumber = "Please enter a valid phone number";
    }
    
    if (!userObj.email) {
      errorsData.email = "Email is required";
    } else if (!emailRegex.test(userObj.email)) {
      errorsData.email = "Please enter a valid email address";
    }
    
    if (!userObj.password) {
      errorsData.password = "Password is required";
    } else if (!passwordRegex.test(userObj.password)) {
      errorsData.password = "Password must be at least 8 characters with at least one letter and one number";
    }
    
    if (!userObj.agency) {
      errorsData.agency = "Please select an option";
    }

    setErrorObj(errorsData);
    return errorsData;
  }

  useEffect(() => {
    const isValid = (
      userObj.fullName &&
      userObj.phoneNumber &&
      userObj.email &&
      userObj.password &&
      userObj.agency
    );
    setIsDisabled(!isValid);
  }, [userObj]);

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(userObj);
    
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
      toast.success("Account created successfully! Redirecting...", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => navigate("/home"), 2000);
    } catch (error) {
      toast.error("Registration failed. Please try again.", {
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
        <h1 className="text-2xl font-semibold text-[#1d2226] mb-6">
          Create your PopX account
        </h1>

        <div className="space-y-6">
          <InputContainer
            name="fullName"
            placeholderText="Enter your full name"
            required={true}
            type="text"
            value={userObj.fullName}
            setUserObj={setUserObj}
            label="Full Name"
            errorObj={errorObj}
            setErrorObj={setErrorObj}
          />
          
          <InputContainer
            name="phoneNumber"
            placeholderText="Enter your phone number"
            required={true}
            type="tel"
            value={userObj.phoneNumber}
            setUserObj={setUserObj}
            label="Phone number"
            errorObj={errorObj}
            setErrorObj={setErrorObj}
          />
          
          <InputContainer
            name="email"
            placeholderText="Enter your email"
            required={true}
            type="email"
            value={userObj.email}
            setUserObj={setUserObj}
            label="Email address"
            errorObj={errorObj}
            setErrorObj={setErrorObj}
          />
          
          <InputContainer
            name="password"
            placeholderText="Enter your password"
            required={true}
            type="password"
            value={userObj.password}
            setUserObj={setUserObj}
            label="Password"
            errorObj={errorObj}
            setErrorObj={setErrorObj}
          />
          
          <InputContainer
            name="companyName"
            placeholderText="Enter your company name"
            required={false}
            type="text"
            value={userObj.companyName}
            setUserObj={setUserObj}
            label="Company name"
            errorObj={errorObj}
            setErrorObj={setErrorObj}
          />

          <div className="mb-6">
            <p className="block text-sm font-medium text-[#6c25ff] mb-2">
              Are you an agency?
              <span className="text-red-500 ml-1">*</span>
            </p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={userObj.agency === "yes"}
                  className="h-4 w-4 text-[#6C25FF] focus:ring-[#6C25FF] border-gray-300"
                  onChange={(e) => setUserObj({...userObj, agency: e.target.value})}
                />
                <span className="text-sm text-gray-700">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={userObj.agency === "no"}
                  className="h-4 w-4 text-[#6C25FF] focus:ring-[#6C25FF] border-gray-300"
                  onChange={(e) => setUserObj({...userObj, agency: e.target.value})}
                />
                <span className="text-sm text-gray-700">No</span>
              </label>
            </div>
            {errorObj.agency && (
              <p className="mt-1 text-xs text-red-500">{errorObj.agency}</p>
            )}
          </div>
          
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
                Creating account...
              </div>
            ) : "Create Account"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;