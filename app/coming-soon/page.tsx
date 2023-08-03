"use client";
import { useContext, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";
import messier_logo from "@assets/messier-logo-pack/MESSIER 1.png";
import { AppContext } from "@context/AppContext";
import Link from "next/link";
interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 5000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div
        className="text-[250px] font-thin text-white/50 uppercase items-center gap-x-20 flex justify-between flex-nowrap whitespace-nowrap"
        style={{ x }}
      >
        <span className="text-white/50 ">{children} </span>
        <span className="text-white/50 ">{children} </span>
        <span className="text-white/50 ">{children} </span>
        <span className="text-white/50 ">{children} </span>
        <span className="text-white/50 ">{children} </span>
      </motion.div>
    </div>
  );
}

export default function VelocityScroll() {
  const { playClick } = useContext(AppContext);
  return (
    <section className="relative py-32 lg:py-40 flex flex-col items-center justify-center gap-10 min-h-screen">
      <ParallaxText baseVelocity={5}>PLEASE HOLD...</ParallaxText>
      <ParallaxText baseVelocity={-5}>COMING SOON!</ParallaxText>
      <p className="mt-10 text-xs sm:text-sm uppercase tracking-widest text-white  ">
        we are actively working on it
      </p>
      <Link
        onClick={playClick}
        href={"/"}
        className=" text-black font-normal tracking-wide rounded-full bg-white sm:hover:bg-transparent sm:hover:text-white text-center text-lg sm:text-xl border py-2 px-4 border-white/50"
      >
        GO HOME
      </Link>
    </section>
  );
}
