import Image from "next/image";
import messier_logo from "@assets/messier-logo-pack/MESSIER 1.png";
function SplashScreen({ counter }: { counter: number }) {
  return (
    <main className="min-h-screen flex bg-black text-center justify-center items-center">
      <h1 className=" text-white text-[50vh] opacity-5 font-black ">
        {counter}
      </h1>
      <div className="z-10 absolute bg-white/10 w-24 h-24 rounded-full flex items-center justify-center ">
        <div className="flex items-center">
          <span className=" bg-black w-16 h-16 rounded-full flex items-center justify-center ">
            <Image
              src={messier_logo}
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10 object-contain"
            />
          </span>
        </div>
      </div>
    </main>
  );
}

export default SplashScreen;
