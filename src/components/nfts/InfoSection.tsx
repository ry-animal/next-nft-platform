import Link from "next/link";
import { LoaderBlack } from "../loaderBlack";
import { NAVIGATION_SOCIAL } from "../../utils/social";

interface InfoSectionProps {
  address: string;
  thumb?: string;
}

const InfoSection = ({ address, thumb }: InfoSectionProps) => {
  const displayAddress = address?.slice(0, 6) + "..." + address?.slice(-4);

  return (
    <div className="xs:px-16 relative mx-auto mt-20 mb-10 flex justify-center md:block">
      <div className="absolute -top-56 h-56 w-56 rounded-xl border border-white bg-black/50 shadow-lg">
        {thumb && <img className="h-full w-full" src={thumb} />}
        {!thumb && (
          <div className="flex h-full w-full">
            <div className="m-auto">
              <LoaderBlack title={"Loading User"} />
            </div>
          </div>
        )}
      </div>
      <div className="flex-col items-center pt-10 font-helvetica">
        <div className="mx-6 flex flex-col gap-4 md:flex-row md:gap-12">
          <h1>{displayAddress || "Collector"}</h1>
          <div className="flex flex-row justify-center text-white">
            {NAVIGATION_SOCIAL("white").map((item) => (
              <div
                key={item.key}
                className="fill-white p-2 pt-3 font-light text-white"
              >
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
