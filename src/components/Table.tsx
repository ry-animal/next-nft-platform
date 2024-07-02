import React, { ReactNode, useState } from "react";

export type Column<T> = {
  label: string;
  accessor: keyof T;
  filter?: (row: T) => boolean;
  sort?: (a: T, b: T, sortDirection: SortDirection) => number;
  sortDirection?: SortDirection;
};

type Props<T extends Record<string, ReactNode>> = {
  data: T[];
  columns: Column<T>[];
};

export enum SortDirection {
  NONE,
  ASCENDING,
  DESCENDING,
}

const Table = <T extends Record<string, ReactNode>>({
  data,
  columns,
}: Props<T>) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortDirection, setSortDirection] = useState<
    Record<keyof T, SortDirection>
  >(
    columns.reduce((acc, { accessor }) => {
      acc[accessor] = SortDirection.NONE;
      return acc;
    }, {} as Record<keyof T, SortDirection>)
  );

  const handleSort = (accessor: keyof T) => {
    const sortColumn = columns.find((column) => column.accessor === accessor);

    if (sortColumn && sortColumn.sort) {
      let newSortDirection: SortDirection;
      switch (sortDirection[accessor]) {
        case SortDirection.NONE:
        case SortDirection.DESCENDING:
          newSortDirection = SortDirection.ASCENDING;
          break;
        case SortDirection.ASCENDING:
          newSortDirection = SortDirection.DESCENDING;
          break;
        default:
          newSortDirection = SortDirection.NONE;
          break;
      }

      const newSortDirectionMap = {
        ...sortDirection,
        [accessor]: newSortDirection,
      };

      setSortDirection(newSortDirectionMap);

      const sorted = data
        .slice()
        .sort((a, b) => sortColumn.sort!(a, b, newSortDirection));

      setSortedData(sorted);
    }
  };

  return (
    <table className="w-full border border-black font-poppins text-sm text-black">
      <thead className="bg-[#EEEEEE]">
        <tr>
          {columns.map(({ label, accessor, sort }, index) => (
            <th
              key={index}
              className="border-b border-black py-[10px] px-[8px] text-start text-[10px] font-medium md:px-[15px] md:text-[15px]"
            >
              {label}
              {sort && (
                <button
                  className="ml-2"
                  onClick={() => handleSort(accessor)}
                  aria-label={`Sort by ${label}`}
                >
                  <img
                    src="/images/arrow down black.svg"
                    className="h-[10px] w-[10px]"
                    alt=""
                  />
                </button>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="py-10 text-center">
              No data :(
            </td>
          </tr>
        ) : (
          sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-[#EEEEEE]">
              {columns.map(({ accessor }, colIndex) => {
                return (
                  <td
                    key={colIndex}
                    className="border-b border-black py-[15px] px-[8px] text-start text-[10px] md:px-[15px] md:text-[15px]"
                  >
                    {row[accessor]}
                  </td>
                );
              })}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
