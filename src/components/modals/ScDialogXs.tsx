import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export interface SmallDialogProps {
  onClose?: () => void;
  children?: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  hideCloseButton?: boolean;
}
export default function ScDialogXs(props: SmallDialogProps) {
  useEffect(() => {
    if (!props.open) {
      if (props.onClose) {
        props.onClose();
      }
    }
  }, [props.open]);

  return props.open ? (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-black/60">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className=" min-w-96 group relative  my-2 transform items-center  overflow-hidden border border-black bg-white  p-4 text-center    font-poppins text-xl  text-black     ">
                {props.hideCloseButton ? null : (
                  <div className="absolute top-2 right-2 hidden pt-1 pr-3 sm:block">
                    <button
                      type="button"
                      className="  rounded-md text-black hover:text-black/50"
                      onClick={() => props.setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                )}
                <div className=" p-4">{props.children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  ) : null;
}
