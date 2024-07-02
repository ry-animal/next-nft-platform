import React from "react";

interface Props {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (pageNumber: number) => void;
  light: boolean;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
  light,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };
  return (
    <div className="flex p-[10px]">
      {currentPage > 1 && (
        <button
          className={`font-inter mx-[8px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[5px] px-3 py-2  md:h-[50px] md:w-[50px] ${
            light
              ? "border border-white bg-transparent text-white"
              : "border border-black bg-white text-black"
          }`}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          {light ? (
            <img src="/images/arrow left small.svg" alt="" />
          ) : (
            <img src="/images/arrow left small black.svg" alt="" />
          )}
        </button>
      )}

      {generatePageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          className={`font-inter mx-[8px] h-[40px] w-[40px] cursor-pointer rounded-[5px] border px-3 py-2 md:h-[50px] md:w-[50px] ${
            pageNumber === currentPage
              ? `${light ? "bg-white text-black" : "bg-black text-white"}`
              : ` ${
                  light
                    ? "border border-white bg-transparent text-white"
                    : "border border-black bg-white text-black"
                }`
          }`}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          className={`font-inter mx-[8px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[5px] px-3 py-2  md:h-[50px] md:w-[50px]  ${
            light
              ? "border border-white bg-transparent text-white"
              : "border border-black bg-white text-black"
          }`}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          {light ? (
            <img src="/images/arrow right small.svg" alt="" />
          ) : (
            <img src="/images/arrow right small black.svg" alt="" />
          )}
        </button>
      )}
    </div>
  );
};

export default Pagination;
