/* eslint-disable react/prop-types */
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoContainer = ({ video }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
      <div className="w-[90vw] lg:w-[100%] flex justify-center">
        <video
          className="w-[80vw] lg:w-[800px] flex justify-center"
          height={300}
          autoPlay
          muted
          loop
        >
          <source src={video.src} type="video/webm" />
          Your browser cannot play this video.
        </video>
      </div>
      <a
        className="flex items-center gap-[10px] text-[#B16064] hover:text-[#743d44] text-xs lg:text-base"
        href={video.link}
        target="_blank"
      >
        <p className="font-semibold">{video.title}</p>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    </div>
  );
};

export default VideoContainer;
