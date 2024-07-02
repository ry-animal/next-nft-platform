import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { Nft } from "@prisma/client";

interface PaginationProps {
  page: number;
  nftData: Nft[];
  nftSelectedCount: number;

  setPage: (page: number) => void;
}

const Pagination = ({
  page,
  nftData,
  nftSelectedCount,
  setPage,
}: PaginationProps) => {
  const nftsPerPage = 10000;
  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };
  const nextPage = () => {
    if (nftData?.length === nftsPerPage) setPage(page + 1);
  };
  return (
    <nav className="mx-2 mb-2 flex items-center justify-between border-t border-b border-gray-200 px-4 pb-4">
      <div className="-mt-px flex w-0 flex-1">
        <a
          href="#"
          onClick={prevPage}
          className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          {page + 1} / {Math.ceil(nftSelectedCount / nftsPerPage)}
        </a>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a
          href="#"
          onClick={nextPage}
          className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </a>
      </div>
    </nav>
  );
};

export default Pagination;
