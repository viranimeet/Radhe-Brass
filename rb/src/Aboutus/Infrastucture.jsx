import React from 'react';
import Header from '../components/Header';

const Infrastucture = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-x-8 mt-8 md:mt-16'>
                {/* Link to /company-profile */}
                <a href="/about" className="text-blue-500 font-semibold hover:underline">Company Profile</a>
                {/* Link to /why-us */}
                <a href="/why-us" className="text-blue-500 font-semibold hover:underline">Why Us</a>
                {/* Link to /infrastructure */}
                <a href="/infrastructure" className="text-blue-500 font-semibold hover:underline">Infrastructure</a>
            </div>
            <div className="bg-blue-100 p-8 flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">About Us</h1>
                    <p className="text-gray-600">Home &gt; About Us &gt; Infrastructure</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.0F8xUc5ePqTqhfw_gpOeywHaDp&pid=Api&P=0&h=180"
                        alt="Contact illustration"
                        className="w-64 h-auto"
                    />
                </div>
            </div>
    <div className="bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">Radhe Brass</h1>
      <p className="text-black text-xl">
        Radhe Brass provides high-quality brass parts & components to its customers. The company is well-organized with various departments, including manufacturing, quality checking, packaging, and accounting. All departments work in perfect coordination and accuracy.
      </p>
      <p className="text-black mt-4 text-xl">
      Radhe Brass seeks accurate quality on exact timeframes. Their manufacturing sector is equipped with a range of machinery, from manual to fully automatic, ensuring desired products as per customer requirements.
      </p>
    </div>
    </>
  );
};

export default Infrastucture;
