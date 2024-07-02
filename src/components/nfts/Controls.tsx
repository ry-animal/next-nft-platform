import { Combobox, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import IconCard from "../../assets/IconCard";
import { IconDown } from "../../assets/IconDown";
import IconList from "../../assets/IconList";
import { LoaderBlack } from "../loaderBlack";
import NftCard from "./card";
import { Collection, Nft } from "@prisma/client";

interface ControlsProps {
  setSearchString: (searchString: string) => void;
  setOrder: (order: string) => void;
  order: string | undefined;
  sortOptions: string[];
  filteredNFTS: Nft[];
  address: string;
  nftData?: Nft[];
  collectionData?: Collection;
}

const Controls = ({
  setSearchString,
  setOrder,
  order,
  sortOptions,
  filteredNFTS,
  nftData,
  address,
  collectionData,
}: ControlsProps) => {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex flex-col">
      <Combobox onChange={(person) => {}}>
        {({ activeOption: boolean }) => (
          <>
            <div className="mx-6 mb-12 flex w-full gap-4">
              <div className="relative grow">
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  className="text-md mb-2 h-12 w-full border border-zinc-200 bg-zinc-900/20 pl-10 text-gray-200 placeholder-gray-400 focus:ring-0"
                  placeholder="Search"
                  onChange={(event) => setSearchString(event.target.value)}
                />
              </div>
              <IconCard />
              <IconList />
              <Menu
                as="div"
                className="invisible relative inline-block w-0 text-left sm:visible sm:w-72"
              >
                <div className="">
                  <Menu.Button className="mb-2 flex h-12 w-full flex-row border border-zinc-200 bg-zinc-900/20 p-2 px-5 pt-3 text-left">
                    <div className="flex-1">{order ? order : "Sort by"}</div>
                    <div>
                      <IconDown className="mt-2" />
                    </div>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-96 origin-top-right border border-zinc-200 bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {sortOptions.map((option) => (
                      <Menu.Item key={"sort_" + option}>
                        {({ active }) => (
                          <a
                            onClick={() => {
                              setOrder(option);
                            }}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-zinc-800"
                                : "text-zinc-200",
                              "block border-b border-zinc-300 px-4 py-4 text-sm"
                            )}
                          >
                            {option}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <Combobox.Options as="div" static hold className="flex ">
              <div className="flex-1 flex-col">
                <div className="grid flex-1 grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 sm:gap-x-2 sm:gap-y-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                  {filteredNFTS.map((nftData) => (
                    <NftCard
                      nft={nftData ?? []}
                      key={nftData.id ?? ""}
                      userAddress={address}
                      collection={collectionData ?? ({} as Collection)}
                    />
                  ))}
                </div>
                {nftData?.length === 0 && (
                  <div className="flex h-full w-full flex-col py-14 text-center text-sm sm:px-14">
                    <LoaderBlack title="No NFTS, go buy some!" />
                  </div>
                )}
                {filteredNFTS.length === 0 && (
                  <div className="flex h-full w-full flex-col py-14 text-center text-sm sm:px-14">
                    <LoaderBlack title="We couldn’t find anything with that term. Please try again." />
                  </div>
                )}
              </div>
            </Combobox.Options>
          </>
        )}
      </Combobox>
    </div>
  );
};

export default Controls;
