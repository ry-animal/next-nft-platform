import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MarqueeProps {
  isBlue?: boolean;
}

const Marquee = (props: MarqueeProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const marqueeConfig = [
    {
      title: "CONTACT",
      link: "/contact",
    },
    {
      title: "ABOUT US",
      link: "/about",
    },
    {
      title: "FAQ",
      link: "/faq",
    },
    {
      title: "COLLECTIONS",
      link: "/collections",
    },
    {
      title: "EXCLUSIVE",
      // TODO: link to exclusive collection via env?
      link: "/collection/bb0f099a-6d1f-4a4c-b4af-62238246da31",
    },
  ];

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  const renderMarqueeContent = () => (
    <>
      {marqueeConfig.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="hover:cursor hover:underline-white flex gap-4 text-xl sm:text-3xl underline-offset-4  hover:underline"
        >
          {item.title}
          <Image
            src="/images/home/arrow.svg"
            alt="arrow"
            className="h-[20px] w-[20px] mt-1 sm:h-[26px] sm:w-[26px]"
            width={26}
            height={26}
          />
        </a>
      ))}
    </>
  );

  return (
    <div
      className={
        props.isBlue
          ? "relative flex h-[60px] sm:h-[96px] overflow-x-hidden bg-[#4361EE] text-white  transition-all"
          : "relative flex h-[60px] sm:h-[96px] overflow-x-hidden bg-black text-white transition-all"
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex items-center space-x-48 whitespace-nowrap"
        variants={marqueeVariants}
        animate={isHovering ? "paused" : "animate"}
        whileHover={{}} // Add this line
      >
        {renderMarqueeContent()}
        {renderMarqueeContent()}
      </motion.div>
    </div>
  );
};

export default Marquee;
