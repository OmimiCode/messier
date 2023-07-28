"use client";
import { Fragment, useState, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { AppContext } from "@context/AppContext";
import { usePathname } from "next/navigation";

const pages = [
  {
    name: "VIRGODAO",
    url: "/main/virgo-dao",
  },
  {
    name: "MESSIER OBJECTS NFTS",
    url: "/main/messier-object-nfts",
  },
  {
    name: "M87 TOKEN",
    url: "/main/m87-token",
  },
  {
    name: "OPENHATCH",
    url: "/main/open-hatch",
  },
  {
    name: "HORIZON",
    url: "/main/horizon",
  },
  {
    name: "ADASTRA",
    url: "/main/adastra",
  },
];

function SideBar() {
  const { menuOpened, toggleMenu } = useContext(AppContext);
  const pathname = usePathname();

  return (
    <aside className=" fixed top-2 z-50 ml-2 lg:ml-36 ">
      {/* sidebar */}
      <Transition.Root show={menuOpened} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggleMenu}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-7xl">
                    <div className="flex h-full flex-col overflow-y-scroll glassmorphic-w py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-end ">
                          <div className="m-3 flex h-7 items-center justify-self-end">
                            <button
                              type="button"
                              className="rounded-full text-2xl text-white hover:text-gray-500 focus:outline-none"
                              onClick={toggleMenu}
                            >
                              <span className="sr-only">Close panel</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-12 h-12"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="absolute inset-0 p-8 sm:px-20 ">
                          <div className="flex justify-around ">
                            <div className="flex flex-col py-4">
                              <h3 className=" text-lg lg:text-2xl text-white/50  mb-6 sm:mb-10">
                                MENU
                              </h3>
                              <ul className="  flex flex-col gap-6 text-white">
                                {pages.map((page, idx) => (
                                  <li key={idx}>
                                    <Link
                                      className="text-3xl lg:text-7xl"
                                      href={page.url}
                                      onClick={toggleMenu}
                                    >
                                      {page.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </aside>
  );
}

export default SideBar;
