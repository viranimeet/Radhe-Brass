// import React from 'react'
// import logo from "../../public/images/logo1.png"
// const Header = () => {
//     return (
//         <div>
//             <div className="bg-gradient-to-b from-blue-400 to-blue-600">
//                 <header className="py-4 lg:py-4">
//                     <div className="px-4 mx-auto sm:px-6 lg:px-8">
//                         <div className="flex items-center justify-between h-16 lg:h-20">
//                             <div className="flex-shrink-0">
//                                 <a href="#" title="" className="flex">
//                                     <img className="h-8 md:h-12 lg:h-28" src={logo} alt="" />
//                                 </a>
//                             </div>

//                             <button type="button" className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
//                                 <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                                 </svg>
//                                 <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                                 </svg>
//                             </button>

//                             <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
//                                 <a href="/" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Home </a>

//                                 <a href="/about" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> About Us </a>

//                                 <a href="/products" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Products </a>

//                                 <a href="/quality" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Our Precision </a>

//                                 <a href="/contact" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Contact us </a>

//                                 <div className="w-px h-5 bg-black/20"></div>

//                                 <a href="/login" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Log in </a>

//                                 <a href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Try for free </a>
//                             </div>
//                         </div>
//                     </div>
//                 </header>

                
//             </div>

//         </div>
//     )
// }

// export default Header



// import React from 'react';
// import logo from "../../public/images/logo1.png";
// import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <div className="bg-gradient-to-b from-blue-400 to-blue-600">
//             <header className="py-4 lg:py-4">
//                 <div className="px-4 mx-auto sm:px-6 lg:px-8">
//                     <div className="flex items-center justify-between h-16 lg:h-20">
//                         <div className="flex-shrink-0">
//                             <Link to="/" className="flex items-center">
//                                 <img className="h-8 md:h-12 lg:h-24 ml-36" src={logo} alt="Logo" />
//                             </Link>
//                         </div>

//                         <button type="button" className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
//                             <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                             </svg>
//                             <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                             </svg>
//                         </button>

//                         <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
//                             <Link to="/" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Home </Link>
//                             <Link to="/about" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> About Us </Link>
//                             <Link to="/products" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Products </Link>
//                             <Link to="/quality" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Our Precision </Link>
//                             <Link to="/contact" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Contact us </Link>
//                             <div className="w-px h-5 bg-black/20"></div>
//                             <Link to="/login" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Log in </Link>
//                             <a href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Try for free </a>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </div>
//     );
// }

// export default Header;




import React, { useState } from 'react';
import logo from "../../public/images/logo1.png";
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-gradient-to-b from-blue-400 to-blue-600">
            <header className="py-4 lg:py-4">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center">
                                <img className="h-8 md:h-12 lg:h-24 ml-4 xl:ml-36 w-auto" src={logo} alt="Logo" />
                            </Link>
                        </div>

                        <button type="button" onClick={toggleMenu} className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            {menuOpen ? (
                                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                        <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden`}>
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link to="/" className="block px-3 py-2 text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Home </Link>
                                <Link to="/about" className="block px-3 py-2 text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> About Us </Link>
                                <Link to="/products" className="block px-3 py-2 text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Products </Link>
                                <Link to="/quality" className="block px-3 py-2 text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Our Precision </Link>
                                <Link to="/contact" className="block px-3 py-2 text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Contact us </Link>
                                <Link to="/login" className="block px-3 py-2 text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Log in </Link>
                            </div>
                        </div>

                        <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <Link to="/" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Home </Link>
                            <Link to="/about" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> About Us </Link>
                            <Link to="/products" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Products </Link>
                            <Link to="/quality" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Our Precision </Link>
                            <Link to="/contact" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Contact us </Link>
                            <Link to="/login" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Log in </Link>
                            <a href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Try for free </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;

