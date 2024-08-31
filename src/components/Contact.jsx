import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import linkedIn from '../assets/img/linkedin.svg'
import gitHub from '../assets/img/github.png'

const Contact = () => {

    return (
        <section className='flex flex-col items-center justify-center gap-[60px] py-[100px] border-t border-b border-solid border-[#333333]'>
                    <h2 className="text-4xl font-medium">
                        Contact <span className="text-[#B16064]">Me.</span>
                    </h2>
                    <div className='flex flex-col items-center justify-center gap-[30px]'>
                        <div className="text-[#B16064] flex justify-center items-center gap-[60px] flex-wrap max-w-[1000px]">
                            <a className='flex justify-center items-center gap-[10px] w-[300px] text-[14px] lg:text-base lg:w-[400px] py-[15px] border border-solid border-[#B16064] hover:bg-[#B16064] hover:text-[#FFDFE0]' href='mailto:jullieangelimorales05@gmail.com'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>jullieangelimorales05@gmail.com</p>
                            </a>
                            <a className='flex justify-center items-center gap-[10px] w-[300px] text-[14px] lg:text-base lg:w-[400px] py-[15px] border border-solid border-[#B16064] hover:bg-[#B16064] hover:text-[#FFDFE0]' href='tel:09173089377'>
                                <FontAwesomeIcon icon={faPhone} />
                                <p>+63 9173089377</p>
                            </a>
                            <div className='flex justify-center items-center gap-[10px] w-[300px] text-[14px] lg:text-base lg:w-[400px] py-[15px] border border-solid border-[#333333] text-[#FFDFE0] bg-[#B16064]'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p>Cavite, Philippines</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-[60px]'>
                            <a href="https://www.linkedin.com/in/moralesjullie/">
                                <img
                                    src={linkedIn}
                                    alt="LinkedIn"
                                />
                            </a>
                            <a href="https://github.com/julliemorales">
                                <img
                                    src={gitHub}
                                    alt="Github"
                                />
                            </a>
                        </div>
                    </div>
                </section>
    );
};

export default Contact;
