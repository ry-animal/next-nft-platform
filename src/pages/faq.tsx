import { type NextPage } from "next";
import { Disclosure } from "@headlessui/react";
import { Scaffold } from "../components/Scaffold";
import { useState } from "react";
import Link from "next/link";
import { IconMore } from "../assets/IconMore";

const faq = [
  {
    title: "What blockchains does Snowcrash use?",
    value: (
      <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
        Depending on a specific collection, Snowcrash uses the Polygon or Solana
        blockchain.
      </p>
    ),
  },
  {
    title: "Who does Snowcrash work with?",
    value: (
      <div>
        <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
          We work with artists, brands, publishers, and IP holders who create
          NFT collections across music, art, film, photography, fine art,
          animations, and more.
        </p>
        <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
          For exclusives, we work alongside each collaborator to curate a
          one-of-a-kind experience for each Snowcrash drop.
        </p>
      </div>
    ),
  },
  {
    title: "What is an NFT?",
    value: (
      <div>
        <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
          An NFT is a non-fungible token: a unique digital item that exists on a
          digital database (blockchain) similar to a ledger.
        </p>
        <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
          Since it exists on the blockchain, NFTs allow limited edition or
          one-of-a-kind digital items to be minted, tracked, and traded.
        </p>
        <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
          Whenever a NFT is created or sold, a record of the collectible or
          artwork ownership is stored on the blockchain.
        </p>
      </div>
    ),
  },
  {
    title: "What is the blockchain?",
    value: (
      <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
        The blockchain is a public, immutable ledger technology used to
        facilitate transactions, track assets, and store information. The
        blockchain is decentralized, meaning individuals can transact peer to
        peer without the need of a central authority like a bank. This is
        revolutionary because this technology plays a key part in maintaining
        security, fidelity, and trust of a decentralized network.
      </p>
    ),
  },
  {
    title: "What is a crypto wallet?",
    value: (
      <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
        A crypto wallet such as{" "}
        <Link
          href={"https://metamask.io/"}
          target="_blank"
          className="font-bold underline"
        >
          https://metamask.io/
        </Link>{" "}
        allows to store cryptocurrencies and NFT collectibles. As a user on the
        Snowcrash platform you are able to either use your existing crypto
        wallet if you are already familiar with web3 and NFTs, or alternatively
        use a wallet that is automatically generated for you when you sign up
        for an account on Snowcrash.
      </p>
    ),
  },
  {
    title: "What is a mint?",
    value: (
      <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
        A mint is the process of creating a non-fungible token on the
        blockchain. It is similar to how governments mint physical coins. This
        process is also known as the collection’s initial sale.
      </p>
    ),
  },
  {
    title: "What is a presale list?",
    value: (
      <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
        A presale list is a list of collected accounts/wallet addresses that get
        first access to the collection and a guaranteed spot to mint before the
        general public can receive access.
      </p>
    ),
  },
  {
    title: "How can I stay in touch or learn more?",
    value: (
      <div>
        <h4 className="font-neutral font-bold">Follow us</h4>
        <span className="mb-1 mt-3 block text-[16px] font-medium md:text-[18px]">
          Twitter:
        </span>
        <Link
          className="mb-3 block text-[14px] md:text-[16px]"
          href="https://twitter.com/snowcrashNFT"
          target="_blank"
        >
          https://twitter.com/snowcrashNFT
        </Link>

        <span className="mb-1 mt-3 block text-[16px] font-medium md:text-[18px]">
          LinkedIn:
        </span>
        <Link
          className="mb-3 block text-[14px] md:text-[16px]"
          href="https://www.linkedin.com/company/snowcrash/"
          target="_blank"
        >
          https://www.linkedin.com/company/snowcrash/
        </Link>

        <span className="mb-1 mt-3 block text-[16px] font-medium md:text-[18px]">
          Instagram:
        </span>
        <Link
          className="mb-3 block text-[14px] md:text-[16px]"
          href="https://instagram.com/snowcrashNFT"
          target="_blank"
        >
          https://instagram.com/snowcrashNFT
        </Link>

        <span className="mb-1 mt-3 block text-[16px] font-medium md:text-[18px]">
          Discord:
        </span>
        <Link
          className="mb-3 block text-[14px] md:text-[16px]"
          href="https://discord.gg/snowcrash"
          target="_blank"
        >
          https://discord.gg/snowcrash
        </Link>

        <span className="mb-1 mt-3 block text-[16px] font-medium md:text-[18px]">
          Email:
        </span>
        <Link
          className="mb-3 block text-[14px] md:text-[16px]"
          href="mailto:team@snowcrash.com"
          target="_blank"
        >
          team@snowcrash.com
        </Link>

        <span className="mb-1 mt-3 block text-[16px] font-medium md:text-[18px]">
          Sign up for our:
        </span>
        <Link
          className="mb-3 block text-[14px] md:text-[16px]"
          href="https://snowcrash.com"
          target="_blank"
        >
          https://snowcrash.com
        </Link>
      </div>
    ),
  },
  {
    title: "Is Snowcrash the right place for me to drop my NFTs?",
    value: (
      <div>
        <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
          Snowcrash is where you can find everything you need to drop an NFT
          collection.
        </p>
        <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
          We assess the current NFT landscape to help artists ideate around
          their NFT launches and marketing. Then we assist in taking the NFT to
          market and can help keep interest in the collection after the initial
          drop.
        </p>
      </div>
    ),
  },
  {
    title: "How does minting work? ",
    value: (
      <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
        Minting on Snowcrash is by invitation only. If you are interested in
        submitting your portfolio, please email:{" "}
        <Link
          className=" font-bold underline"
          href="mailto:team@snowcrash.com"
          target="_blank"
        >
          team@snowcrash.com
        </Link>
      </p>
    ),
  },
  {
    title: "How do royalties work?",
    value: (
      <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
        Royalties are a form of payment the original creator receives when their
        NFT is resold. For example, if the royalty is set at 10% and the
        original buyer resells this NFT for $100, the creator makes $10 from the
        secondary sale. Our platform allows for automatic payment of royalties
        with every transaction.
      </p>
    ),
  },
  {
    title:
      "How does Snowcrash ensure the safety and integrity of its NFT collections?",
    value: (
      <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
        Snowcrash is an invite-only platform, ensuring that all collections are
        curated and fit our security standards, and only known users are able to
        participate in our drops.
      </p>
    ),
  },
  {
    title: "Is Snowcrash the right NFT solution for my brand?",
    value: (
      <div>
        <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
          Snowcrash is a turnkey solution that adds value across the NFT
          landscape—offering technology, collaboration, curation, and marketing
          solutions that other platforms do not. For brands, we offer an
          accessible, frictionless, fast, and eco-friendly experience that sets
          fair prices for buyers, sellers, and creators as an open and
          non-custodial platform that supports the secondary market.
        </p>
        <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
          We partner with brands from start to finish - beginning with ideation
          around drops and ending with maintaining interest to incentivize
          trading in the secondary market. We even help to navigate copyright
          and licensing issues.
        </p>
      </div>
    ),
  },
  {
    title: "Is purchaser verification available on Snowcrash?",
    value: (
      <div>
        <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
          Yes. Purchaser verification functionality, otherwise known as KYC
          (which stands for “Know Your Customer”), is available and can be
          enabled as a requirement for specific collections. It is a simple and
          seamless identity verification process which requires the following:
        </p>
        <ul>
          <li>
            Take a photo of your ID document (normally a driver’s license,
            passport or ID card) either with your webcam or smartphone
          </li>
          <li>Take a quick selfie with the same device</li>
          <li>
            The results are usually immediate, although on some rare occasions a
            manual review is required which can take approximately 24 hours. 
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "How can I get in touch or learn more?",
    value: (
      <div>
        <span>Contact us: </span>
        <Link href="mailto:team@snowcrash.com" target="_blank">
          team@snowcrash.com
        </Link>
      </div>
    ),
  },
  {
    title: "How do I buy an NFT on Snowcrash?",
    value: (
      <div>
        <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
          Browse Exclusives to see the drops that are only available on the
          Snowcrash platform. Navigate to Explore to see the NFTs available for
          sale from prior exclusive Snowcrash drops.
        </p>
        <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
          On Snowcrash, you can purchase NFTs by using a credit card or with
          cryptocurrency.
        </p>
      </div>
    ),
  },
  {
    title: "How do I sell an NFT on Snowcrash?",
    value: (
      <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
        NFTs bought on Snowcrash can be resold on our secondary market.
      </p>
    ),
  },
  {
    title:
      "How does Snowcrash ensure the safety and integrity of its NFT collections?",
    value: (
      <p className="font-poppins text-[14px] leading-[27px] md:text-[16px]">
        Snowcrash is an invite-only platform, ensuring that all collections are
        curated and fit our security standards, and only known users are able to
        participate in our drops.
      </p>
    ),
  },
  {
    title: "How can I stay in touch or learn more as a collector?",
    value: (
      <div>
        <span>Contact us:</span>{" "}
        <Link href="mailto:team@snowcrash.com" target="_blank">
          team@snowcrash.com
        </Link>
      </div>
    ),
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Faq: NextPage = () => {
  return (
    <Scaffold>
      <div className="flex w-full flex-col items-center justify-between border-b border-black px-4 pb-10 pt-[5rem] md:flex-row md:px-9 md:pb-20 md:pt-[8rem]">
        <h1 className="w-full font-bungeeshade text-[40px] font-thin leading-[50px] text-black md:w-[72%] md:text-[100px] md:leading-[120px] ">
          Frequently asked questions
        </h1>
        <div className="mt-3 flex w-full flex-col items-start justify-center md:mt-[0] md:w-[28%] md:items-center">
          <img
            src="/images/faq/faqHeroSec.svg"
            className="w-[150px] md:w-fit"
            alt=""
          />
          <p className="mt-[20px] font-neutral text-black md:mt-[45px]">
            Discover everything you need to know about our services with our
            comprehensive FAQ section, featuring answers to all your burning
            questions.
          </p>
        </div>
      </div>
      <div className="px-4 pt-[40px] md:px-9 md:pt-[80px]">
        {faq.map((faqItem, index) => (
          <div key={index}>
            {faqItem.value && (
              <FaqDropdown
                title={`${index + 1}. ${faqItem.title}`}
                value={faqItem.value}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center px-4 pt-[50px] pb-[50px] md:px-[0]">
        <span className="mb-[20px] text-center font-neutral text-[16px] font-thin text-black md:text-left md:text-[18px]">
          Have NOt found your answers yet?
        </span>
        <div className="flex w-fit items-center">
          <Link href="/about">
            <button className="h-[35px] w-[80px] content-center items-center justify-center border border-black bg-transparent pb-1 pt-2 font-neutral text-[16px] leading-[0] text-black">
              About
            </button>
          </Link>
          <Link href="/contact">
            <button className="ml-3 h-[35px] w-[165px]  content-center items-center justify-center border border-transparent bg-black pb-1 pt-2 font-neutral text-[16px] leading-[0] text-white">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </Scaffold>
  );
};

export default Faq;

interface FaqDropdownProps {
  title: string;
  value: JSX.Element;
}

function FaqDropdown({ title, value }: FaqDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`border border-black ${
        isOpen ? "bg-black text-white" : "bg-transparent text-black"
      }`}
    >
      <div
        className={`flex w-full cursor-pointer items-center justify-start px-2 py-3 md:px-4 ${
          isOpen ? "border-b border-white" : ""
        }`}
        onClick={toggleDropdown}
      >
        <IconMore
          className={
            isOpen ? "mr-3 -rotate-90  transition-all " : "mr-3 transition-all"
          }
          height={20}
          width={20}
          fill={isOpen ? "#ffffff" : "#000000"}
        />
        <h3 className="ml-2 text-start font-poppins text-[16px] font-medium md:text-[20px]">
          {title}
        </h3>
      </div>
      {isOpen && (
        <div className="bg-black px-[25px] pt-[14px] pb-[20px] text-white md:px-[60px]">
          {value}
        </div>
      )}
    </div>
  );
}
