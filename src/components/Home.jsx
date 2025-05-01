import { useEffect } from "react";
import userImg from "../assets/userImg.png";
import cameraIconImg from "../assets/cameraIconImg.png";
import React from "react";
function Home() {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#F7F8F9] min-h-screen max-w-[375px] m-auto border border-[#CBCBCB]">
      <h1 className="text-[#1D2226] text-[18px] bg-white shadow-[0_3px_6px_0px_#00000007] px-[15px] py-[19px] font-rubik ">
        Account Settings
      </h1>
      <div className="px-5 py-[30px] flex gap-5">
        <div className="w-[76px] h-[76px] rounded-full relative">
          <img src={userImg} alt="user-image" className="w-full" />
          <div className="w-[23px] h-[23px] rounded-full absolute bg-[#6C25FF] p-1.5 bottom-1 -right-1">
            <img src={cameraIconImg} alt="camera-icon" className="w-full" />
          </div>
        </div>
        <div>
          <h2 className="text-[15px] font-rubik font-semibold text-[#1D2226]">
            Marry Doe
          </h2>
          <p className="text-[14px] font-rubik text-[#1D2226] mt-1.5">
            Marry@Gmail.Com
          </p>
        </div>
      </div>
      <p className="px-5 text-[14px] font-rubik border-b-2 border-dashed border-[#CBCBCB] pb-5">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}

export default Home;
