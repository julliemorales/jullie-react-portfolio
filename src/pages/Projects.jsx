import Layout from './Layout';
import { faArrowUpRightFromSquare, faDownload, faEnvelope} from '@fortawesome/free-solid-svg-icons';
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
import vid11 from '../assets/vid/macchan.webm'
import vid12 from '../assets/vid/lusso.webm'
import web01 from '../assets/img/web01.png'
import web02 from '../assets/img/web02.png'
import web03 from '../assets/img/web03.png'
import web04 from '../assets/img/web04.png'
import web05 from '../assets/img/web05.png'
import web06 from '../assets/img/web06.png'
import web07 from '../assets/img/web07.png'
import web08 from '../assets/img/web08.png'
import web09 from '../assets/img/web09.png'
import web10 from '../assets/img/web10.png'
import web11 from '../assets/img/web11.png'
import web12 from '../assets/img/web12.png'
import web13 from '../assets/img/web13.png'
import web14 from '../assets/img/web14.png'
import web15 from '../assets/img/web15.png'
import logo01 from '../assets/img/logo01.png'
import logo02 from '../assets/img/logo02.png'
import logo03 from '../assets/img/logo03.png'
import logo04 from '../assets/img/logo04.png'
import logo05 from '../assets/img/logo05.png'
import logo06 from '../assets/img/logo06.png'
import banner01 from '../assets/img/banner01.png'
import banner02 from '../assets/img/banner02.png'
import banner03 from '../assets/img/banner03.webp'
import { Link } from 'react-router-dom';

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
                    <p className="px-[10px] py-[5px] lg:px-[20px] lg:py-[10px] border border-solid border-[#333333] text-2xl hover:bg-[#B16064] hover:text-[#FFDFE0]">
                        jullie angeli.
                    </p>
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
                                <Link
                                    className="text-[#333333] hover:text-opacity-50"
                                    to="/"
                                >
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-[#333333] hover:text-opacity-50"
                                    to="/"
                                >
                                    Skills
                                </Link>
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
                    <p className="px-[10px] py-[5px] lg:px-[20px] lg:py-[10px] text-xs lg:text-2xl border border-solid border-[#333333] hover:bg-[#B16064] hover:text-[#FFDFE0] sm:text-base">
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
                                <Link
                                    className={`${isOpen ? 'open' : ''}`}
                                    to="/"
                                >
                                    Home
                                </Link>
                                <Link
                                    className={`${isOpen ? 'open' : ''}`}
                                    to="/"
                                >
                                    My Experiences
                                </Link>
                                <Link
                                    className={`${isOpen ? 'open' : ''}`}
                                    to="/"
                                >
                                    My Skills
                                </Link>
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
            <section className='flex flex-col justify-center items-center gap-[60px] pt-[150px] lg:pt-[0px]'>
                <h2 className="lg:text-4xl font-medium">
                    My <span className="text-[#B16064]">Web Design Projects.</span>
                </h2>
                <div className='flex flex-wrap justify-center align-center max-w-[1800px] gap-[30px] lg:gap-[100px]'>
                    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
                        <div className="w-[90vw] lg:w-[100%] flex justify-center">
                            <video
                                className='w-[80vw] lg:w-[800px] flex justify-center'
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
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base" href="https://lp.mari-fortune.jp" target='_blank'>
                            <p className="font-semibold">Mari Fortune Landing Page</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
                        <div className="w-[90vw] lg:w-[100%] flex justify-center">
                            <video
                                className='w-[80vw] lg:w-[800px] flex justify-center'
                                height={300}
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src={vid02}
                                    type="video/webm"
                                />
                                Your browser cannot play this video.
                            </video>
                        </div>
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base" href="https://purpledingo3.sakura.ne.jp/iahome/" target='_blank'>
                            <p className="font-semibold">IAHome MEO Website</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
                        <div className="w-[90vw] lg:w-[100%] flex justify-center">
                            <video
                                className='w-[80vw] lg:w-[800px] flex justify-center'
                                height={300}
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src={vid03}
                                    type="video/webm"
                                />
                                Your browser cannot play this video.
                            </video>
                        </div>
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base" href="https://nagoya-sumiya.jp" target='_blank'>
                            <p className="font-semibold">Nagoya Sumiya MEO Website</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
                        <div className="w-[90vw] lg:w-[100%] flex justify-center">
                            <video
                                className='w-[80vw] lg:w-[800px] flex justify-center'
                                height={300}
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src={vid04}
                                    type="video/webm"
                                />
                                Your browser cannot play this video.
                            </video>
                        </div>
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base" href="https://ivoryfoal5.sakura.ne.jp/ldhcom/index.html" target='_blank'>
                            <p className="font-semibold">L-D-H com Website</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
                        <div className="w-[90vw] lg:w-[100%] flex justify-center">
                            <video
                                className='w-[80vw] lg:w-[800px] flex justify-center'
                                height={300}
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src={vid05}
                                    type="video/webm"
                                />
                                Your browser cannot play this video.
                            </video>
                        </div>
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base" href="https://meika-kensetsu.com" target='_blank'>
                            <p className="font-semibold">Meika Kensentsu Website</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
                        <div className="w-[90vw] lg:w-[100%] flex justify-center">
                            <video
                                className='w-[80vw] lg:w-[800px] flex justify-center'
                                height={300}
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src={vid06}
                                    type="video/webm"
                                />
                                Your browser cannot play this video.
                            </video>
                        </div>
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base" href="ivoryfoal5.sakura.ne.jp/eikogakuin" target='_blank'>
                            <p className="font-semibold">Eiko Gakuin Website</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
                        <div className="w-[90vw] lg:w-[100%] flex justify-center">
                            <video
                                className='w-[80vw] lg:w-[800px] flex justify-center'
                                height={300}
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src={vid07}
                                    type="video/webm"
                                />
                                Your browser cannot play this video.
                            </video>
                        </div>
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base" href="https://ivoryfoal5.sakura.ne.jp/gorikushi/" target='_blank'>
                            <p className="font-semibold">Gorikushi Website</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
                        <div className="w-[90vw] lg:w-[100%] flex justify-center">
                            <video
                                className='w-[80vw] lg:w-[800px] flex justify-center'
                                height={300}
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src={vid08}
                                    type="video/webm"
                                />
                                Your browser cannot play this video.
                            </video>
                        </div>
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base" href="https://apuribakari.sakura.ne.jp/fuji_aozora/" target='_blank'>
                            <p className="font-semibold">Fuji Aozora Website</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
                        <div className="w-[90vw] lg:w-[100%] flex justify-center">
                            <video
                                className='w-[80vw] lg:w-[800px] flex justify-center'
                                height={300}
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src={vid09}
                                    type="video/webm"
                                />
                                Your browser cannot play this video.
                            </video>
                        </div>
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base" href="https://apuribakari.sakura.ne.jp/towanomori/" target='_blank'>
                            <p className="font-semibold">Towanomori Website</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
                        <div className="w-[90vw] lg:w-[100%] flex justify-center">
                            <video
                                className='w-[80vw] lg:w-[800px] flex justify-center'
                                height={300}
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src={vid10}
                                    type="video/webm"
                                />
                                Your browser cannot play this video.
                            </video>
                        </div>
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base" href="https://homepihahauoli.com/" target='_blank'>
                            <p className="font-semibold">Home Piha Hau’Holi</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
                        <div className="w-[90vw] lg:w-[100%] flex justify-center">
                            <video
                                className='w-[80vw] lg:w-[800px] flex justify-center'
                                height={300}
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src={vid11}
                                    type="video/webm"
                                />
                                Your browser cannot play this video.
                            </video>
                        </div>
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base" href="https://lusso-capstone-project.vercel.app/" target='_blank'>
                            <p className="font-semibold">Macchan Website</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
                        <div className="w-[90vw] lg:w-[100%] flex justify-center">
                            <video
                                className='w-[80vw] lg:w-[800px] flex justify-center'
                                height={300}
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src={vid12}
                                    type="video/webm"
                                />
                                Your browser cannot play this video.
                            </video>
                        </div>
                        <a className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base" href="https://macchan3.com/" target='_blank'>
                            <p className="font-semibold">Lusso Perfumes (KodeGo Capstone Project)</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                </div>
            </section>
            <section className='flex flex-col justify-center items-center gap-[60px]'>
                <h2 className="lg:text-4xl font-medium">
                    Other <span className="text-[#B16064]">Projects.</span>
                </h2>
                <div className='flex flex-col justify-center items-center gap-[100px]'>
                    <div className='w-[80vw] flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]'>
                        <div className='flex justify-center w-full py-[10px] bg-[#B16064] text-[12px] lg:text-[24px] font-medium bg-opacity-25'>
                            <p>Web Design #1</p>
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-[20px] lg:gap-[30px]'>
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web01}
                                alt="Web Design #1 Part 1"
                            />
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web02}
                                alt="Web Design #1 Part 2"
                            />
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web03}
                                alt="Web Design #1 Part 3"
                            />
                        </div>
                    </div>
                    <div className='w-[80vw] flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]'>
                        <div className='flex justify-center w-full py-[10px] bg-[#B16064] text-[12px] lg:text-[24px] font-medium bg-opacity-25'>
                            <p>Web Design #2</p>
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-[20px] lg:gap-[30px]'>
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web04}
                                alt="Web Design #2 Part 1"
                            />
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web05}
                                alt="Web Design #2 Part 2"
                            />
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web06}
                                alt="Web Design #2 Part 3"
                            />
                        </div>
                    </div>
                    <div className='w-[80vw] flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]'>
                        <div className='flex justify-center w-full py-[10px] bg-[#B16064] text-[12px] lg:text-[24px] font-medium bg-opacity-25'>
                            <p>Web Design #3</p>
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-[20px] lg:gap-[30px]'>
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web07}
                                alt="Web Design #3 Part 1"
                            />
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web08}
                                alt="Web Design #3 Part 2"
                            />
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web09}
                                alt="Web Design #3 Part 3"
                            />
                        </div>
                    </div>
                    <div className='w-[80vw] flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]'>
                        <div className='flex justify-center w-full py-[10px] bg-[#B16064] text-[12px] lg:text-[24px] font-medium bg-opacity-25'>
                            <p>Web Design #4</p>
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-[20px] lg:gap-[30px]'>
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web10}
                                alt="Web Design #4 Part 1"
                            />
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web11}
                                alt="Web Design #4 Part 2"
                            />
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web12}
                                alt="Web Design #4 Part 3"
                            />
                        </div>
                    </div>
                    <div className='w-[80vw] flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]'>
                        <div className='flex justify-center w-full py-[10px] bg-[#B16064] text-[12px] lg:text-[24px] font-medium bg-opacity-25'>
                            <p>Web Design #5</p>
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-[20px] lg:gap-[30px]'>
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web13}
                                alt="Web Design #5 Part 1"
                            />
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web14}
                                alt="Web Design #5 Part 2"
                            />
                            <img
                                className="w-[80vw] rounded-[20px] lg:w-[400px] h-[600px] object-cover object-top"
                                src={web15}
                                alt="Web Design #5 Part 3"
                            />
                        </div>
                    </div>
                    <div className='w-[80vw] flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]'>
                        <div className='flex justify-center w-full py-[10px] bg-[#B16064] text-[12px] lg:text-[24px] font-medium bg-opacity-25'>
                            <p>Logo Designs</p>
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-[20px] lg:gap-[30px]'>
                            <img
                                className="w-[30vw] rounded-[20px] lg:w-[200px]"
                                src={logo01}
                                alt="Logo #1"
                            />
                            <img
                                className="w-[30vw] rounded-[20px] lg:w-[200px]"
                                src={logo02}
                                alt="Logo #2"
                            />
                            <img
                                className="w-[30vw] rounded-[20px] lg:w-[200px]"
                                src={logo03}
                                alt="Logo #3"
                            />
                            <img
                                className="w-[30vw] rounded-[20px] lg:w-[200px]"
                                src={logo04}
                                alt="Logo #4"
                            />
                            <img
                                className="w-[30vw] rounded-[20px] lg:w-[200px]"
                                src={logo05}
                                alt="Logo #5"
                            />
                            <img
                                className="w-[30vw] rounded-[20px] lg:w-[200px]"
                                src={logo06}
                                alt="Logo #6"
                            />
                        </div>
                    </div>
                    <div className='w-[80vw] flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]'>
                        <div className='flex justify-center w-full py-[10px] bg-[#B16064] text-[12px] lg:text-[24px] font-medium bg-opacity-25'>
                            <p>Banner Designs</p>
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-[20px] lg:gap-[30px]'>
                            <img
                                className="w-[30vw] w-[500px]"
                                src={banner01}
                                alt="Banner #1"
                            />
                            <img
                                className="w-[30vw] w-[500px]"
                                src={banner02}
                                alt="Banner #1"
                            />
                            <img
                                className="w-[30vw] w-[1000px]"
                                src={banner03}
                                alt="Banner #3"
                            />
                        </div>
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
