// import React from 'react';
// import Header from '../components/Header';
// import QualityImage from "../../public/images/qualityhigh.png";

// const Quality = () => {
//     return (
//         <div>
//             <Header />
//             <div className="bg-blue-100 p-8 flex flex-col md:flex-row items-center justify-center md:justify-between">
//                 <div className="w-full md:w-1/2">
//                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">About Us</h1>
//                     <p className="text-gray-600">Home &gt; Our Precision</p>
//                 </div>
//                 <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
//                     <img
//                         src="https://tse1.mm.bing.net/th?id=OIP.0F8xUc5ePqTqhfw_gpOeywHaDp&pid=Api&P=0&h=180"
//                         alt="Contact illustration"
//                         className="w-64 h-auto"
//                     />
//                 </div>
//             </div>
//             <section className="bg-white py-8">
//                 <div className="container mx-auto flex flex-wrap items-center">
//                     <div className="w-full md:w-1/2 md:order-last lg:pl-8">
//                         <img src={QualityImage} alt="Quality Compass" className="w-full md:max-w-lg mx-auto rounded-lg" />
//                     </div>
//                     <div className="w-full md:w-1/2 px-4 md:px-0 md:pr-8 lg:pl-10">
//                         <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">Quality Management</h2>
//                         <p className="text-base text-gray-700 leading-relaxed mb-4">
//                             Our commitment is to deliver products of impeccable quality, setting a benchmark in the industry with zero defects. We meticulously oversee every stage of production, starting from the procurement of raw materials to the delivery of finished goods, ensuring each item meets the highest standards.
//                         </p>
//                         <p className="text-base text-gray-700 leading-relaxed mb-4">
//                             Our seasoned quality assurance team undergoes rigorous training to maintain our quality standards. They work in tandem with our quality control team, which diligently monitors every aspect of production to meet both product specifications and customer expectations.
//                         </p>
//                         <p className="text-base text-gray-700 leading-relaxed mb-4">
//                             With stringent quality control measures in place, we assure our customers that their requirements are met consistently and accurately. Each product undergoes thorough inspection following strict quality control protocols.
//                         </p>
//                         <ul className="text-base text-gray-700 leading-relaxed mb-4 list-disc pl-6">
//                             <li>We maintain current and comprehensive records of our quality standards.</li>
//                             <li>Dedicated Design &amp; Development Department.</li>
//                             <li>Design &amp; Development as per Customer Specification.</li>
//                             <li>Utilizing advanced testing equipment and providing comprehensive training programs.</li>
//                             <li>Quality Planning.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Quality;



import React from 'react';
import Header from '../components/Header';
import QualityImage from "../../public/images/qualityhigh.png";
import QualityImage1 from "../../public/images/quality_image.png";
import Micrometerimage from "../../public/images/digital_micrometer.png";
import vernier from "../../public/images/digital_vernier_caliper.png";
import "../our_precision/Quality.css";

const Quality = () => {
    return (
        <div>
            <Header />
            <div className="bg-blue-100 p-4 md:p-8 flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div className="w-full md:w-1/2 ">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">About Us</h1>
                    <p className="text-gray-600">Home &gt; Our Precision</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.0F8xUc5ePqTqhfw_gpOeywHaDp&pid=Api&P=0&h=180"
                        alt="Contact illustration"
                        className="w-32 h-auto"
                    />
                </div>
            </div>
            <section className="bg-white py-4 md:py-8">
                <div className="container mx-auto flex flex-wrap items-center">
                    <div className="w-full md:w-1/2 md:order-last lg:pl-8 md:pr-8 lg:pr-0">
                        <img src={QualityImage} alt="Quality Compass" className="w-full md:max-w-lg mx-auto rounded-lg" />
                    </div>
                    <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-10 mt-8 md:mt-0">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">Quality Management</h2>
                        <p className="text-base text-gray-700 leading-relaxed mb-4">
                            Our commitment is to deliver products of impeccable quality, setting a benchmark in the industry with zero defects. We meticulously oversee every stage of production, starting from the procurement of raw materials to the delivery of finished goods, ensuring each item meets the highest standards.
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed mb-4">
                            Our seasoned quality assurance team undergoes rigorous training to maintain our quality standards. They work in tandem with our quality control team, which diligently monitors every aspect of production to meet both product specifications and customer expectations.
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed mb-4">
                            With stringent quality control measures in place, we assure our customers that their requirements are met consistently and accurately. Each product undergoes thorough inspection following strict quality control protocols.
                        </p>
                        <ul className="text-base text-gray-700 leading-relaxed mb-4 list-disc pl-6">
                            <li>We maintain current and comprehensive records of our quality standards.</li>
                            <li>Dedicated Design &amp; Development Department.</li>
                            <li>Design &amp; Development as per Customer Specification.</li>
                            <li>Utilizing advanced testing equipment and providing comprehensive training programs.</li>
                            <li>Quality Planning.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="bg-gradient-to-b from-white to-gray-200 p-8">
                <h1 className="text-3xl font-bold mb-4">Quality Equipments</h1>
                <div className="flex flex-wrap justify-around">
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
                        <img src={vernier} alt="Digital Vernier Caliper" className="w-full rounded-lg" />
                        <p className="text-center mt-2">Digital Vernier Caliper</p>
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
                        <img src={Micrometerimage} alt="Digital Micrometer" className="w-full rounded-lg" />
                        <p className="text-center mt-2">Digital Micrometer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quality;
