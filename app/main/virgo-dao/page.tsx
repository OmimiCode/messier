import Link from "next/link";

export default function Virgo() {
  return (
    <main>
      {/* Virgo DAO */}
      <section className="panel relative isolate overflow-hidden bg-transparent">
        <div className="mx-auto max-w-7xl justify-end items-end px-6 lg:px-8 pt-32 lg:pb-10 lg:pt-96">
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
        {/* Messier Objects NFTs */}
      </section>
    </main>
  );
}
