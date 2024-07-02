import IconDiscord from "../assets/IconDiscord";
import IconInstagram from "../assets/IconInstagram";
import IconLinkedIn from "../assets/IconLinkedIn";
import IconTwitter from "../assets/IconTwitter";

export const NAVIGATION_SOCIAL = (fill: string = "rgb(163 163 163)") => [
  {
    key: "twitter",
    value: "Twitter",
    href: "https://twitter.com/SnowcrashNFT",
    icon: <IconTwitter fill={fill} />,
  },
  {
    key: "discord",
    value: "Discord",
    href: "https://discord.gg/Snowcrash",
    icon: <IconDiscord fill={fill} />,
  },
  {
    key: "linkedin",
    value: "Linkedin",
    href: "https://www.linkedin.com/company/snowcrash",
    icon: <IconLinkedIn fill={fill} />,
  },
  {
    key: "instagram",
    value: "Instagram",
    href: "https://www.instagram.com/snowcrashnft",
    icon: <IconInstagram fill={fill} />,
  },
];
