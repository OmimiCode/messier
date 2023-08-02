import Link from "next/link";
import Image from "next/image";
import horizon_logo from "@assets/messier-logo-pack/HORIZON.png";

export default function Layers() {
  return (
    <main>
      {/* Horizon*/}
      <section className="panel relative isolate overflow-hidden min-h-screen bg-black">
        <div className="absolute inset-y-0 -left-[50%] spin opacity-10 sm:hover:opacity-100">
          <Image
            src={horizon_logo}
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
              className="mt-10 text-6xl font-medium tracking-tight text-white sm:text-9xl"
            >
              Horizon
            </Link>

            <div className="max-w-xl">
              <p className="mt-36 text-xs sm:text-sm uppercase text-white/50  ">
                A privacy application that enables users to deposit and withdraw
                cryptocurrency while maintaining their anonymity.{" "}
                <span className="text-white ml-2">
                  Users are given the choice to dissociate themselves from an
                  anonymity set that may include stolen or laundered funds while
                  preserving user privacy.
                </span>
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
