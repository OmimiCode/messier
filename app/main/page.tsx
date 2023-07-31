"use client";
import Link from "next/link";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import CanvasScroll from "@components/3DScroll";
import ThemeSound from "@components/ThemeSound";
import Image from "next/image";
import adastra_logo from "@assets/messier-logo-pack/ADASTRA Logo W.png";
import openhatch_logo from "@assets/messier-logo-pack/OPEN HATCH.png";
import horizon_logo from "@assets/messier-logo-pack/HORIZON.png";
import virgodao_logo from "@assets/messier-logo-pack/VIRGO.png";
import messier_logo from "@assets/messier-logo-pack/MESSIER 1.png";
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const contents = [
  {
    id: "virgo-dao",
    title: "VirgoDAO",
    caption:
      "VIRGO (DAO) IS GOVERNED BY M87 STAKERS AND RUN ENTIRELY BY SMART CONTRACTS. TREASURY FUNDS ARE SPENT, TOKENS ARE PURCHASED, AND REWARDS ARE DISTRIBUTED USING SMART CONTRACTS. SINCE THERE ARE NO MIDDLEMEN INVOLVED WITH VIRGO, IT IS COMPLETELY TRUSTLESS.",
    link: "main/virgo-dao",
    launch: "https://virgo.messier.app",
    action: "Launch Virgo",
    logo: virgodao_logo,
  },
  {
    id: "objects-nfts",
    title: "Messier Objects NFTS",
    caption:
      "THE ARTWORK OF THE NFTS CONTAINS AN ARTISTIC INTERPRETATION DEPICTING THE ASTRONOMER “CHARLES MESSIER” AND EACH NFTS CONTAINS ONE UNIQUE NEBULA OR STAR CLUSTER FROM THE 110“MESSIER OBJECTS” EMBEDDED INTO THEIR IMAGERY.",
    link: "main/messier-object-nfts",
    launch: "https://virgo.messier.app/nfts",
    action: "Launch NFT Platform",
    logo: messier_logo,
  },
  {
    id: "m87-token",
    title: "M87 TOKEN",
    caption:
      "M87 IS THE ECOSYSTEM TOKEN THAT CAN BE TRADED IN THE OPEN MARKET, STAKED IN VIRGO TO EARN PASSIVE INCOME REWARDS, OR USED TO BID ON THE“MESSIER OBJECTS NFTS",
    link: "main/m87-token",
    launch: "",
    action: "Buy M87",
    logo: messier_logo,
  },
  {
    id: "open-hatch",
    title: "OPENHATCH",
    caption:
      "OPEN HATCH CAN BE USED FOR PEER-TO-PEER TRANSACTIONS, FUNDRAISING, OR TRADING AND SERVICES. THE EXPLORER PLATFORM WITHIN OPEN HATCH EMERGES AS A SOCIAL MEDIA DAPP THAT CAN BE USED FOR CONNECTING WITH LIKE-MINDED INDIVIDUALS, SHARING CONTENT, AND CREATING ONLINE COMMUNITIES.",
    link: "main/open-hatch",
    launch: "https://openhatch.messier.app",
    action: "Launch dApp",
    logo: openhatch_logo,
  },
  {
    id: "horizon",
    title: "HORIZON",
    caption:
      "A PRIVACY APPLICATION THAT ENABLES USERS TO DEPOSIT AND WITHDRAW CRYPTOCURRENCY WHILE MAINTAINING THEIR ANONYMITY. USERS ARE GIVEN THE CHOICE TO DISSOCIATE THEMSELVES FROM AN ANONYMITY SET THAT MAY INCLUDE STOLEN OR LAUNDERED FUNDS WHILE PRESERVING USER PRIVACY.",
    link: "main/horizon",
    launch: "https://horizon.messier.app",
    action: "Launch dApp",
    logo: horizon_logo,
  },
  {
    id: "adastra",
    title: "ADASTRA",
    caption:
      "FACILITATE SECURE AND PRIVATE TRANSACTIONS USING CRYPTOCURRENCYSPEED, SECURITY, AND PRIVACY.",
    link: "main/adastra",
    launch: "",
    action: "Get on Google Play",
    logo: adastra_logo,
  },
];

