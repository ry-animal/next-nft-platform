import Image from "next/image";
const PartnershipSection = () => {
  return (
    <section className="flex flex-wrap justify-around py-6">
      <Image
        src="/images/home/1.svg"
        alt=""
        width={140}
        height={50}
        className="grayscale transition duration-1000 hover:grayscale-0 m-4"
      />
      <Image
        src="/images/home/2.svg"
        alt=""
        width={120}
        height={50}
        className="grayscale transition duration-1000 hover:grayscale-0 m-4"
      />
      <Image
        src="/images/home/4.svg"
        alt=""
        width={120}
        height={50}
        className="grayscale transition duration-1000 hover:grayscale-0 m-4"
      />
      <Image
        src="/images/home/3.svg"
        alt=""
        width={120}
        height={50}
        className="grayscale transition duration-1000 hover:grayscale-0 m-4"
      />

      <Image
        src="/images/home/5.svg"
        alt=""
        width={140}
        height={60}
        className="grayscale transition duration-1000 hover:grayscale-0 m-4"
      />
    </section>
  );
};

export default PartnershipSection;
