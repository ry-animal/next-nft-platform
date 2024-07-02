import Image from "next/image";
import { CollectionCard } from "../collections/CollectionCard";
import { Collection } from "@prisma/client";
import { api } from "../../utils/api";
import { StaticBackground } from "../BackgroundStatic";
import { Menu } from "@headlessui/react";
import { IconDown } from "../../assets/IconDown";
import SearchInput from "../SearchInput";
import SelectBox from "../SelectBox";
import { IconSort } from "../../assets/IconSort";
import { useState } from "react";
import Pagination from "../Pagination";

// Define the number of collection items per page
const ITEMS_PER_PAGE = 3;

const CollectionSection = () => {
  const [collectionsData, setCollectionsData] = useState<Collection[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  api.collection.getAll.useQuery(undefined, {
    onSuccess: (data) => {
      setCollectionsData(data);
    },
  });

  // Calculate the start and end indexes for the current page of collection items pagination
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const filteredCollectionsData = collectionsData.filter(
    (collection) =>
      (collection?.metaData as any).name
        ?.toLowerCase()
        ?.indexOf(searchQuery.toLowerCase()) !== -1
  );

  // Get the items to render based on the current page and filtered data
  const itemsToRender = filteredCollectionsData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <section>
      <StaticBackground dark={true} amount={0.3} className="h-full">
        <div className="flex flex-col items-center justify-center md:pt-[140px] md:pb-[80px]">
          <div className="flex flex-col  items-center justify-center gap-12 py-[3rem] sm:flex-row sm:py-[0] md:mb-[80px]">
            <Image
              src="/images/home/block.svg"
              width={60}
              height={60}
              alt="block"
            />
            <div className=" font-bungeeshade text-4xl md:text-7xl">
              Collections
            </div>
          </div>

          {/* <div className="flex w-[45%] items-center justify-between">
            <SearchInput onChange={handleSearchChange} />

            <SelectBox
              className="h-full w-full appearance-none border border-white bg-transparent pb-2 pl-4 pr-10 text-left font-neutral text-gray-400 placeholder-gray-400 focus:outline-none"
              containerClassName="mr-[15px] h-10 w-[275px]"
              Icon={
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <IconDown />
                </div>
              }
            >
              <option value="" disabled selected>
                PHOTOGRAPHER
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </SelectBox>

            <SelectBox
              containerClassName="mr-15 h-10 w-[185px] overflow-x-hidden border border-white"
              className="h-full  w-[120%] appearance-none  bg-transparent pl-10 pr-10 font-neutral text-gray-400 placeholder-gray-400 focus:outline-none"
              Icon={
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <IconSort />
                </div>
              }
            >
              <option value="" disabled selected>
                Sort by
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </SelectBox>
          </div>*/}
        </div>

        <div className="mb-11 flex w-full grid-cols-1 overflow-x-scroll pb-[3rem] sm:grid sm:overflow-x-auto sm:pb-[0] md:grid-cols-2 lg:grid-cols-3">
          {itemsToRender.map((collection) => (
            <div
              key={collection.id}
              className="mr-3 w-full flex-shrink-0 sm:mr-[0] "
            >
              <div className="flex h-full items-center justify-center border p-[0] sm:py-[50px] sm:px-[45px]">
                <div className="h-full flex-1 border border-white">
                  <CollectionCard collection={collection} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCollectionsData.length > ITEMS_PER_PAGE && (
          <div className="mb-[110px] flex justify-center">
            <Pagination
              light={true}
              currentPage={currentPage}
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={filteredCollectionsData.length}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </StaticBackground>
    </section>
  );
};

export default CollectionSection;
