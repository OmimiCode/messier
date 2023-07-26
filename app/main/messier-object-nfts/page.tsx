// @ts-nocheck
"use client";
import { useContext, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import { useIsomorphicLayoutEffect } from "@lib/helpers/isomorphicEffect";
import TransitionContext from "@context/TransitionContext";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.normalizeScroll(true);

export default function Layers() {
  const main = useRef();
  const scrollTween = useRef();
  const [ctx] = useState(gsap.context(() => {}, main));
  const { completed } = useContext(TransitionContext);

  const goToSection = (i) => {
    // Remove the GSAP instance with the specific ID
    // to prevent memory leak
    ctx.data.forEach((e) => {
      if (e.vars && e.vars.id === "scrollTween") {
        e.kill();
      }
    });
    ctx.add(() => {
      scrollTween.current = gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 1,
        id: "scrollTween",
        onComplete: () => (scrollTween.current = null),
        overwrite: true,
      });
    });
  };

  useIsomorphicLayoutEffect(() => {
    if (!completed) return;
    ctx.add(() => {
      const panels = gsap.utils.toArray(".panel");
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom",
          end: "+=200%",
          onToggle: (self) =>
            self.isActive && !scrollTween.current && goToSection(i),
        });
      });

      ScrollTrigger.create({
        start: 0,
        end: "max",
        snap: 1 / (panels.length - 1),
      });
    });
    return () => ctx.revert();
  }, [completed]);
  return (
    <main ref={main}>
      {/* Messier oBJECT nfts*/}

      <section className="panel relative isolate overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl justify-end items-end px-6 lg:px-8 pt-32 lg:pb-10 lg:py-80">
          <div className="text-end flex flex-col justify-end items-end">
            <Link
              href="virgo.messier.app/nfts"
              className=" uppercase text-6xl font-semibold tracking-tight text-white sm:text-9xl"
            >
              Messier Objects NFTS
            </Link>
            <p className="mt-6 text-sm sm:text-lg uppercase text-white/50 ">
              The artwork of the NFTs contains an artistic interpretation
              depicting the astronomer{" "}
              <span className="text-white ml-2">
                &ldquo;Charles Messier&rdquo;
              </span>{" "}
              and each NFTs contains one unique Nebula or Star Cluster from the
              110
              <span className="text-white ml-2">&ldquo;Messier Objects&rdquo;</span>{" "}
              embedded into their imagery.
            </p>
            <div className="max-w-7xl grid grid-cols-6 gap-6 sm:gap-12 mt-14">
              <p className="text-xs sm:text-sm uppercase col-span-full sm:col-span-2 text-white  ">
                You can earn 6.69% of rewards paid out by #VirgoDAO by
                purchasing one of our 110 NFTs.
              </p>

              <p className=" text-xs sm:text-sm uppercase col-span-full sm:col-span-2 text-white/50 ">
                Spend more to get a higher share on the Curve and reap even
                greater rewards.
              </p>
              <p className=" text-xs sm:text-sm uppercase col-span-full sm:col-span-2 text-white ">
                All M87 tokens used to buy NFTs are burned,ensuring their value
                rises with the token
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
