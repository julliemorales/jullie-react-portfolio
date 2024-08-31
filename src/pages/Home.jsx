import { faArrowUpRightFromSquare, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import myProfileImage from '../assets/img/jullie-img.png';
import certification from '../assets/img/certification.png';
import figmaLogo from '../assets/img/figma.png'
import htmlLogo from '../assets/img/html.png'
import cssLogo from '../assets/img/css.png'
import jsLogo from '../assets/img/js.png'
import tailwindLogo from '../assets/img/tailwind.png'
import bootstrapLogo from '../assets/img/bootstrap.png'
import psLogo from '../assets/img/ps.png'
import aiLogo from '../assets/img/ai.png'
import linkedIn from '../assets/img/linkedin.svg'
import vid01 from '../assets/vid/mari-fortune.webm'
import vid02 from '../assets/vid/iahome.webm'
import vid03 from '../assets/vid/nagoya-sumiya.webm'
import runDelaunay from '../utils/delaunayBackground';
import pdf from '../assets/files/JULLIE_ANGELI_S_MORALES.pdf'

// TODO: Import images directly

const Home = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            runDelaunay(canvasRef.current);
        }
    }, []);

    return (
        <Layout>
            <Navbar />
            <section className="flex flex-col gap-[30px] justify-center items-start w-[80%] mt-[150px] lg:mt-[unset] items-center md:items-center">
                <div className="flex gap-[30px] flex-col md:flex-row items-center md:items-start">
                    <div>
                        <img
                            src={myProfileImage}
                            alt="Jullie Image"
                        />
                    </div>
                    <div className="flex flex-col w-[80%] lg:w-[600px] justify-center gap-[10px]">
                        <div className="flex flex-col">
                            <p className="uppercase lg:text-[16px] text-[12px]">Philippine Based</p>
                            <p className="lg:text-[64px] text-[34px]">Web Designer.</p>
                        </div>
                        <div className="flex flex-col gap-[30px]">
                            <p className="lg:text-[16px] text-[14px]">
                                Hello! I&apos;m
                                <span className="font-bold text-[#B16064] lg:text-[16px] text-[14px]">
                                &nbsp;Jullie Angeli S. Morales
                                </span>
                                , a dedicated web designer with over a year of experience in
                                creating visually stunning and user-friendly designs. I specialize
                                in using Figma to bring creative ideas to life and ensure a seamless
                                user experience.
                            </p>
                            <div className="flex items-center gap-[20px] hidden lg:flex">
                                <a
                                    className="flex items-center gap-[10px] px-[20px] py-[10px] border border-solid border-[#333333] hover:bg-[#333333] hover:text-[#FFDFE0]"
                                    href={pdf}
                                    target="_blank"
                                    download
                                >
                                    <div>Download my CV</div>
                                    <FontAwesomeIcon
                                        icon={faDownload}
                                        className="text-[16px]"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/in/moralesjullie/">
                                    <img
                                    src={linkedIn}
                                    alt="LinkedIn"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-[20px] lg:hidden">
                    <a
                        className="flex items-center gap-[10px] px-[20px] py-[10px] border border-solid border-[#333333] hover:bg-[#333333] hover:text-[#FFDFE0]"
                        href={pdf}
                        target="_blank"
                        download
                    >
                        <div>Download my CV</div>
                        <FontAwesomeIcon
                            icon={faDownload}
                            className="text-[16px]"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/moralesjullie/">
                        <img
                            src={linkedIn}
                            alt="LinkedIn"
                        />
                    </a>
                </div>
            </section>
            <section className="d-none">
                <div className="marquee">
                    <span>Jullie Angeli Morales&nbsp;</span>
                    <span>Jullie Angeli Morales&nbsp;</span>
                    <span>Jullie Angeli Morales&nbsp;</span>
                    <span>Jullie Angeli Morales&nbsp;</span>
                </div>
            </section>
            <section
                className="flex flex-col justify-center items-center gap-[60px] d-none"
                id="projects"
            >
                <div>
                    <h2 className="text-xl lg:text-4xl font-medium">
                        My <span className="text-[#B16064]">Projects.</span>
                    </h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-[60px] lg:px-[200px] lg:border-x lg:border-solid lg:border-[#333333]">
                    <div className="flex flex-col justify-center items-center gap-[30px] max-w-[600px] pb-[60px] border-b border-solid border-[#b0b0b0]">
                        <div className="lg:w-[100%]">
                            <video
                                className='w-[80vw] lg:w-[600px] flex justify-center'
                                height={300}
                                src={vid01}
                                autoPlay
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[30px]">
                            <div className="flex flex-col justify-center items-center gap-[10px] max-w-[80vw]">
                                <p className="font-semibold">Mari Fortune Landing Page</p>
                                <p className="text-center font-light text-[12px] lg:text-[16px]">
                                    A landing page for a Tarot reading business in Japan. Its
                                    primary purpose is to support marketing and advertising
                                    campaigns.
                                </p>
                            </div>
                            <div className="flex items-center gap-[60px]">
                                <div>
                                    <a
                                        className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44]"
                                        href="https://lp.mari-fortune.jp" target='_blank'
                                    >
                                        <p className="font-semibold">Website</p>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </a>
                                </div>
                                {/* <div>
                                    <a
                                        className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44]"
                                        href="#"
                                    >
                                        <p className="font-semibold">Figma File</p>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[30px] max-w-[600px] pb-[60px] border-b border-solid border-[#b0b0b0]">
                        <div className="lg:w-[100%]">
                            <video
                                className='w-[80vw] lg:w-[600px] flex justify-center'
                                height={300}
                                src={vid02}
                                autoPlay
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[30px]">
                            <div className="flex flex-col justify-center items-center gap-[10px] max-w-[80vw]">
                                <p className="font-semibold">IAHome</p>
                                <p className="text-center font-light text-[12px] lg:text-[16px]">
                                    An MEO website for a company that handles all types of home
                                    construction work, including kitchen, bathroom, and toilet
                                    renovations, small plumbing repairs, exterior wall painting, and
                                    roofing projects.
                                </p>
                            </div>
                            <div className="flex items-center gap-[60px]">
                                <div>
                                    <a
                                        className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44]"
                                        href="https://purpledingo3.sakura.ne.jp/iahome/" target='_blank'
                                    >
                                        <p className="font-semibold">Website</p>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </a>
                                </div>
                                {/* <div>
                                    <a
                                        className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44]"
                                        href="#"
                                    >
                                        <p className="font-semibold">Figma File</p>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[30px] max-w-[600px] pb-[60px] border-b border-solid border-[#b0b0b0]">
                        <div className="lg:w-[100%]">
                            <video
                                className='w-[80vw] lg:w-[600px] flex justify-center'
                                height={300}
                                src={vid03}
                                autoPlay
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[30px]">
                            <div className="flex flex-col justify-center items-center gap-[10px] max-w-[80vw]">
                                <p className="font-semibold">Nagoya Sumiya</p>
                                <p className="text-center font-light text-[12px] lg:text-[16px]">
                                    A MEO website tailored for a restaurant specializing in
                                    authentic Japanese cuisine. This website is designed to enhance
                                    the restaurant&rsquo;s visibility on map-based search platforms
                                    like Google Maps, making it easier for potential customers to
                                    find and visit.
                                </p>
                            </div>
                            <div className="flex items-center gap-[60px]">
                                <div>
                                    <a
                                        className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44]"
                                        href="https://nagoya-sumiya.jp" target='_blank'
                                    >
                                        <p className="font-semibold">Website</p>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </a>
                                </div>
                                {/* <div>
                                    <a
                                        className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44]"
                                        href="#"
                                    >
                                        <p className="font-semibold">Figma File</p>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link
                            className="px-[20px] py-[10px] border border-solid border-[#333333] hover:bg-[#333333] hover:text-[#FFDFE0]"
                            to="/projects"
                        >
                            See More Projects
                        </Link>
                    </div>
                </div>
            </section>
            <section
                className="relative w-full d-none"
                id="experiences"
            >
                <canvas
                    id="stars"
                    className='h-[1500px] lg:h-[1800px]'
                    ref={canvasRef}
                >
                    {' '}
                </canvas>
                <div className="absolute top-0 left-0 right-0 w-[80%] mx-auto my-0 p-0">
                    <div className="py-[200px] flex flex-col gap-[100px]">
                        <h2 className="text-xl lg:text-4xl font-medium text-[#FFDFE0]">
                            My{' '}
                            <span className="text-[#e8979b]">Experiences and Certifications.</span>
                        </h2>
                        <div className="border-l-2 border-solid border-[#e8979b] pl-[40px] py-[40px] flex flex-col gap-[60px]">
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex flex-col gap-[5px]">
                                    <div className="absolute w-3 h-3 bg-pink-200 rounded-full mt-1.5 left-[-5px] border border-white border-white-200 bg-pink-200" />
                                    <div className="font-base text-base lg:text-xl text-[#FFDFE0]">
                                        Web Designer / Junior Web Developer
                                    </div>
                                    <div className="font-light text-[#e8979b] text-xs lg:text-base">
                                        Rightcore Inc. |{' '}
                                        <span className="text-[#FFDFE0] font-thin">
                                            March 2023 - Present
                                        </span>
                                    </div>
                                </div>
                                <ul className="font-extralight text-[#FFDFE0] list-disc flex flex-col gap-[5px] text-xs lg:text-base">
                                    <li>
                                        Designed websites, posters, and logos using mainly Figma and
                                        sometimes Photoshop, Illustrator, and Canva by
                                        self-learning.
                                    </li>
                                    <li>
                                        Designed and developed visually appealing and user-friendly
                                        websites for various clients based on their preferences.
                                    </li>
                                    <li>
                                        Collaborated with my team to understand project requirements
                                        and deliver tailored web solutions.
                                    </li>
                                    <li>Created Logos and Banners for clients to use.</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <img
                                    className="w-[50vw] lg:w-[30vw]"
                                    src={certification}
                                    alt="KodeGo Certificate"
                                />
                                <div className="flex flex-col gap-[20px]">
                                    <div className="flex flex-col gap-[5px]">
                                        <div className="absolute w-3 h-3 bg-pink-200 rounded-full mt-1.5 left-[-5px] border border-white border-white-200 bg-pink-200" />
                                        <div className="font-base text-base lg:text-xl text-[#FFDFE0]">
                                            Full-Stack Web Development Bootcamp
                                        </div>
                                        <div className="font-light text-[#e8979b] text-xs lg:text-base">
                                            Kodego |{' '}
                                            <span className="text-[#FFDFE0] font-thin">
                                                July 2022 - October 2022
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="font-extralight text-[#FFDFE0] list-disc flex flex-col gap-[5px] text-xs lg:text-base">
                                        <li>
                                            Learned the basics of HTML, CSS, VanillaJS, ReactJS,
                                            NodeJS, etc.
                                        </li>
                                        <li>Awarded as the Best in Mini Project 1</li>
                                        <li>Awarded as one of the top students.</li>
                                        <li>Awarded as the Top 3 in Canvas Activities.</li>
                                        <li>Proficient in Front-End Web Development.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex flex-col gap-[5px]">
                                    <div className="absolute w-3 h-3 bg-pink-200 rounded-full mt-1.5 left-[-5px] border border-white border-white-200 bg-pink-200" />
                                    <div className="font-base text-base lg:text-xl text-[#FFDFE0]">
                                        Cloud Tech Support New Associate / IT Operations Associate
                                    </div>
                                    <div className="font-light text-[#e8979b] text-xs lg:text-base">
                                        Accenture Philippines Inc. |{' '}
                                        <span className="text-[#FFDFE0] font-thin">
                                            October 2020 - July 2022
                                        </span>
                                    </div>
                                </div>
                                <ul className="font-extralight text-[#FFDFE0] list-disc flex flex-col gap-[5px] text-xs lg:text-base">
                                    <li>Technical/Operations Support of the Client.</li>
                                    <li>Was one of the Top Performers in our team.</li>
                                    <li>
                                        Was tagged as the Productivity Raven for a whole quarter.
                                    </li>
                                    <li>
                                        Was recognized as one of the high-performing individuals as
                                        of March 15, 2021.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills" className='flex items-center justify-center flex-wrap gap-[50px] lg:gap-[60px] max-w-[80vw] lg:max-w-[1000px]'>
                <img className='h-[50px] lg-h-[100px]' src={figmaLogo} alt="Figma Logo" />
                <img className='h-[50px] lg-h-[100px]' src={htmlLogo} alt="HTML5 Logo" />
                <img className='h-[50px] lg-h-[100px]' src={cssLogo} alt="CSS Logo" />
                <img className='h-[50px] lg-h-[100px]' src={jsLogo} alt="JavaScript Logo" />
                <img className='h-[50px] lg-h-[100px]' src={tailwindLogo} alt="TailwindCSS Logo" />
                <img className='h-[50px] lg-h-[100px]' src={bootstrapLogo} alt="Bootstrap Logo" />
                <img className='h-[50px] lg-h-[100px]' src={psLogo} alt="Photoshop Logo" />
                <img className='h-[50px] lg-h-[100px]' src={aiLogo} alt="Illustrator Logo" />
            </section>
            <div className='flex flex-col w-full'>
                <Contact />
                <Footer />
            </div>
        </Layout>
    );
};
export default Home;
