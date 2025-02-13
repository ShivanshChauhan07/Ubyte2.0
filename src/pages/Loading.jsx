import React, { useEffect, useState } from "react";

const Loading = () => {
  console.log("loading");
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
  );
};

export default Loading;
