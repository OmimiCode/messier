"use client";
import Image from "next/image";
import messier_logo from "@assets/messier-logo-pack/MESSIER 1.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="inline fixed bottom-0 inset-x-0  z-10">
      <div className="mx-auto max-w-7xl pb-2 flex-col md:flex-row md:flex md:items-end md:justify-between lg:px-8">
        <div className="hidden sm:flex mt-2 md:mt-0 flex-col items-center sm:items-start">
          <div
            className={`${
              pathname.startsWith("/main") && "opacity-20"
            } mb-2 flex justify-center items-center`}
          >
            <Image
              src={messier_logo}
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10 object-contain"
            />
            <span className="ml-2 inline text-3xl font-bold text-white">
              MESSIER
            </span>
          </div>
          <p className="text-center uppercase text-xs leading-5 text-gray-500">
            securITY, confidentialITY, and viablITY.
          </p>
        </div>
        <div className={` flex lg:flex-1 justify-center lg:justify-end gap-6`}>
          <Link
            href="https://messier.gitbook.io/)"
            className="inline text-white text-base "
          >
            CATALOGUE
          </Link>
          <div className=" text-white text-base flex space-x-4 items-center ">
            <Link href="https://twitter.com/MessierM87" className=" inline">
              TW <ArrowTopRightOnSquareIcon className="w-5 h-5 inline" />
            </Link>
            <Link href="https://t.me/MessierM87Community" className=" inline">
              TG <ArrowTopRightOnSquareIcon className="w-5 h-5 inline" />
            </Link>
            <Link href="https://discord.gg/messierm87" className="inline">
              DC <ArrowTopRightOnSquareIcon className="w-5 h-5 inline" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
