import { useEffect, useState } from "react";
import DesignContainer from "../../components/DesignContainer";
import DesignModal from "../../components/DesignModal";

import web01 from "../../assets/img/web01.png";
import web02 from "../../assets/img/web02.png";
import web03 from "../../assets/img/web03.png";
import web04 from "../../assets/img/web04.png";
import web05 from "../../assets/img/web05.png";
import web06 from "../../assets/img/web06.png";
import web07 from "../../assets/img/web07.png";
import web08 from "../../assets/img/web08.png";
import web09 from "../../assets/img/web09.png";
import web10 from "../../assets/img/web10.png";
import web11 from "../../assets/img/web11.png";
import web12 from "../../assets/img/web12.png";
import web13 from "../../assets/img/web13.png";
import web14 from "../../assets/img/web14.png";
import web15 from "../../assets/img/web15.png";
import web16 from "../../assets/img/web16.png";
import web17 from "../../assets/img/web17.png";
import web18 from "../../assets/img/web18.png";
import web19 from "../../assets/img/web19.png";
import web20 from "../../assets/img/web20.png";
import web21 from "../../assets/img/web21.png";
import web22 from "../../assets/img/web22.png";
import web23 from "../../assets/img/web23.png";
import web24 from "../../assets/img/web24.png";
import web25 from "../../assets/img/web25.png";
import web26 from "../../assets/img/web26.png";
import web27 from "../../assets/img/web27.png";
import web28 from "../../assets/img/web28.png";
import web29 from "../../assets/img/web29.png";
import web30 from "../../assets/img/web30.png";

import architecture from "../../assets/img/newprojects/architecture.jpg";
import architecturePop from "../../assets/img/newprojects/architecture-pop.jpg";
import cafe from "../../assets/img/newprojects/cafe.jpg";
import interiorDesign from "../../assets/img/newprojects/interior-design.jpg";
import japaneseRestaurant from "../../assets/img/newprojects/japanese-restaurant.jpg";
import koreanBeauty from "../../assets/img/newprojects/korean-beauty.jpg";
import koreanBeauty2 from "../../assets/img/newprojects/korean-beauty_ver02.jpg";
import poleDanceStudio from "../../assets/img/newprojects/pole-dance-studio.jpg";
import construction from "../../assets/img/newprojects/construction.png";
import corporate from "../../assets/img/newprojects/corporate.png";

import logo01 from "../../assets/img/logo01.png";
import logo02 from "../../assets/img/logo02.png";
import logo03 from "../../assets/img/logo03.png";
import logo04 from "../../assets/img/logo04.png";
import logo05 from "../../assets/img/logo05.png";
import logo06 from "../../assets/img/logo06.png";

import banner01 from "../../assets/img/banner01.png";
import banner02 from "../../assets/img/banner02.png";
import banner03 from "../../assets/img/banner03.webp";

const designs = [
  {
    images: [web16, web17, web18],
    fullImage: architecture,
    title: "Web Design #1",
  },
  {
    images: [web19, web20, web21],
    fullImage: cafe,
    title: "Web Design #2",
  },
  {
    images: [web22, web23, web24],
    fullImage: architecturePop,
    title: "Web Design #3",
  },
  {
    images: [web25, web26, web27],
    fullImage: japaneseRestaurant,
    title: "Web Design #4",
  },
  {
    images: [web28, web29, web30],
    fullImage: interiorDesign,
    title: "Web Design #5",
  },
  {
    images: [web01, web02, web03],
    fullImage: poleDanceStudio,
    title: "Web Design #6",
  },
  {
    images: [web04, web05, web06],
    fullImage: koreanBeauty,
    title: "Web Design #7",
  },
  {
    images: [web07, web08, web09],
    fullImage: koreanBeauty2,
    title: "Web Design #8",
  },
  {
    images: [web10, web11, web12],
    fullImage: corporate,
    title: "Web Design #9",
  },
  {
    images: [web13, web14, web15],
    fullImage: construction,
    title: "Web Design #10",
  },
];

const PersonalProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-[60px]">
        <h2 className="lg:text-4xl font-medium">
          Personal <span className="text-[#B16064]">Projects.</span>
        </h2>
        <div className="flex flex-col justify-center items-center gap-[100px]">
          {designs.map((design, index) => (
            <DesignContainer
              key={index}
              images={design.images}
              fullImage={design.fullImage}
              title={design.title}
              type="web"
              openModal={openModal}
            />
          ))}
          <DesignContainer
            images={[logo01, logo02, logo03, logo04, logo05, logo06]}
            title="Logo Designs"
            type="logo"
            openModal={openModal}
          />
          <DesignContainer
            images={[banner01, banner02, banner03]}
            title="Banner Designs"
            type="banner"
            openModal={openModal}
          />
        </div>
      </section>
      {isModalOpen && <DesignModal image={modalImage} onClose={closeModal} />}
    </>
  );
};

export default PersonalProjects;