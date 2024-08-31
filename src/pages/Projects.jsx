import Layout from './Layout';
import { faArrowUpRightFromSquare, faDownload, faEnvelope, faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import vid01 from '../assets/vid/mari-fortune.webm'
import vid02 from '../assets/vid/iahome.webm'
import vid03 from '../assets/vid/nagoya-sumiya.webm'
import vid04 from '../assets/vid/ldhcom.webm'
import vid05 from '../assets/vid/meika-kensetsu.webm'
import vid06 from '../assets/vid/eiko-gakuin.webm'
import vid07 from '../assets/vid/gorikushi.webm'
import vid08 from '../assets/vid/fuji-aozora.webm'
import vid09 from '../assets/vid/towanomori.webm'
import vid10 from '../assets/vid/home-piha-hauoli.webm'
import vid11 from '../assets/vid/lusso.webm'

const Projects = () => {
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
        <Layout>
            <header className="border-b border-solid border-[#333333] w-[100%]">
                <div className="flex mx-[100px] my-[30px] justify-between items-center">
                    <p className="px-[20px] py-[10px] border border-solid border-[#333333] text-2xl hover:bg-[#B16064] hover:text-[#FFDFE0]">
                        jullie angeli.
                    </p>
                    <div className="flex gap-[60px]">
                        <ul className="flex gap-[60px] items-center">
                            <li>
                                <a
                                    className="text-[#333333] hover:text-opacity-50"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[#333333] hover:text-opacity-50"
                                    href="#"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[#333333] hover:text-opacity-50"
                                    href="#"
                                >
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[#333333] hover:text-opacity-50"
                                    href="#"
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
                            <FontAwesomeIcon icon={faPhone} />
                            Contact Me
                        </a>
                    </div>
                </div>
            </header>
            <nav className="border-b border-solid border-[#333333] w-[100vw] bg-nav">
                <div className="navWrapper">
                    <p className="px-[20px] py-[10px] border border-solid border-[#333333] text-2xl hover:bg-[#B16064] hover:text-[#FFDFE0] sm:text-base">
                        jullie angeli.
                    </p>
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
                                <a
                                    href="#experiences"
                                    className={`${isOpen ? 'open' : ''}`}
                                >
                                    My Experiences
                                </a>
                                <a
                                    className={`flex d-flex items-center gap-[10px] px-[20px] py-[10px] border border-solid border-[#FFDFE0]"
}                                        href="./files/JULLIE ANGELI S. MORALES.pdf ${
                                        isOpen ? 'open' : ''
                                    }`}
                                    download
                                >
                                    <div className="text-[16px]">Download my CV</div>
                                    {/* <i className="text-[16px] fa-solid fa-download" /> */}
                                    <FontAwesomeIcon
                                        icon={faDownload}
                                        className="text-[16px]"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/moralesjullie/"
                                    className={`${isOpen ? 'open' : ''}`}
                                >
                                    <img
                                        className="filter-pink"
                                        src="/src/assets/img/linkedin.svg"
                                        alt="LinkedIn"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className='flex flex-col justify-center items-center gap-[100px]'>
                <h2 className="text-4xl font-medium">
                    My <span className="text-[#B16064]">Web Design Projects.</span>
                </h2>
                <div>
                    <div>
                        <div className="w-[90vw] lg:w-[100%]">
                            <video
                                width={600}
                                height={300}
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src={vid01}
                                    type="video/webm"
                                />
                                Your browser cannot play this video.
                            </video>
                        </div>
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44]" href="https://lp.mari-fortune.jp" target='_blank'>
                            <p className="font-semibold">Mari Fortune Landing Page</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                </div>
            </section>
            <div className='flex flex-col w-full'>
                <Contact />
                <Footer />
            </div>
        </Layout>
    );
};
export default Projects;
