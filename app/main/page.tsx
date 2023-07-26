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
    <main className="relative mx-auto max-w-7xl px-6 sm:px-8" ref={main}>
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
      {/* Virgo DAO */}
      <section className="panel relative isolate overflow-hidden bg-transparent">
        <div className="mx-auto relative max-w-7xl justify-end items-end px-6 lg:px-8 pt-32  min-h-screen lg:pt-96">
          <div className="text-end absolute px-6 lg:px-8  inset-0 bottom-32 right-0 flex flex-col justify-end items-end">
            <Link
              href="http://virgo.messier.app"
              className="mt-10 text-2xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              VirgoDAO
            </Link>
            <div className="max-w-xl">
              <p className="mt-6 text-xs sm:text-sm uppercase text-white/50  ">
                Virgo (DAO) is governed by M87 stakers and run entirely by smart
                contracts. Treasury funds are spent, tokens are purchased, and
                rewards are distributed using smart contracts. Since there are
                no middlemen involved with Virgo, it is completely trustless.
              </p>
            </div>
            <Link
              href="/main/virgo-dao"
              className="mt-6 underline text-lg font-normal tracking-wide text-white sm:text-xl"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Messier Objects NFTs */}
      <section className="panel relative isolate overflow-hidden bg-black">
        <div className="mx-auto relative max-w-7xl justify-end items-end px-6 lg:px-8 pt-32  min-h-screen lg:pt-96">
          <div className="text-end absolute px-6 lg:px-8  inset-0 bottom-32 right-0 flex flex-col justify-end items-end">
            <Link
              href="http://virgo.messier.app"
              className="mt-10 text-2xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              Messier Objects NFTS
            </Link>
            <div className="max-w-xl">
              <p className="mt-6 text-xs sm:text-sm uppercase text-white/50  ">
                The artwork of the NFTs contains an artistic interpretation
                depicting the astronomer{" "}
                <span className="text-white ml-2">
                  &ldquo;Charles Messier&rdquo;
                </span>{" "}
                and each NFTs contains one unique Nebula or Star Cluster from
                the 110
                <span className="text-white ml-2">
                  &ldquo;Messier Objects&rdquo;
                </span>{" "}
                embedded into their imagery.
              </p>
            </div>
            <Link
              href="/main/messier-object-nfts"
              className="mt-6 underline text-lg font-normal tracking-wide text-white sm:text-xl"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* m87 token */}
      <section className="panel relative isolate overflow-hidden bg-black">
        <div className="mx-auto relative max-w-7xl justify-end items-end px-6 lg:px-8 pt-32  min-h-screen lg:pt-96">
          <div className="text-end absolute px-6 lg:px-8  inset-0 bottom-32 right-0 flex flex-col justify-end items-end">
            <Link
              href="http://virgo.messier.app"
              className="mt-10 text-2xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              M87 TOKEN
            </Link>
            <div className="max-w-xl">
              <p className="mt-6 text-xs sm:text-sm uppercase text-white/50  ">
                M87 is the ecosystem token that can be traded in the open
                market, staked in Virgo to earn passive income rewards, or used
                to bid on the
                <span className="text-white ml-2">
                  &ldquo;Messier Objects NFTs&ldquo;
                </span>
                .
              </p>
            </div>
            <Link
              href="/main/m87-token"
              className="mt-6 underline text-lg font-normal tracking-wide text-white sm:text-xl"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* OpenHatch */}
      <section className="panel relative isolate overflow-hidden bg-black">
        <div className="mx-auto relative max-w-7xl justify-end items-end px-6 lg:px-8 pt-32  min-h-screen lg:pt-96">
          <div className="text-end absolute px-6 lg:px-8  inset-0 bottom-32 right-0 flex flex-col justify-end items-end">
            <Link
              href="http://virgo.messier.app"
              className="mt-10 text-2xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              OPENHATCH
            </Link>
            <div className="max-w-xl">
              <p className="mt-6 text-xs sm:text-sm uppercase text-white/50  ">
                Open Hatch can be used for peer-to-peer transactions,
                fundraising, or trading and services.{" "}
                <span className="text-white ml-2">
                  The Explorer Platform within Open Hatch emerges as a social
                  media dapp that can be used for connecting with like-minded
                  individuals, sharing content, and creating online communities.
                </span>
              </p>
            </div>
            <Link
              href="/main/openhatch"
              className="mt-6 underline text-lg font-normal tracking-wide text-white sm:text-xl"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Horizon*/}
      <section className="panel relative isolate overflow-hidden bg-black">
        <div className="mx-auto relative max-w-7xl justify-end items-end px-6 lg:px-8 pt-32  min-h-screen lg:pt-96">
          <div className="text-end absolute px-6 lg:px-8  inset-0 bottom-32 right-0 flex flex-col justify-end items-end">
            <Link
              href="http://virgo.messier.app"
              className="mt-10 text-2xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              HORIZON
            </Link>
            <div className="max-w-xl">
              <p className="mt-6 text-xs sm:text-sm uppercase text-white/50  ">
                A privacy application that enables users to deposit and withdraw
                cryptocurrency while maintaining their anonymity.{" "}
                <span className="text-white ml-2">
                  Users are given the choice to dissociate themselves from an
                  anonymity set that may include stolen or laundered funds while
                  preserving user privacy.
                </span>
              </p>
            </div>
            <Link
              href="/main/horizon"
              className="mt-6 underline text-lg font-normal tracking-wide text-white sm:text-xl"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* ADASTRA */}
      <section className="panel relative isolate overflow-hidden bg-black">
        <div className="mx-auto relative max-w-7xl justify-end items-end px-6 lg:px-8 pt-32  min-h-screen lg:pt-96">
          <div className="text-end absolute px-6 lg:px-8  inset-0 bottom-32 right-0 flex flex-col justify-end items-end">
            <Link
              href="http://virgo.messier.app"
              className="mt-10 text-2xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              ADASTRA
            </Link>
            <div className="max-w-xl">
              <p className="mt-6 text-xs sm:text-sm uppercase text-white/50  ">
                facilitate secure and private transactions using cryptocurrency
                <span className="text-white ml-2">
                  speed, security, and privacy.
                </span>
                .
              </p>
            </div>
            <Link
              href="/main/adastra"
              className="mt-6 underline text-lg font-normal tracking-wide text-white sm:text-xl"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
