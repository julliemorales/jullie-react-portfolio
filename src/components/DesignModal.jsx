import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const DesignModal = ({ image, onClose }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(true);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[99] transition-all duration-300 ease-in-out"
      onClick={onClose}
    >
      <FontAwesomeIcon
        className="absolute top-10 right-10 hover:scale-125 hover:cursor-pointer transition-transform duration-300 ease-in-out"
        size="2x"
        icon={faClose}
        onClick={onClose}
      />
      <div
        className={`rounded-lg overflow-y-scroll h-[calc(100vh-300px)] w-11/12 transition-transform duration-500 ease-in-out scale-100 ${
          isImageLoaded ? "scale-100" : "scale-50"
        } custom-scrollbar`}
      >
        <img src={image} alt="modal" onLoad={() => setIsImageLoaded(true)} />
      </div>
    </div>
  );
};

export default DesignModal;
