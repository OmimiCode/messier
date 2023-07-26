"use client";
import { useContext, useRef, useState } from "react";
import gsap from "gsap-trial/dist/gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap-trial/dist/ScrollToPlugin";

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
      {/* ADASTRA */}
      <section className="panel relative isolate overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl justify-end items-end px-6 lg:px-8 pt-32 lg:pb-10 lg:py-30">
          <div className="text-end flex flex-col justify-end items-end">
            <Link
              href="virgo.messier.app/nfts"
              className=" uppercase text-6xl font-semibold tracking-tight text-white sm:text-9xl"
            >
              ADASTRA
            </Link>
            <div className="max-w-5xl">
              <p className="mt-6 text-lg uppercase text-white/50  ">
                facilitate secure and private transactions using cryptocurrency
                <span className="text-white ml-2">
                  speed, security, and privacy.
                </span>
                .
              </p>
            </div>

            <div className="max-w-4xl grid grid-cols-6 gap-12 mt-14">
              <p className="text-xs sm:text-sm uppercase col-span-full sm:col-span-3 text-white  ">
                Adastra Wallet
                <span className="block text-white/50 mt-2 ">
                  Unlike many wallets provided by exchanges, the Adastra Wallet
                  is a non-custodial crypto wallet. This means that you, and
                  only you, have access to your private keys and assets. You are
                  in total control of your crypto. That also means not even
                  Adastra has access to your funds, so make sure to securely
                  back up your private keys.
                </span>
              </p>
              <p className="text-xs sm:text-sm uppercase col-span-full sm:col-span-3 text-white  ">
                Adastra Card
                <span className="block text-white/50 mt-2 ">
                  Adastra offers a unique card solution that is distinct from a
                  traditional crypto credit card. The Adastra card is a prepaid
                  debit card, providing customers with the flexibility to fund
                  it using their preferred wallet within the Adastra app. The
                  card is available in two formats: a virtual crypto card for
                  online transactions and a physical plastic card for in-person
                  purchases.
                </span>
              </p>
              <p className="text-xs sm:text-sm uppercase col-span-full sm:col-span-3 text-white  ">
                pos MACHINE SYSTEM
                <span className="block text-white/50 mt-2 ">
                  The Adastra POS Machine System revolutionizes retail
                  transactions by enabling seamless acceptance of cryptocurrency
                  payments. With its advanced technology and user-friendly
                  interface, merchants can embrace the future of digital
                  payments while providing customers with an innovative and
                  secure payment experience.
                </span>
              </p>
              <p className="text-xs sm:text-sm uppercase col-span-full sm:col-span-3 text-white  ">
                weB GATEWAY INTEGRATION
                <span className="block text-white/50 mt-2 ">
                  Adastra has developed the Adastra Crypto Payment Gateway,
                  exclusively for online businesses. This solution enables
                  merchants to effortlessly accept cryptocurrency payments. When
                  customers make payments with cryptocurrency, the funds are
                  directly deposited into the merchant&apos;s wallet. It&apos;s
                  a secure and streamlined process.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
