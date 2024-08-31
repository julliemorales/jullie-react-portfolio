import { faDownload, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import linkedIn from '../assets/img/linkedin.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHamburger = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    useEffect(() => {
        const navIcon = document.getElementById('nav-icon');
        if (navIcon) {
            navIcon.addEventListener('click', toggleHamburger);
        }

        return () => {
            if (navIcon) {
                navIcon.removeEventListener('click', toggleHamburger);
            }
        };
    }, [isOpen, toggleHamburger]);

    return (
        <>
            <header className="border-b border-solid border-[#333333] w-[100%]">
                <div className="flex mx-[100px] my-[30px] justify-between items-center">
                    <a className="px-[20px] py-[10px] border border-solid border-[#333333] text-2xl hover:bg-[#B16064] hover:text-[#FFDFE0]" href='/'>
                        jullie angeli.
                    </a>
                    <div className="flex gap-[60px]">
                        <ul className="flex gap-[60px] items-center">
                            <li>
                                <Link
                                    className="text-[#333333] hover:text-opacity-50"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-[#333333] hover:text-opacity-50"
                                    to="/projects"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <a
                                    className="text-[#333333] hover:text-opacity-50"
                                    href="#experiences"
                                >
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[#333333] hover:text-opacity-50"
                                    href="#skills"
                                >
                                    Skills
                                </a>
                            </li>
                        </ul>
                        <a
                            className="px-[20px] py-[10px] bg-[#333333] text-[#FFDFE0] flex gap-[10px] items-center hover:bg-transparent hover:text-[#333333] hover:border hover:border-solid hover:border-[#333333]"
                            href="#"
                        >
                            {/* <i className="fa-solid fa-phone" /> */}
                            <FontAwesomeIcon icon={faEnvelope} />
                            Contact Me
                        </a>
                    </div>
                </div>
            </header>
            <nav className="border-b border-solid border-[#333333] w-[100vw] bg-nav">
                <div className="navWrapper">
                    <a href='/' className="px-[10px] py-[5px] lg:px-[20px] lg:py-[10px] border border-solid border-[#333333] text-xs lg:text-2xl hover:bg-[#B16064] hover:text-[#FFDFE0] sm:text-base">
                        jullie angeli.
                    </a>
                    <div className="right">
                        <div
                            id="nav-icon"
                            className={isOpen ? 'open' : ''}
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className={`overlay ${isOpen ? 'open' : ''}`}>
                            <div className="overlayContent">
                                <Link
                                    className={`${isOpen ? 'open' : ''}`}
                                    onClick={()=>setIsOpen(false)}
                                    to="/projects"
                                >
                                    My Projects
                                </Link>
                                <a
                                    href="#experiences"
                                    className={`${isOpen ? 'open' : ''}`}
                                    onClick={()=>setIsOpen(false)}
                                >
                                    My Experiences
                                </a>
                                <a
                                    className={`flex d-flex items-center justify-center gap-[10px] px-[20px] py-[10px] border border-solid border-[#FFDFE0]
}                                               ${isOpen ? 'open' : ''}`}
                                    href="mailto:jullieangelimorales05@gmail.com"
                                    download
                                >
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="text-[16px]"
                                    />
                                    <div className="text-[16px]">Contact Me</div>
                                    {/* <i className="text-[16px] fa-solid fa-download" /> */}
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/moralesjullie/"
                                    className={`${isOpen ? 'open' : ''}`}
                                    target="_blank"
                                >
                                    <img
                                        className="filter-pink"
                                        src={linkedIn}
                                        alt="LinkedIn"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
