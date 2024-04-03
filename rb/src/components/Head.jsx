import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const Head = () => {
    return (
        <div className="bg-sky-950 text-white py-2 px-4 flex flex-wrap justify-between items-center">
            <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a href="mailto:sales@radhebrass.com" className="text-lg mr-6">sales@radhebrass.com</a>
            </div>
            <div className="flex items-center mt-2 lg:mt-0">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <a href="tel:+919978801534" className="text-lg mr-6">+91 9978801534</a>
            </div>
            <div className="flex items-center mt-2 lg:mt-0">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                <p className="text-lg mr-8">Time : 8:30 to 20:30</p>
            </div>
        </div>
    );
};

export default Head;
