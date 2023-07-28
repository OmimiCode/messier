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
import CanvasScroll from "@components/3DScroll";
import ThemeSound from "@components/ThemeSound";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const contents = [
  {
    title: "VirgoDAO",
    caption:
      "VIRGO (DAO) IS GOVERNED BY M87 STAKERS AND RUN ENTIRELY BY SMART CONTRACTS. TREASURY FUNDS ARE SPENT, TOKENS ARE PURCHASED, AND REWARDS ARE DISTRIBUTED USING SMART CONTRACTS. SINCE THERE ARE NO MIDDLEMEN INVOLVED WITH VIRGO, IT IS COMPLETELY TRUSTLESS.",
    link: "main/virgo-dao",
  },
  {
    title: "Messier Objects NFTS",
    caption:
      "THE ARTWORK OF THE NFTS CONTAINS AN ARTISTIC INTERPRETATION DEPICTING THE ASTRONOMER “CHARLES MESSIER” AND EACH NFTS CONTAINS ONE UNIQUE NEBULA OR STAR CLUSTER FROM THE 110“MESSIER OBJECTS” EMBEDDED INTO THEIR IMAGERY.",
    link: "main/messier-object-nfts",
  },
  {
    title: "M87 TOKEN",
    caption:
      "M87 IS THE ECOSYSTEM TOKEN THAT CAN BE TRADED IN THE OPEN MARKET, STAKED IN VIRGO TO EARN PASSIVE INCOME REWARDS, OR USED TO BID ON THE“MESSIER OBJECTS NFTS",
    link: "main/m87-token",
  },
  {
    title: "OPENHATCH",
    caption:
      "OPEN HATCH CAN BE USED FOR PEER-TO-PEER TRANSACTIONS, FUNDRAISING, OR TRADING AND SERVICES. THE EXPLORER PLATFORM WITHIN OPEN HATCH EMERGES AS A SOCIAL MEDIA DAPP THAT CAN BE USED FOR CONNECTING WITH LIKE-MINDED INDIVIDUALS, SHARING CONTENT, AND CREATING ONLINE COMMUNITIES.",
    link: "main/open-hatch",
  },
  {
    title: "HORIZON",
    caption:
      "A PRIVACY APPLICATION THAT ENABLES USERS TO DEPOSIT AND WITHDRAW CRYPTOCURRENCY WHILE MAINTAINING THEIR ANONYMITY. USERS ARE GIVEN THE CHOICE TO DISSOCIATE THEMSELVES FROM AN ANONYMITY SET THAT MAY INCLUDE STOLEN OR LAUNDERED FUNDS WHILE PRESERVING USER PRIVACY.",
    link: "main/horizon",
  },
  {
    title: "ADASTRA",
    caption:
      "FACILITATE SECURE AND PRIVATE TRANSACTIONS USING CRYPTOCURRENCYSPEED, SECURITY, AND PRIVACY.",
    link: "main/adastra",
  },
];
function Content({ item }: { item: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 1000);

  return (
    <section className="section max-w-7xl mx-auto px-6 sm:px-8 snap-y flex items-center justify-center h-screen relative ">
      <div
        ref={ref}
        className="wrapper relative snap-center w-full h-full overflow-hidden flex justify-end items-end"
      >
        <div className="text-end absolute p-6 lg:p-8 inset-y-0 right-0 flex flex-col justify-center items-end max-w-xl glassmorphic-w">
          <Link
            href="http://virgo.messier.app"
            className="mt-10 text-2xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            {item?.title}
          </Link>
          {/* @ts-ignore */}
          <motion.div style={{ y }} className="max-w-xl">
            <p className="mt-6 text-xs sm:text-sm uppercase text-white/50  ">
              {item?.caption}
            </p>
          </motion.div>
          <Link
            href={item?.link}
            className="mt-6 underline text-lg font-normal tracking-wide text-white sm:text-xl"
          >
            Explore
          </Link>
        </div>
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
