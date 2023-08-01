// @ts-nocheck
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import dynamic from "next/dynamic";
import SideBar from "@/components/SideBar";
import { AppProvider } from "@context/AppContext";
import Outlet from "@components/Outlet";
import ThemeSound from "@components/ThemeSound";

// const DynamicSound = dynamic(() => import("@components/ThemeSound"), {
//   ssr: false,
// });
const DynamicCursor = dynamic(
  () => import("@components/cursor/AnimatedCursor"),
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
          {/* artifacts --start */}
          <DynamicCursor />
          <ThemeSound />
          {/* artifacts --end */}
          <SideBar />
          <Outlet>{children}</Outlet>
        </AppProvider>
      </body>
    </html>
  );
}
