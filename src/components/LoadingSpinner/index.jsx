import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-4 border-gray-300 border-t-4 border-t-gray-800 rounded-full h-12 w-12 animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;
