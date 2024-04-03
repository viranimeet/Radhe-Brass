import React from 'react';
import "./Hero.css"

const Hero = () => {
    return (
        <div>
            <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex flex-col-reverse lg:flex-row">
                    <div className="sm:text-center lg:text-left xl:mt-24 lg:w-1/2">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Elevate your space with</span>
                            <span className="block text-indigo-600 xl:inline"> Premium Brass Components</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Explore our exquisite collection of brass components designed to add elegance and sophistication to your home decor. From door handles to lighting fixtures, discover the perfect pieces to complement your space.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                {/* <a href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                                    Get started
                                </a> */}
                                <a
                                    style={{ '--clr': '#7808d0' }}
                                    class="button"
                                    href="#">
                                    <span class="button__icon-wrapper">
                                        <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                        </svg>

                                        <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                        </svg>
                                    </span>
                                    Explore All
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-8 my-4">
                        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;
