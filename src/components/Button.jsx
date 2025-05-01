import React from "react";

function Button() {
  return (
    <button
      className="bg-[#6c25ff49] text-[#1D2226] mt-2.5 rounded-[6px] text-[16px] py-[13px] px-1.5 font-medium font-rubik outline-none cursor-pointer "
      onClick={handleLogin}
    >
      Already Registered? Login
    </button>
  );
}

export default Button;