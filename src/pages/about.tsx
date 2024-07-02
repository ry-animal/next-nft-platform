import { type NextPage } from "next";

import { Scaffold } from "../components/Scaffold";
import Link from "next/link";

const teamMembers = [
  {
    name: "Jesse",
    title: "Co-Founder/CEO",
    image:
      "https://images.ctfassets.net/41kfxpgp408w/4p6gKlCLSypbTbqMYeGpaU/4d4a281f115654607ccc4b3bc4b1ecb3/Jesse_Dylan.png",
  },
  {
    name: "Walter",
    title: "Co-Founder",
    image:
      "https://images.ctfassets.net/41kfxpgp408w/5I6rDSges0Tl5CcETxLMEq/fa8293c62039d2e28d5a1283446157f6/walter_de_brouwer.png",
  },
  {
    name: "Jeff",
    title: "Co-Founder",
    image:
      "https://images.ctfassets.net/41kfxpgp408w/5LH0naW10Aub2fYeIaL4ke/74f373ed269f9149cddc123b8a79be85/snowcrash-jeff-rosen.png",
  },
  {
    name: "Sam",
    title: "Director of the Board",
    image:
      "https://images.ctfassets.net/41kfxpgp408w/1xO2P08K5UObHxUFeaBCYH/27bd590d85c91461984ae77a757e4b4b/sam_de_brouwer.png",
  },
  {
    name: "Marina",
    title: "Smart Contracts",
    image:
      "https://images.ctfassets.net/41kfxpgp408w/11w67qxVAvzgijGEnMw0v0/92073ddf14ebfced600ec39c4bff945a/Marina_Titova.png",
  },
  {
    name: "Brandon",
    title: "Product Marketing",
    image:
      "https://images.ctfassets.net/41kfxpgp408w/6PMcYDKgw2lMMhtgLSc1MP/cd19a95744fbb6cf112c18d8b588a7e9/brandon.png",
  },
  {
    name: "Ana",
    title: "Social Media Manager",
    image:
      "https://images.ctfassets.net/41kfxpgp408w/7xC4IIwC0yJnZgBAPdk6IJ/a29f57c8a70b8d2161826935350a0754/ana.png",
  },
  {
    name: "Galen",
    title: "Product Design",
    image:
      "https://images.ctfassets.net/41kfxpgp408w/5aK4pjZnvQG2NXGfRPOwYs/069d826d824471cba818266a58c41937/galenhogg.png",
  },
  ,
  {
    name: "Geert",
    title: "Engineering",
    image:
      "https://images.ctfassets.net/41kfxpgp408w/4i07sK5qQdeeucwJJQQrEA/c62c38ef8756847e60e6944da93968af/geert.png",
  },
];
const About: NextPage = () => {
  return (
    <Scaffold>
      <div className="flex w-full flex-col items-start justify-between border-b border-black px-4 pb-10 pt-[5rem] md:flex-row md:items-center md:px-9 md:pb-20 md:pt-[8rem]">
        <h1 className="w-full font-bungeeshade text-[40px] font-thin leading-[50px] text-black md:w-[70%] md:text-[100px] md:leading-[120px] ">
          About SNOWGPT
        </h1>
        <div>
          <img
            className="w-[150px] md:w-fit"
            src="/images/about/aboutHeroSec.svg"
            alt=""
          />
        </div>
      </div>

      <div className="flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-col md:w-[80%]">
          <div className="flex w-full flex-col items-start justify-start border-r  border-b border-black px-4 pt-[40px] pb-[40px] md:px-9 md:pb-[60px]">
            <h5 className="mb-[14px] font-bungee text-[18px] leading-[25px] text-black">
              History
            </h5>
            <p className="mb-[40px] w-full font-poppins text-[16px] leading-[25px] text-black md:mb-[60px] md:w-[95%] md:leading-[22px]">
              Our mission is to bring inspiration, innovation and ownership to artists around the world. Snowcrash is building web3 software and the services to empower leading artists, publishers, and brands community, value, and ownership.
              <br />
              <br />
              Snowcrash has entered into several high-profile partnerships with premium brands including Sony Music and The Universal Music Group. In the next several months Snowcrash together with Sony Music and The Universal Music Group will be releasing unique NFTs of Bob Dylan's, and Miles Davis' iconic works. 
            </p>
            <div className="mb-[40px] flex w-full flex-col items-center justify-start md:mb-[60px] md:w-fit md:flex-row">
              <img
                src="/images/about/history1.png"
                alt=""
                className="md_mb-[0] mr-[0] mb-2 w-full md:mr-[20px] md:w-fit"
              />
              <img
                className="md_mb-[0] mb-2 w-full md:w-fit "
                src="/images/about/history2.png"
                alt=""
              />
            </div>
            <div className="w-full font-neutral text-[45px] font-bold text-black md:w-[80%] md:text-[60px]">
              “Snowcrash was established on 2017”
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-start  border-r border-b border-black px-4 pt-[40px] pb-[40px] md:px-9 md:pb-[60px]">
            <h5 className="mb-[14px] font-bungee text-[18px] leading-[25px] text-black">
              Goals and Targets
            </h5>
            <p className="mb-[40px] w-full font-poppins text-[16px] leading-[22px] text-black md:mb-[60px] md:w-[95%]">
              Our innovative creative studio empowers leading artists, publishers, and brands to curate an accessible, frictionless, and fast experience for buyers, sellers, and creators of NFTs.              <br />
              <br />
              We bring web3 ideas to life with a lower environmental footprint by taking a novel approach for each project that empowers and unlocks the untapped creative and economic potential of NFTs. 
              <br />
              <br />
              Our focus is on technology, marketing, content creation, and financial and security advantages. We provide all the elements needed to design, launch, and scale digital assets and virtual experiences.
            </p>
            <video className="h-[230px] w-full md:h-[430px]" controls>
              <source src="myvideo.mp4" type="video/mp4" />
              <source src="myvideo.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="flex h-fit w-full flex-row overflow-x-scroll overflow-y-scroll px-4 pt-[40px] md:h-[1550px] md:w-[20%] md:flex-col md:overflow-x-hidden md:px-[60px]">
          {teamMembers.map((member) => {
            return (
              <div className="md:flex-shrink-1 mb-[0] mr-[20px] flex w-[150px] flex-shrink-0 flex-col md:mb-[60px] md:mr-[0] md:w-[150px]">
                <img
                  src={member?.image}
                  alt=""
                  className="mix-blend-luminosity drop-shadow-md filter md:shadow-[6px_10px_0_0_#000000]"
                />
                <span className="mt-[20px] mb-[10px] text-center font-neutral text-[16px] font-bold text-black md:text-[18px]">
                  {member?.name}
                </span>
                <span className="text-center font-neutral text-[12px] font-thin text-black md:text-[16px]">
                  {member?.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-4 pt-[50px] pb-[50px] md:px-[0]">
        <span className="mb-[20px] text-center font-neutral text-[16px] font-thin text-black md:text-left md:text-[18px]">
          Have any questions?
        </span>
        <div className="flex w-fit items-center">
          <Link href="/faq">
            <button className="h-[35px] w-[80px] content-center items-center justify-center border border-black bg-transparent pb-1 pt-2  font-neutral text-[16px] leading-[0] text-black">
              FAQ
            </button>
          </Link>
          <Link href="/contact">
            <button className="ml-3 h-[35px] w-[165px] content-center items-center  justify-center border border-transparent bg-black pb-1 pt-2  font-neutral text-[16px] leading-[0] text-white">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </Scaffold>
  );
};

export default About;
