import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-white">
      <div className="mt-32 mb-8 flex w-full flex-col  font-neutral text-black">
        <div className="flex flex-wrap items-center justify-between pl-4 pr-4 sm:pl-16 sm:pr-16">
          <div className="flex text-4xl md:text-6xl xl:text-7xl mb-10 xl:mb-0 font-bold max-w-[100%] overflow-hidden">
            <p>SNOWCRASH</p>
          </div>
          <div className="flex flex-wrap items-start gap-4 sm:gap-24">
            <div className="flex flex-col  space-y-4">
              <h3 className="font-poppins text-lg font-semibold">LINKS</h3>
              <Link
                href="/collections"
                className="font-poppins text-lg font-light"
              >
                Collections
              </Link>
              <Link href="/faq" className="font-poppins text-lg font-light">
                FAQ
              </Link>
            </div>
            <div className="flex flex-1 flex-col  space-y-4">
              <h3 className="font-poppins text-lg font-semibold">INFO</h3>
              <Link href="/about" className="font-poppins text-lg font-light">
                About
              </Link>
              <Link href="/news" className="font-poppins text-lg font-light">
                News
              </Link>
              <Link
                href="mailto:info@snowcrash"
                className="font-poppins text-lg font-light"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-1 flex-col space-y-4">
              <h3 className="font-poppins text-lg font-semibold">SOCIALS</h3>
              <Link
                href="https://discord.gg/Snowcrash"
                className="font-poppins text-lg font-light"
              >
                <p className="inline">Discord</p>
                <Image
                  src="/images/arrow.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                  className="relative ml-2 mr-2 inline"
                />
              </Link>
              <Link
                href="https://twitter.com/SnowcrashNFT"
                className="font-poppins text-lg font-light"
              >
                <p className="inline">Twitter</p>
                <Image
                  src="/images/arrow.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                  className="relative ml-2 mr-2 inline"
                />
              </Link>
              <Link
                href="https://www.instagram.com/snowcrashnft"
                className="font-poppins text-lg font-light w-[120px]"
              >
                <p className="inline">Instagram</p>
                <Image
                  src="/images/arrow.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                  className="relative ml-2 mr-2 inline"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/snowcrash"
                className="font-poppins text-lg font-light w-[120px]"
              >
                <p className="inline">Linkedin</p>
                <Image
                  src="/images/arrow.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                  className="relative ml-2 mr-2 inline"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row sm:justify-between border-t border-black pt-4 pl-4 pr-4 sm:pl-16 sm:pr-16 font-neutral text-xs">
          <div className="mb-4 sm:mb-0">All RIGHTS RESERVED ©2023</div>
          <div className="flex gap-8 text-[#888888]">
            <Link href="/terms" className="font-normal uppercase">
              Terms of Service
            </Link>
            <Link href="/privacy" className="font-normal uppercase">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
