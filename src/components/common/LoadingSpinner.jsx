import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="text-center p-5">
      <p className="text-lg text-gray-700">Loading news...</p>
      {/* Contoh spinner sederhana dengan Tailwind */}
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mx-auto mt-4"></div>
    </div>
  );
};

export default LoadingSpinner;