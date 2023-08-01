"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import VelocityScroll from "@components/VelocityScroll";
import { motion } from "framer-motion";
import Link from "next/link";
import { AppContext } from "@context/AppContext";
export default function Home() {
  const { playClick } = useContext(AppContext);
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
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="mx-auto flex-shrink-0 lg:mx-0 max-w-4xl glassmorphic-w px-10 py-20 rounded-lg"
        >
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-7xl">
            MESSIER ECOSYSTEM
          </h1>
          <p className="mt-6 text-xs uppercase text-white w-4/5">
            Our mission is to create decentralized applications that make
            cryptocurrency transactions more secure, confidential, and viable.
          </p>

          <p className="mt-10 uppercase text-lg font-bold tracking-tight text-white sm:text-xl">
            your journey starts here
          </p>
          <div className="mt-10">
            <Link
              href="/main"
              onClick={playClick}
              className="rounded-full text-black font-semibold bg-white sm:hover:bg-transparent sm:hover:text-white text-center mt-6 text-base uppercase border p-4 border-white/50  w-full sm:w-2/5 "
            >
              click enter to START
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
