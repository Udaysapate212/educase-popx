import { useEffect } from "react";
import { useNavigate } from "react-router";
import React from "react";
function Welcome() {
  const navigate = useNavigate();

  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  function handleCreateAccount() {
    navigate("/register");
  }
  function handleLogin() {
    navigate("/login");
  }
  return (
    <>
      <div className="flex flex-col py-[41px] px-5 min-h-screen justify-end font-rubik bg-[#F7F8F9] max-w-[375px] m-auto border border-[#CBCBCB]">
        <h2 className="text-[28px] font-bold font-rubik text-[#1D2226]">
          Welcome to PopX
        </h2>
        <p className="text-[18px] text-[rgba(29,34,38,0.6)] mt-2.5 font-rubik">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button
          className="bg-[#6c25ff] text-white mt-[29px] rounded-[6px] text-[16px] py-[13px] px-1.5 font-medium font-rubik outline-none cursor-pointer"
          onClick={handleCreateAccount}
        >
          Create Account
        </button>
        <button
          className="bg-[#6c25ff49] text-[#1D2226] mt-2.5 rounded-[6px] text-[16px] py-[13px] px-1.5 font-medium font-rubik outline-none cursor-pointer "
          onClick={handleLogin}
        >
          Already Registered? Login
        </button>
      </div>
    </>
  );
}

export default Welcome;