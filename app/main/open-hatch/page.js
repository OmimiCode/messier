import Link from "next/link";

export default function Layers() {
  return (
    <main>
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
