import React from 'react';
import Header from '../components/Header';

const Whyus = () => {
    return (
        <div>
            <Header />
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
                    <p className="text-gray-600">Home &gt; About Us &gt; Why us</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.0F8xUc5ePqTqhfw_gpOeywHaDp&pid=Api&P=0&h=180"
                        alt="Contact illustration"
                        className="w-64 h-auto"
                    />
                </div>
            </div>
            <div className="container mt-8 mx-auto max-w-5xl flex flex-col md:flex-row gap-12 items-center justify-center mb-12">
                <div className="grid gap-4 justify-items-center text-center md:flex-1">
                    <div className="rounded-full border-8 border-amber-400 p-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                        </svg>
                    </div>
                    <h3 className="text-3xl font-bold">Quality</h3>
                    <p>Our products are secure and private out-of-the-box</p>
                </div>
                <div className="grid gap-4 justify-items-center text-center md:flex-1">
                    <div className="rounded-full border-8 border-amber-400 p-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                        </svg>
                    </div>
                    <h3 className="text-3xl font-bold">Promise</h3>
                    <p>Feel good about your wallet and the environment</p>
                </div>
                <div className="grid gap-4 justify-items-center text-center md:flex-1">
                    <div className="rounded-full border-8 border-amber-400 p-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
                        </svg>
                    </div>
                    <h3 className="text-3xl font-bold">Proven</h3>
                    <p>Leading the Smart Home world for 10 years</p>
                </div>
            </div>
        </div>
    )
}

export default Whyus;
