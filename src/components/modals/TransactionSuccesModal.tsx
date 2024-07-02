import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ScDialogXs, { SmallDialogProps } from "./ScDialogXs";
import Image from "next/image";

export interface DialogProps extends SmallDialogProps {
  title: string;
  content: string;
}
export default function TransactionSuccesModal(props: DialogProps) {
  return (
    <ScDialogXs
      onClose={() => {
        props.setOpen(false);
      }}
      open={props.open}
      setOpen={props.setOpen}
      hideCloseButton={true}
    >
      <div className="relative -m-5 border border-black">
        <div className="absolute -top-[14px] -left-[14px] h-[14px] w-[14px] border border-black bg-transparent"></div>
        <div className="absolute -bottom-[14px] -left-[14px] h-[14px] w-[14px] border border-black bg-transparent"></div>
        <div className="absolute -top-[14px] -right-[14px] h-[14px] w-[14px] border border-black bg-transparent"></div>
        <div className="absolute -bottom-[14px] -right-[14px] h-[14px] w-[14px] border border-black bg-transparent"></div>
        <div className=" flex max-w-md flex-col flex-wrap items-center justify-center">
          <Image
            src="/images/home/ball.svg"
            height={110}
            width={110}
            alt="ball"
            className="animate-spin-slow m-8"
          />
          <div className="mb-4 px-12 pt-2 font-neutral text-2xl font-bold text-black">
            {props.title}
          </div>
          <div className="mb-8 px-12 font-poppins text-sm font-light">
            <p className="text-sm">{props.content}</p>
          </div>
          <div className="mb-8 flex flex-col sm:flex-row">
            <button
              type="button"
              onClick={() => {
                props.setOpen(false);
              }}
              className="relative -inset-x-1 -inset-y-1.5 m-2 h-10 w-fit rounded-none border border-black bg-black px-4 py-1 text-white"
            >
              <p className="font-neutral text-base leading-8">OK</p>
            </button>
          </div>
        </div>
      </div>
    </ScDialogXs>
  );
}
