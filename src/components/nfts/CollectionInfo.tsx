import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";
import { compressAddress } from "../../core/web3/utils";
import { CollectionStats } from "../../types";
import { Collection } from "@prisma/client";

interface CollectionInfoProps {
  collection: Collection;
  stats?: CollectionStats;
  copied: boolean;

  setCopied: (copied: boolean) => void;
}

const CollectionInfo = ({
  collection,
  stats,
  copied,
  setCopied,
}: CollectionInfoProps) => {
  return (
    <div className="invisible my-6 flex w-80 sm:visible  ">
      <div className="my-6 h-60 w-80 flex-col rounded-lg border border-zinc-600 p-3">
        <div className="flex-1"></div>
        <div className="flex flex-row py-2">
          <div className="flex-1 text-left font-light text-zinc-300">
            Floor Price
          </div>
          <div className=" bg-zinc-300 px-1 text-right font-bold text-zinc-700">
            {(stats?.totalListed ?? 0) > 0 && stats?.floorPrice} MATIC
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-row py-2">
          <div className="flex-1 text-left font-light text-zinc-300">
            Volume
          </div>
          <div className=" bg-zinc-300 px-1 text-right font-bold text-zinc-700">
            {stats?.totalVolume} MATIC
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-row py-2">
          <div className="flex-1 text-left font-light text-zinc-300">
            Creator Royalty
          </div>
          <div className=" bg-zinc-300 px-1 text-right font-bold text-zinc-700">
            10%
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-row py-2">
          <div className="flex-1 text-left font-light text-zinc-300">
            Unique Owners
          </div>
          <div className=" bg-zinc-300 px-1 text-right font-bold text-zinc-700">
            {stats && stats?.uniqueOwners}
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-row py-2">
          <div className="flex-1 text-left font-light text-zinc-300">
            Contract
          </div>
          <div
            className={
              "  px-1 text-right font-bold text-zinc-700 " +
              (copied ? "bg-green-300" : "bg-zinc-300")
            }
          >
            {compressAddress(collection.contractAddress!)}
          </div>

          <button
            type="button"
            onClick={() => {
              // Copy the text inside the text field
              navigator.clipboard.writeText(collection.contractAddress!);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 1000);
            }}
          >
            {!copied && <ClipboardDocumentIcon className="x-1 w-5 py-1 " />}
            {copied && (
              <CheckIcon className="x-1 w-5 py-1 font-bold text-green-600" />
            )}
          </button>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default CollectionInfo;
