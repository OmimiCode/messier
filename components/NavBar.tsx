"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import messier_logo from "@assets/messier-logo-pack/HORIZON.png";
import { AppContext } from "@context/AppContext";

export default function NavBar() {
  const { menuOpened, toggleMenu } = useContext(AppContext);
  const pathname = usePathname();
  return (
    <header className="border-b  border-b-gray-700 fixed inset-x-0  z-10 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-2 px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="hidden sm:inline text-white text-base  py-1 px-6 border border-gray-700"
          >
            HOME
          </Link>
          <Link href="/" className="mb-2 flex sm:hidden items-center space-x-2">
            <Image
              src={messier_logo}
              alt="logo"
              width={100}
              height={100}
              className="w-auto h-10 object-contain"
            />
            <span className="inline text-3xl font-bold text-white">
              MESSIER
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <div className="inline text-white text-base  py-2 px-6 border border-gray-700">
              MENU
            </div>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <h3 className="inline italic uppercase text-white text-base sm:text-2xl py-2 px-10 border border-gray-700">
            {pathname.replaceAll("/", " - ").replace(" - ", "")}
          </h3>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="inline text-white text-base  py-2 px-6 border border-gray-700">
            AUDIO
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline text-white text-base  py-2 px-6 border border-gray-700"
          >
            MENU
          </button>
        </div>
      </nav>
    </header>
  );
}
