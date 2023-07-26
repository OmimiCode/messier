"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      router.push("/main");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]);
  return (
    <div className="relative isolate overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl justify-between items-start px-6 lg:px-8 pt-32 lg:flex pb-10 lg:pt-80">
        <div className="mx-auto flex-shrink-0 lg:mx-0 max-w-4xl">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-7xl">
            MESSIER ECOSYSTEM
          </h1>
          <p className="mt-6 text-xs uppercase text-gray-300 w-4/5">
            Our mission is to create decentralized applications that make
            cryptocurrency transactions more secure, confidential, and viable.
          </p>
          <button
            onClick={() => {
              router.push("/main");
            }}
            className=" ring-1 mt-6 py-2 px-4 sm:hidden ring-gray-700  inline text-white/50 uppercase text-base  "
          >
            starts here
          </button>
          <form className="mt-40  gap-x-6 max-w-sm">
            <p className="text-sm font-semibold leading-6 text-white">
              SIGN UP HERE
            </p>
            <div className=" flex items-center ring-1 ring-gray-700  mt-2">
              <input
                type="email"
                placeholder="EXAMPLE@MAIL.COM"
                className="px-3.5 text-sm sm:text-xl placeholder:text-white/50 placeholder:font-thin py-2.5 w-4/6  text-white font-semibold bg-transparent outline-none"
              />
              <button className="inline text-white/50 uppercase text-base w-2/6 ">
                sign up
              </button>
            </div>
          </form>
        </div>
        {/* animation */}
        {/* <div className="mx-auto bg-white sm:min-w-5xl  mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:min-w-5xl lg:max-w-none text-white"></div>
        </div> */}
        <div className="hidden lg:flex flex-col justify-end items-end ">
          <h3 className="mt-10 uppercase text-lg text-end font-bold tracking-tight text-white sm:text-xl">
            your journey starts here
          </h3>

          <h3 className=" text-white/50  text-center mt-6 text-xs uppercase border py-4 border-white/50 text-gray-300 w-4/5">
            click enter to START
          </h3>
        </div>
      </div>
    </div>
  );
}
