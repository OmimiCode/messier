// @ts-nocheck
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import dynamic from "next/dynamic";
import SideBar from "@/components/SideBar";
import { TransitionProvider } from "@context/TransitionContext";
import { AppProvider } from "@context/AppContext";
import TransitionComponent from "@components/Transiition";
// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const DynamicCursor = dynamic(
  () => import("../components/cursor/AnimatedCursor"),
  {
    ssr: false,
  }
);

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MESSIER",
  description:
    "CREATE DECENTRALIZED APPLICATIONS THAT MAKE CRYPTOCURRENCY TRANSACTIONS MORE SECURE, CONFIDENTIAL, AND VIABLE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={raleway.className}>
        <AppProvider>
          <TransitionProvider>
            <DynamicCursor />
            <SideBar />
            <NavBar />
            {children}
            {/* <TransitionComponent>{children}</TransitionComponent> */}
            <Footer />
          </TransitionProvider>
        </AppProvider>
      </body>
    </html>
  );
}
