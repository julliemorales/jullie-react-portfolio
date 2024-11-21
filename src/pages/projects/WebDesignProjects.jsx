import VideoContainer from "../../components/VideoContainer";

import vid01 from "../../assets/vid/mari-fortune.webm";
import vid02 from "../../assets/vid/iahome.webm";
import vid03 from "../../assets/vid/nagoya-sumiya.webm";
import vid04 from "../../assets/vid/ldhcom.webm";
import vid05 from "../../assets/vid/meika-kensetsu.webm";
import vid06 from "../../assets/vid/eiko-gakuin.webm";
import vid07 from "../../assets/vid/gorikushi.webm";
import vid08 from "../../assets/vid/fuji-aozora.webm";
import vid09 from "../../assets/vid/towanomori.webm";
import vid10 from "../../assets/vid/home-piha-hauoli.webm";
import vid11 from "../../assets/vid/macchan.webm";
import vid12 from "../../assets/vid/lusso.webm";

const videos = [
  {
    src: vid01,
    title: "Mari Fortune Landing Page",
    link: "https://lp.mari-fortune.jp",
  },
  {
    src: vid02,
    title: "IAHome MEO Website",
    link: "https://purpledingo3.sakura.ne.jp/iahome/",
  },
  {
    src: vid03,
    title: "Nagoya Sumiya MEO Website",
    link: "https://nagoya-sumiya.jp",
  },
  {
    src: vid04,
    title: "L-D-H com Website",
    link: "https://ivoryfoal5.sakura.ne.jp/ldhcom/index.html",
  },
  {
    src: vid05,
    title: "Meika Kensentsu Website",
    link: "https://meika-kensetsu.com",
  },
  {
    src: vid06,
    title: "Eiko Gakuin Website",
    link: "https://ivoryfoal5.sakura.ne.jp/eikogakuin",
  },
  {
    src: vid07,
    title: "Gorikushi Website",
    link: "https://ivoryfoal5.sakura.ne.jp/gorikushi/",
  },
  {
    src: vid08,
    title: "Fuji Aozora Website",
    link: "https://apuribakari.sakura.ne.jp/fuji_aozora/",
  },
  {
    src: vid09,
    title: "Towanomori Website",
    link: "https://apuribakari.sakura.ne.jp/towanomori/",
  },
  {
    src: vid10,
    title: "Home Piha Hau’Holi",
    link: "https://homepihahauoli.com/",
  },
  {
    src: vid11,
    title: "Macchan Website",
    link: "https://macchan3.com/",
  },
  {
    src: vid12,
    title: "Lusso Perfumes (KodeGo Capstone Project)",
    link: "https://lusso-capstone-project.vercel.app/",
  },
];

const WebDesignProjects = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-[60px] pt-[150px] lg:pt-[0px]">
      <h2 className="lg:text-4xl font-medium">
        My <span className="text-[#B16064]">Web Design Projects.</span>
      </h2>
      <div className="flex flex-wrap justify-center align-center max-w-[1800px] gap-[30px] lg:gap-[100px]">
        {videos.map((video, index) => (
          <VideoContainer key={index} video={video} />
        ))}
      </div>
    </section>
  );
};

export default WebDesignProjects;
