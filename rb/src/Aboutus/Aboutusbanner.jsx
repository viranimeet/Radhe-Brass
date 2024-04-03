
// ContactUsBanner.js

import React from 'react';

const Aboutusbanner = () => {
  return (
    <div className="bg-blue-100 p-8 flex items-center">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold text-black">About Us</h1>
        <p className="text-gray-600">Home &gt; About Us</p>
      </div>
      <div className="w-1/2 flex justify-end">
        {/* Replace with your own illustration or image */}
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.0F8xUc5ePqTqhfw_gpOeywHaDp&pid=Api&P=0&h=180"
          alt="Contact illustration"
          className="w-64 h-auto"
        />
      </div>
    </div>
  );
};

export default Aboutusbanner;
