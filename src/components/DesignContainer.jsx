/* eslint-disable react/prop-types */
const WebImages = ({ src, title, openModal, fullImage }) => {
  return (
    <img
      className="w-[30vw] h-[200px] rounded-[10px] lg:w-[30vw] lg:rounded-[20px] lg:w-[400px] lg:h-[600px] object-cover object-top"
      src={src}
      alt={title}
      onClick={() => openModal(fullImage)}
    />
  );
};

const LogoImages = ({ src, title }) => {
  return (
    <img
      className="w-[30vw] rounded-[20px] lg:w-[200px]"
      src={src}
      alt={title}
      // onClick={() => openModal(src)}
    />
  );
};
const CoverImages = ({ src, title }) => {
  return (
    <img
      className="w-[30vw] rounded-[20px] lg:w-[500px]"
      src={src}
      alt={title}
      // onClick={() => openModal(src)}
    />
  );
};

const BannerImages = ({ src, title }) => {
  return (
    <img
      className="w-[30vw] w-[500px]"
      src={src}
      alt={title}
      // onClick={() => openModal(src)}
    />
  );
};

const DesignContainer = ({
  images,
  fullImage,
  title,
  type = "web",
  openModal,
}) => {
  return (
    <div className="w-[80vw] flex flex-col justify-center items-center gap-[20px] lg:gap-[30px]">
      <div className="flex justify-center w-full py-[10px] bg-[#B16064] text-[12px] lg:text-[24px] font-medium bg-opacity-25">
        <p>{title}</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-[20px] lg:gap-[30px] designHover">
        {images.map((image, index) => {
          switch (type) {
            case "web":
              return (
                <WebImages
                  key={index}
                  src={image}
                  fullImage={fullImage}
                  title={`${title} Part ${index + 1}`}
                  openModal={openModal}
                />
              );
            case "cover":
              return (
                <CoverImages
                  key={index}
                  src={image}
                  title={`${title} Part ${index + 1}`}
                  openModal={openModal}
                />
            );
            case "logo":
              return (
                <LogoImages
                  key={index}
                  src={image}
                  title={`${title} Part ${index + 1}`}
                  openModal={openModal}
                />
              );
            case "banner":
              return (
                <BannerImages
                  key={index}
                  src={image}
                  title={`${title} Part ${index + 1}`}
                  openModal={openModal}
                />
              );
            default:
              return;
          }
        })}
      </div>
    </div>
  );
};

export default DesignContainer;
