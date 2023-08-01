import Link from "next/link";
import Image from "next/image";
import virgodao_logo from "@assets/messier-logo-pack/VIRGO.png";

export default function Virgo() {
  return (
    <main>
      {/* Virgo DAO */}
      <section className=" relative isolate overflow-hidden min-h-screen bg-transparent">
        <div className="absolute inset-y-0 -left-[50%] spin opacity-10 hover:opacity-100">
          <Image
            src={virgodao_logo}
            alt="logo"
            width={1000}
            height={1000}
            className="w-screen h-screen object-contain aspect-square"
          />
        </div>
        <div className="z-20 mx-auto max-w-7xl justify-end items-end px-6 lg:px-8 pt-32 lg:pb-10 lg:pt-96">
          <div className="text-end flex flex-col justify-end items-end">
            <Link
              href="http://virgo.messier.app"
              className="mt-10 text-6xl font-semibold tracking-tight text-white sm:text-9xl"
            >
              VirgoDAO
            </Link>
            <p className="mt-6 text-lg uppercase text-white/50 ">
              governed by M87 stakers and run entirely by smart contracts.{" "}
              <span className="text-white ml-2">
                it is completely trustless.
              </span>
            </p>
            <div className="max-w-xl">
              <p className="mt-32 text-xs sm:text-sm uppercase text-white/50  ">
                Virgo (DAO) is governed by M87 stakers and run entirely by smart
                contracts. Treasury funds are spent, tokens are purchased, and
                rewards are distributed using smart contracts. Since there are
                no middlemen involved with Virgo, it is completely trustless.
              </p>
            </div>
          </div>
        </div>
      </section>
      <audio controls autoPlay className="hidden">
        <source
          src="https://testenv-virgo.messier.app/file/sound.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </main>
  );
}
