"use client";
import Image from "next/image";
import messier_logo from "@assets/messier-logo-pack/MESSIER 1.png";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="hidden sm:inline fixed bottom-0 inset-x-0  z-10">
      <div className="mx-auto max-w-7xl pb-2 flex-col md:flex-row md:flex md:items-end md:justify-between lg:px-8">
        <div className="mt-2 md:mt-0 flex flex-col items-center sm:items-start">
          <div className={`${pathname.startsWith("/main") && "opacity-20"} mb-2 flex justify-center items-center`}>
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
        <div className={` flex lg:flex-1 justify-center lg:justify-end gap-5`}>
          {pathname.startsWith("/main") ? (
            <div className="inline text-white/50 text-base   ">SCROLL</div>
          ) : (
            <>
              {" "}
              <div className="inline text-white text-base ">
                PRIVACY AND TERMS
              </div>{" "}
              <div className="inline text-white text-base   ">SOCIAL</div>{" "}
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