function Content({ item }: { item: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);

  return (
    <section
      id={item?.id}
      className="section max-w-7xl mx-auto px-6 sm:px-8 snap-y flex items-center justify-center h-screen relative "
    >
      <div
        ref={ref}
        className="h-[450px] relative snap-center w-full overflow-hidden flex justify-end items-end"
      >
        <motion.div
          // id={item?.id}
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
          className="text-end absolute p-6 lg:p-8 inset-y-0 right-0 flex flex-col justify-center items-end max-w-xl glassmorphic-w"
        >
          <Image
            src={item?.logo}
            alt="logo"
            width={500}
            height={500}
            className="w-20 sm:w-32 h-20 sm:h-32 object-contain aspect-square"
          />
          <Link
            href={item?.link}
            className="mt-2 sm:mt-6 text-2xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            {item?.title}
          </Link>
          {/* @ts-ignore */}
          <motion.div style={{ y }} className="max-w-xl hidden sm:block ">
            <p className="mt-6 text-xs sm:text-sm uppercase text-white/50  ">
              {item?.caption}
            </p>
          </motion.div>
          <div className="max-w-xl sm:hidden block ">
            <p className="mt-6 text-xs sm:text-sm uppercase text-white/50  ">
              {item?.caption}
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-end sm:items-center text-left sm:text-center sm:justify-center justify-end gap-3 sm:gap-7">
            <Link
              href={item?.launch}
              className=" text-black font-normal tracking-wide rounded-full bg-white sm:hover:bg-transparent sm:hover:text-white text-center text-lg sm:text-xl border py-2 px-4 border-white/50"
            >
              {item?.action}
            </Link>
            <Link
              href={item?.link}
              className=" underline font-normal sm:tracking-wide text-white text-base sm:text-xl  py-2 px-4"
            >
              Explore
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default function Layers() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative mx-auto max-w-7xl px-6 sm:px-8">
      <div className=" fixed inset-y-0 inset-x-0">
        <CanvasScroll />
      </div>

      <button className="animate-bounce fixed glassmorphic-w p-4 right-10 bottom-10 sm:right-20 sm:bottom-20 flex space-y-2 flex-col justify-between items-center bg-white rounded-full ">
        <ChevronUpIcon className="w-6 h-6  text-white " />
        <div className="w-2 h-2  ring right-1 ring-white rounded-full" />
        <ChevronDownIcon className="w-6 h-6 text-white " />
      </button>

      <motion.div className="progress" style={{ scaleX }} />
      {contents.map((item, idx) => (
        <div key={idx}>
          <Content item={item} />
        </div>
      ))}
      {/* <aside className=" fixed inset-0 flex flex-col z-30 p-6  gap-10 h-screen mt-60 mb-40">
        <Link
          href="http://virgo.messier.app"
          className=" text-sm font-thin uppercase tracking-tight text-white/50 sm:text-xl"
        >
          <span className=" mr-2">01</span> - VirgoDAO
        </Link>
        <Link
          href="http://virgo.messier.app"
          className=" text-sm font-thin uppercase tracking-tight text-white/50 sm:text-xl"
        >
          <span className=" mr-2">01</span> - MESSIER OBJECT NFTS
        </Link>
        <Link
          href="http://virgo.messier.app"
          className=" text-sm font-thin uppercase tracking-tight text-white/50 sm:text-xl"
        >
          <span className=" mr-2">01</span> - M87 TOKEN
        </Link>{" "}
        <Link
          href="http://virgo.messier.app"
          className=" text-sm font-thin uppercase tracking-tight text-white/50 sm:text-xl"
        >
          <span className=" mr-2">01</span> - OPENHATCH
        </Link>{" "}
        <Link
          href="http://virgo.messier.app"
          className=" text-sm font-thin uppercase tracking-tight text-white/50 sm:text-xl"
        >
          <span className=" mr-2">01</span> - HORIZON
        </Link>{" "}
        <Link
          href="http://virgo.messier.app"
          className=" text-sm font-thin uppercase tracking-tight text-white/50 sm:text-xl"
        >
          <span className=" mr-2">01</span> - ADASTRA
        </Link>
      </aside> */}

      <ThemeSound />
    </main>
  );
}
