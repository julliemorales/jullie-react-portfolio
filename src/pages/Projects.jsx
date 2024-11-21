import Layout from "./Layout";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import linkedIn from "../assets/img/linkedin.svg";
import { Link } from "react-router-dom";
import WebDesignProjects from "./projects/WebDesignProjects";
import PersonalProjects from "./projects/PersonalProjects";
import WebHeader from "../components/WebHeader";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    const navIcon = document.getElementById("nav-icon");
    if (navIcon) {
      navIcon.addEventListener("click", toggleHamburger);
    }

    return () => {
      if (navIcon) {
        navIcon.removeEventListener("click", toggleHamburger);
      }
    };
  }, [isOpen, toggleHamburger]);

  return (
    <Layout>
      <WebHeader />
      <nav className="border-b border-solid border-[#333333] w-[100vw] bg-nav">
        <div className="navWrapper">
          <Link
            className="px-[10px] py-[5px] lg:px-[20px] lg:py-[10px] text-xs lg:text-2xl border border-solid border-[#333333] hover:bg-[#B16064] hover:text-[#FFDFE0] sm:text-base"
            to="/"
          >
            jullie angeli.
          </Link>
          <div className="right">
            <div id="nav-icon" className={isOpen ? "open" : ""}>
              <span />
              <span />
              <span />
            </div>
            <div className={`overlay ${isOpen ? "open" : ""}`}>
              <div className="overlayContent">
                <Link className={`${isOpen ? "open" : ""}`} to="/">
                  Home
                </Link>
                <Link className={`${isOpen ? "open" : ""}`} to="/">
                  My Experiences
                </Link>
                <Link className={`${isOpen ? "open" : ""}`} to="/">
                  My Skills
                </Link>
                <a
                  className={`flex d-flex items-center justify-center gap-[10px] px-[20px] py-[10px] border border-solid border-[#FFDFE0]
}                                               ${isOpen ? "open" : ""}`}
                  href="mailto:jullieangelimorales05@gmail.com"
                  download
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-[16px]" />
                  <div className="text-[16px]">Contact Me</div>
                  {/* <i className="text-[16px] fa-solid fa-download" /> */}
                </a>
                <a
                  href="https://www.linkedin.com/in/moralesjullie/"
                  className={`${isOpen ? "open" : ""}`}
                >
                  <img className="filter-pink" src={linkedIn} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <WebDesignProjects />
      <PersonalProjects />
      <div className="flex flex-col w-full">
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
};
export default Projects;
