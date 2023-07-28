import Link from "next/link";


export default function Layers() {

  return (
    <main>
      {/* m87 token */}
      <section className="panel relative isolate overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl justify-end items-end px-6 lg:px-8 pt-32 lg:pb-10 lg:py-80">
          <div className="text-end flex flex-col justify-end items-end">
            <Link
              href="virgo.messier.app/nfts"
              className=" uppercase text-6xl font-semibold tracking-tight text-white sm:text-9xl"
            >
              M87 Token
            </Link>
            <div className="max-w-4xl">
              <p className="mt-6 text-lg uppercase text-white/50  ">
                M87 is the ecosystem token that can be traded in the open
                market, staked in Virgo to earn passive income rewards, or used
                to bid on the
                <span className="text-white ml-2">&ldquo;Messier Objects NFTs&rdquo;</span>.
              </p>
            </div>

            <div className="max-w-7xl grid grid-cols-6 gap-12 mt-14">
              <p className="text-xs sm:text-sm uppercase col-span-full sm:col-span-3 text-white  ">
                The number of tokens an M87 holder stakes in Virgo will
                determine whether they can create proposals (Pōwehi) or vote on
                proposals (Halo) that pertain to spending treasury funds on alt
                tokens, which are then distributed to stakers.
              </p>

              <p className=" text-xs sm:text-xs uppercase col-span-full sm:col-span-3 text-white ">
                VirgoDAO treasury has been designed to contain a maximum of 87
                ETH tokens; any amount that surpasses this capacity triggers a
                smart contract that performs a buy & burn on the M87 token.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
