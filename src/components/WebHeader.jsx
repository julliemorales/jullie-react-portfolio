import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const WebHeader = () => {
  return (
    <header className="border-b border-solid border-[#333333] w-[100%]">
      <div className="flex mx-[100px] my-[30px] justify-between items-center">
        <Link
          className="px-[10px] py-[5px] lg:px-[20px] lg:py-[10px] border border-solid border-[#333333] text-2xl hover:bg-[#B16064] hover:text-[#FFDFE0]"
          to="/"
        >
          jullie angeli.
        </Link>
        <div className="flex gap-[60px]">
          <ul className="flex gap-[60px] items-center">
            <li>
              <Link className="text-[#333333] hover:text-opacity-50" to="/">
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
              <Link className="text-[#333333] hover:text-opacity-50" to="/">
                Experience
              </Link>
            </li>
            <li>
              <Link className="text-[#333333] hover:text-opacity-50" to="/">
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
  );
};

export default WebHeader;
