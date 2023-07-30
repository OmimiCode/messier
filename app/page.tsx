"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import VelocityScroll from "@components/VelocityScroll";
export default function Home() {
  const router = useRouter();
  // @ts-ignore
  const handleKeyPress = (event) => {
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
      <VelocityScroll />
      <div className="mx-auto inset-0 absolute p max-w-7xl justify-between items-start px-6 lg:px-8 pt-32 lg:flex pb-10 lg:pt-80">
        <div className="mx-auto flex-shrink-0 lg:mx-0 max-w-4xl glassmorphic-w p-10 rounded-lg">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-7xl">
            MESSIER ECOSYSTEM
          </h1>
          <p className="mt-6 text-xs uppercase text-white w-4/5">
            Our mission is to create decentralized applications that make
            cryptocurrency transactions more secure, confidential, and viable.
          </p>

          <div className="">
            <h3 className="mt-10 uppercase text-lgfont-bold tracking-tight text-white sm:text-xl">
              your journey starts here
            </h3>

            <button
              onClick={() => {
                router.push("/main");
              }}
              className=" text-black animate-ping hover:animate-none bg-white sm:hover:bg-transparent sm:hover:text-white text-center mt-6 text-xs uppercase border py-4 border-white/50  w-full sm:w-2/5 "
            >
              click enter to START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
