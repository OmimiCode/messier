import Link from "next/link";

export default function Layers() {
  return (
    <main>
      {/* Horizon*/}
      <section className="panel relative isolate overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl justify-end items-end px-6 lg:px-8 pt-32 lg:pb-10 lg:pt-96">
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
    </main>
  );
}
