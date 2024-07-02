import { type NextPage } from "next";

import { Scaffold } from "../components/Scaffold";
import Link from "next/link";
import { useState } from "react";

const Contact: NextPage = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(message);
    console.log(name);
    console.log(email);
  };

  return (
    <Scaffold>
      <div className="flex w-full flex-col items-start justify-between border-b border-black px-4 pb-10 pt-[5rem] md:flex-row  md:items-center md:px-9 md:pb-20 md:pt-[9rem]">
        <h1 className="w-full font-bungeeshade text-[40px] font-thin leading-[50px] text-black md:w-[70%] md:text-[100px] md:leading-[120px] ">
          Get in touch with us
        </h1>
        <div className="mt-8 w-[160px] md:mt-[0] md:w-fit">
          <img src="/images/contact/contactHeroSec.svg" alt="" />
        </div>
      </div>

      <div className="flex flex-col border-b-0 border-black md:flex-row md:border-b">
        <div className="w-full border-b border-black py-[40px] pl-4 md:w-[25%] md:border-b-0 md:border-r md:py-[60px] md:pl-10">
          <h3 className="mb-[20px] font-neutral text-[22px] font-bold text-black md:mb-[30px]">
            Social Media
          </h3>
          <ul>
            <Link
              href="https://www.linkedin.com/company/snowcrash/"
              target="_blank"
            >
              <li className="mb-[20px] flex items-center font-poppins text-black">
                Linkedin
                <img src="/images/arrow.svg" className="ml-2" alt="" />
              </li>
            </Link>
            <Link href="https://twitter.com/snowcrashNFT" target="_blank">
              <li className="mb-[20px] flex items-center font-poppins text-black">
                Twitter <img src="/images/arrow.svg" className="ml-2" alt="" />
              </li>
            </Link>
            <Link href="https://discord.gg/snowcrash" target="_blank">
              <li className="mb-[20px] flex items-center font-poppins text-black">
                Discord <img src="/images/arrow.svg" className="ml-2" alt="" />
              </li>
            </Link>
            <Link href="https://instagram.com/snowcrashNFT" target="_blank">
              <li className="mb-[20px] flex items-center font-poppins text-black">
                Instagram{" "}
                <img src="/images/arrow.svg" className="ml-2" alt="" />
              </li>
            </Link>
          </ul>
        </div>

        <div className="w-full border-b border-black py-[40px] px-4 md:w-[40%] md:border-b-0 md:border-r md:py-[60px] md:px-10">
          <h3 className="mb-[20px] font-neutral text-[22px] font-bold text-black md:mb-[30px]">
            Contact Info
          </h3>
          <ul className="w-[85%]">
            <li className="mb-[20px] flex w-full flex-col items-start justify-between font-poppins text-black md:flex-row">
              <span>Telephone:</span>
              <div className="mt-3 flex flex-col items-start font-medium md:mt-[0]">
                <Link
                  className="mb-3 md:mb-2"
                  href="tel:(+1)832-449-227"
                  target="_blank"
                >
                  (+1)832-449-227
                </Link>
                <Link href="tel:(+1)832-449-228" target="_blank">
                  (+1)832-449-228
                </Link>
              </div>
            </li>
            <li className="mb-[20px] flex w-full flex-col items-start justify-between font-poppins text-black md:flex-row">
              <span>Email:</span>
              <div className="mt-3 font-medium md:mt-[0]">
                <Link href="mailto:info@snowcrash" target="_blank">
                  info@snowcrash
                </Link>
              </div>
            </li>
            <li className=" flex w-full flex-col items-start justify-between font-poppins text-black md:flex-row">
              <span>Address:</span>{" "}
              <div className="mt-3 font-medium md:mt-[0]">
                {" "}
                45 Barton west, CA
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full border-b border-black py-[40px] px-4 md:w-[70%] md:border-b-0 md:py-[60px] md:px-10">
          <h3 className="mb-[20px] font-neutral text-[22px] font-bold text-black md:mb-[30px]">
            Send Message
          </h3>
          <form>
            <div>
              <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Full name"
                  className="text-md mb-2 h-12 w-full border border-black bg-white pl-[20px] font-poppins text-black placeholder-gray-400 focus:ring-0 md:w-[49%]"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="text-md mb-2 h-12 w-full border border-black bg-white pl-[20px] font-poppins text-black placeholder-gray-400 focus:ring-0 md:w-[49%]"
                />
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="text-md mb-2 min-h-[170px] w-full border border-black bg-white pl-[20px] font-poppins text-black placeholder-gray-400 focus:ring-0"
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="h-[35px] w-[120px] content-center items-center justify-center border border-transparent bg-[#949595] font-neutral text-[16px] text-white md:w-[90px]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="md-px-[0] flex flex-col items-center justify-center px-4 pt-[50px] pb-[50px]">
        <span className="mb-[20px] text-center font-neutral text-[16px] font-thin text-black md:text-left md:text-[18px]">
          Have any questions?
        </span>
        <div className="flex w-fit items-center">
          <Link href="/faq">
            <button className="h-[35px] w-[80px] content-center items-center justify-center border border-black bg-transparent pb-1 pt-2 font-neutral text-[16px] leading-[0] text-black">
              FAQ
            </button>
          </Link>
          <Link href="/about">
            <button className="ml-3 h-[35px] w-[165px] content-center items-center justify-center border border-transparent bg-black pb-1 pt-2 font-neutral text-[16px] leading-[0] text-white">
              About us
            </button>
          </Link>
        </div>
      </div>
    </Scaffold>
  );
};

export default Contact;
