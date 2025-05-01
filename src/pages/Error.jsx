import { useNavigate } from "react-router";
import React from "react";
function Error() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div className="min-h-screen max-w-[375px] bg-[#F7F8F9] border border-[#CBCBCB] m-auto flex flex-col justify-center items-center gap-2">
      <h1 className="text-2xl font-medium">404</h1>
      <p>The page you are looking for does not exists</p>
      <button
        className="border px-2 rounded-[4px] bg-[#6C25FF] text-white py-1 cursor-pointer"
        onClick={handleClick}
      >
        Go back
      </button>
    </div>
  );
}

export default Error;