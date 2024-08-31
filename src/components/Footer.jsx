// import { faDownload, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useCallback, useEffect, useState } from 'react';

const Footer = () => {

    return (
        <footer className="w-full bg-[#B16064] px-[100px] py-[60px] flex flex-col lg:flex-row justify-center gap-[60px] lg:justify-between items-center">
            <p className="px-[20px] py-[10px] border border-solid border-[#FFDFE0] text-[#FFDFE0] text-base lg:text-2xl">
                jullie angeli.
            </p>
            <p className="text-[#FFDFE0] font-light text-xs lg:text-sm text-center">
                &copy; {new Date().getFullYear()} Jullie Morales | All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;
