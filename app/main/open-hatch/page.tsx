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

  // useIsomorphicLayoutEffect(() => {
  //   if (!completed) return;
  //   ctx.add(() => {
  //     const panels = gsap.utils.toArray(".panel");
  //     panels.forEach((panel, i) => {
  //       ScrollTrigger.create({
  //         trigger: panel,
  //         start: "top bottom",
  //         end: "+=200%",
  //         onToggle: (self) =>
  //           self.isActive && !scrollTween.current && goToSection(i),
  //       });
  //     });

  //     ScrollTrigger.create({
  //       start: 0,
  //       end: "max",
  //       snap: 1 / (panels.length - 1),
  //     });
  //   });
  //   return () => ctx.revert();
  // }, [completed]);
  return (
    <main ref={main}>
      {/* OpenHatch */}
      <section className="panel relative isolate overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl justify-end items-end px-6 lg:px-8 pt-32 lg:pb-10 lg:pt-96">
          <div className="text-end flex flex-col justify-end items-end">
            <Link
              href="http://virgo.messier.app"
              className="mt-10 text-6xl font-medium tracking-tight text-white sm:text-9xl"
            >
              OpenHatch
            </Link>

            <div className="max-w-xl">
              <p className="mt-36 text-xs sm:text-sm uppercase text-white/50  ">
                Open Hatch can be used for peer-to-peer transactions,
                fundraising, or trading and services.{" "}
                <span className="text-white ml-2">
                  The Explorer Platform within Open Hatch emerges as a social
                  media dapp that can be used for connecting with like-minded
                  individuals, sharing content, and creating online communities.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
