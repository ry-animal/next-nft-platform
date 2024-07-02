import React, { useEffect } from "react";

interface HeaderProps {
  dark?: boolean;
  title?: string;
  isBlue?: boolean;
}

export const LandingSection = (props: HeaderProps) => {
  const [counter, setCounter] = React.useState(0);

  async function count(i: number) {
    setCounter(i + 1);
    if (counter < 100) {
      setTimeout(() => {
        count(i + 1);
      }, 5);
    }
  }

  React.useEffect(() => {
    count(0);
  }, []);

  return (
    <section className="sd:h-[500px] mt-20 h-full text-black md:mt-40">
      <div className="flex h-full flex-row">
        <div className="flex h-[90%] w-full flex-col justify-end gap-8 sm:w-2/4 sm:justify-center md:h-full md:pl-16 lg:pl-32">
          <div className="relative">
            <div
              className={
                "absolute text-left font-bungeeshade text-5xl  text-[#56EBFF] transition-all duration-500 hover:blur-[1px] hover:transition-all  xl:text-7xl " +
                (counter > 100 ? "hidden" : "visible")
              }
            >
              Unleashing <br />
              Creativity
            </div>
            <div
              className={
                "absolute my-2 mx-4 text-left font-bungeeshade text-5xl text-[#FF0000] transition-all duration-500 hover:blur-[1px] hover:transition-all  xl:text-7xl " +
                (counter > 100 ? "hidden" : "visible")
              }
            >
              Unleashing <br />
              Creativity
            </div>
            <div
              className={
                (props.isBlue ? "text-[#4361EE] " : "") +
                "text-left font-bungeeshade  text-4xl transition-all duration-500 hover:blur-[1px] hover:transition-all sm:text-5xl  xl:text-7xl"
              }
            >
              Unleashing <br />
              Creativity
            </div>
          </div>
          <div className="sm mb-12 text-left font-neutral text-sm sm:mb-0">
            Discover cutting-edge digital art. Unleash your creativity on our
            platform. Collect unique pieces that push the boundaries of
            traditional art.
          </div>
        </div>
      </div>
    </section>
  );
};
