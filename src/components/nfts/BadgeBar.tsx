interface BadgeBarProps {
  collected?: number;
  listed?: number;
}

const BadgeBar = ({ collected, listed }: BadgeBarProps) => {
  return (
    <div className="flexgap-10 mx-6 mb-10 text-xl">
      <span className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="underline-green-600 text-2xl text-green-600 underline decoration-green-800 decoration-4 underline-offset-8">
            Collected: ( {collected ?? "0"} )
          </div>
          <div className="text-2xl text-white/50">
            Listed: ( {listed ?? "0"} )
          </div>
        </div>
        <hr className="-mt-4 w-screen border border-white border-opacity-10" />
      </span>
    </div>
  );
};

export default BadgeBar;
