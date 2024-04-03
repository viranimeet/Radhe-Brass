// import React, { useState, useEffect } from 'react';
// import "../components/Footer.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// const Footer = () => {
//     const [showButton, setShowButton] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.pageYOffset > 300) {
//                 setShowButton(true);
//             } else {
//                 setShowButton(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     return (
//         <footer className="bg-gray-900 container text-white py-8">
//             <div className="container mx-auto flex flex-wrap justify-between items-start lg:items-center">
//                 <div className="w-full lg:w-1/3 lg:pl-8 lg:pr-4">
//                     <h3 className="text-lg font-semibold">Get in touch</h3>
//                     <p className="mt-4">
//                         <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
//                         Plot No.95 GIDC phase-II, Dared, Jamnagar-361004, Gujarat, INDIA
//                     </p>
//                     <p className="mt-2">
//                         <FontAwesomeIcon icon={faPhone} className="mr-2" />

//                         <a href="tel:+919978801534" className="text-lg mr-6">+91 9978801534</a>
//                     </p>
//                     <div className="flex items-center">
//                         <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
//                         <a href="mailto:sales@radhebrass.com" className="text-lg mr-6">sales@radhebrass.com</a>
//                     </div>

//                 </div>
//                 <div className="w-full lg:w-1/6 mt-8 lg:mt-0">
//                     <h3 className="text-lg font-semibold">Quick Links</h3>
//                     <ul className="mt-4 space-y-2">
//                         <li><a href="/">Home</a></li>
//                         <li><a href="/about">Company Profile</a></li>
//                         <li><a href="/why-us">Why us?</a></li>
//                         <li><a href="/infrastructure">Infrastructure</a></li>
//                         <li><a href="/products">Products</a></li>
//                         <li><a href="#">Our Quality</a></li>
//                         <li><a href="#">We Serve</a></li>
//                         <li><a href="/contact">Contact Us</a></li>
//                     </ul>
//                 </div>
//                 <div className="w-full mt-8 lg:mt-0 lg:pl-4">
//                     <iframe
//                         src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3688.3349363128355!2d70.060665!3d22.416415999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDI0JzU5LjEiTiA3MMKwMDMnMzguNCJF!5e0!3m2!1sen!2sin!4v1711775685287!5m2!1sen!2sin"
//                         width="100%"
//                         height="300"
//                         style={{ border: 0 }}
//                         allowFullScreen
//                         loading="lazy"
//                     ></iframe>

//                     <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
//                         <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">Radhe Brass</a> | All Rights Reserved.</span>
//                         {showButton && (
//                             <div className="w-full mt-8 lg:mt-0 lg:pl-4 flex justify-end">
//                                 <button className="button1" onClick={scrollToTop}>
//                                     <svg className="svgIcon" viewBox="0 0 384 512">
//                                         <path
//                                             d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
//                                         ></path>
//                                     </svg>
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;




import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 container text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between items-start lg:items-center">
                <div className="w-full lg:w-1/3 lg:pl-8 lg:pr-4">
                    <h3 className="text-lg font-semibold">Get in touch</h3>
                    <p className="mt-4">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                        Plot No.95 GIDC phase-II, Dared, Jamnagar-361004, Gujarat, INDIA
                    </p>
                    <p className="mt-2">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        <a href="tel:+919978801534" className="text-lg mr-6">+91 9978801534</a>
                    </p>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        <a href="mailto:sales@radhebrass.com" className="text-lg mr-6">sales@radhebrass.com</a>
                    </div>
                    <div className="flex items-center mt-2 lg:mt-0">
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        <p className="text-lg">Sat to Thu: 8:30 to 20:30  Fri: Closed</p>
                    </div>
                </div>
                <div className='w-full lg:w-1/3 '>
                    {/* Content for the second third of the footer */}
                </div>
                <div className="w-full lg:w-1/6 mt-8 lg:mt-0">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">Company Profile</a></li>
                        <li><a href="/why-us">Why us?</a></li>
                        <li><a href="/infrastructure">Infrastructure</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="#">Our Quality</a></li>
                        {/* <li><a href="#">We Serve</a></li> */}
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="w-full mt-8 lg:mt-0 lg:pl-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3688.3349363128355!2d70.060665!3d22.416415999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDI0JzU5LjEiTiA3MMKwMDMnMzguNCJF!5e0!3m2!1sen!2sin!4v1711775685287!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>

                    {/* <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">Radhe Brass</a> | All Rights Reserved.</span>
                       
                            <div className="w-full mt-8 lg:mt-0 lg:pl-4 flex justify-end">
                                <button className="button1" onClick={scrollToTop}>
                                    <svg className="svgIcon" viewBox="0 0 384 512">
                                        <path
                                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        
                    </div>
                </div>
            </div> */}
                    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">Radhe Brass</a> | All Rights Reserved.
                        </span>
                        <div className="w-full mt-8 lg:mt-0 lg:pl-4 flex justify-end">
                            <button class="button1" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <svg class="svgIcon" viewBox="0 0 384 512">
                                    <path
                                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                    ></path>
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
