import Image from "next/image";
import LineGrid from "../../assets/LineGrids";

interface InfoProps {
  isBlue?: boolean;
}

const InfoSection = (props: InfoProps) => {
  return (
    <section className="my-5 flex flex-col flex-wrap items-center justify-center p-4 md:my-20">
      <div className="relative mb-12 block flex flex-1 items-center lg:hidden">
        <div className="absolute left-0 top-0 right-0 bottom-0 p-4">
          <LineGrid height={300} width={300} />
        </div>

        <Image
          src="/images/home/ball.svg"
          height={260}
          width={260}
          alt="ball"
          className="animate-spin-slow m-12"
        />
      </div>
      <div className="text-left font-neutral text-4xl font-bold text-black md:text-center">
        REVOLUTIONIZING THE{" "}
        <span className={props.isBlue ? "text-[#4361EE]" : ""}>NFT</span> MARKET
      </div>
      <div className="mt-24 flex w-full max-w-[1300px] items-center justify-around">
        <div className="relative flex hidden flex-1 items-center lg:block">
          <div className="absolute left-0 top-0 right-0 bottom-0 pl-4">
            <LineGrid height={550} width={550} />
          </div>

          <Image
            src="/images/home/ball.svg"
            height={360}
            width={360}
            alt="ball"
            className="animate-spin-slow m-28"
          />
        </div>
        <div className=" flex flex-1 flex-col items-center justify-center gap-12 text-black">
          <div className="flex max-w-lg flex-col gap-4">
            <div className="flex gap-4">
              <Image
                src="/images/home/circle.svg"
                height={32}
                width={32}
                alt="circle"
              />
              <div className="text-2xl font-bold md:text-3xl">
                SNOWCRASH SPECIALTY
              </div>
            </div>
            <div className="text-left font-poppins font-light">
              NFTs enable artists to earn royalties on resale, offer provable
              ownership, and unlock new forms of digital ownership and
              interaction.
            </div>
          </div>

          <div className="flex max-w-lg flex-col gap-4">
            <div className="flex gap-4">
              <Image
                src="/images/home/plus.svg"
                height={30}
                width={32}
                alt="plus"
              />
              <div className="text-2xl font-bold md:text-3xl">
                WHAT SETS US APART
              </div>
            </div>
            <div className="text-left font-poppins font-light">
              Snowcrash offer a range of unique benefits, such as royalty
              earnings for creators, verifiable ownership, and novel
              opportunities for digital interaction and ownership.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
