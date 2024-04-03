import React from 'react';

const CompanyProfile = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse sm:flex-row items-center">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://i.imgur.com/WbQnbas.png" alt="Company profile" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                        <h2 className="my-4 font-bold text-3xl sm:text-4xl ">About <span className="text-indigo-600">Our Company</span></h2>
                        <p className="text-gray-700">
                            At Radhe Brass, we are dedicated to crafting exquisite brass products that elevate spaces with elegance and sophistication. With years of expertise in brass craftsmanship, we specialize in creating premium-quality components for various applications, ranging from door handles to lighting fixtures.<br />
                            Our commitment to quality is unwavering. Each piece undergoes rigorous quality assurance processes to ensure impeccable craftsmanship and durability. Driven by innovation, we continually explore new designs and techniques to stay at the forefront of brass manufacturing, offering our clients cutting-edge solutions that blend tradition with modern aesthetics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyProfile;
