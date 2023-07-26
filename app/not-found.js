/* eslint-disable */
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="text-white text-center flex justify-center items-center h-screen">
        <div>
          <h2 className=" font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-relaxed">
            OPPS!
          </h2>
          <h2 className=" font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-loose">
            APPROACHING BLACK HOLE
          </h2>
          <p className=" text-base leading-loose">
            Could not find requested resource
          </p>
          <Link href="/">GO HOME</Link>
        </div>
      </div>
    </>
  );
}
