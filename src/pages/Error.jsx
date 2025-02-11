import React from "react";
import { useNavigate } from "react-router";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 font-['Manrope'] max-sm:p-5">
      <h1 className="text-[#343f52] text-5xl text font-semibold">404</h1>
      <h2>Page not found</h2>
      <p className="text-sm text-[#7e8ba3] max-sm:text-center">
        But don't worry, you can find plenty of other things on our homepage
      </p>
      <button
        className="bg-[#0c96d4] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => navigate("/")}
      >
        Back to homepage
      </button>
    </div>
  );
};

export default Error;
