import Link from "next/link";
import Image from "next/image";
import messier_logo from "@assets/messier-logo-pack/MESSIER 1.png";

export default function Layers() {
  return (
    <main>
      {/* Messier oBJECT nfts*/}

      <section className=" relative isolate overflow-hidden min-h-screen bg-black">
        <div className="absolute inset-y-0 -left-[50%] spin opacity-10 sm:hover:opacity-100">
          <Image
            src={messier_logo}
            alt="logo"
            width={1000}
            height={1000}
            className="w-screen h-screen object-contain aspect-square"
          />
        </div>
        <div className="z-20 mx-auto max-w-7xl justify-end items-end px-6 lg:px-8 pt-32 lg:pb-10 lg:py-80">
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
              <span className="text-white ml-2">
                &ldquo;Messier Objects&rdquo;
              </span>{" "}
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
