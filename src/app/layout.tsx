import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import { PhotoProvider } from "@/components/photo-provider";
import { ActiveSectionContextProvider } from "@/context/active-section-context";
import { css } from "styled-system/css";
import { container, vstack } from "styled-system/patterns";
import { outfit } from "./fonts";

import "react-photo-view/dist/react-photo-view.css";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={outfit.className}>
      <body
        className={container({
          color: "foreground",
          bg: "background",
          scrollBehavior: "smooth",
        })}
      >
        <ActiveSectionContextProvider>
          <PhotoProvider>
            <div
              className={vstack({
                pos: "relative",
                minH: "screen",
                "&>div:nth-child(2)": {
                  flex: 1,
                },
              })}
            >
              <Navbar />
              <div
                className={css({
                  zIndex: 10,
                  pos: "relative",
                })}
              >
                {children}
              </div>
              <Footer />
              <div
                className={css({
                  bgImage:
                    "linear-gradient(297deg, {colors.success} 35%, {colors.blue} 70%)",
                  animationDuration: "8000ms",
                  pos: "fixed",
                  top: "-50%",
                  right: "0%",
                  aspectRatio: 1,
                  width: "50rem",
                  animation: "spin",
                  rounded: "full",
                  opacity: 0.25,
                  filter: "blur(8rem)",
                })}
              />
              <div
                className={css({
                  pos: "fixed",
                  left: 0,
                  bottom: "-50%",
                  aspectRatio: 1,
                  rounded: "full",
                  width: "50rem",
                  opacity: 0.25,
                  bgImage:
                    "linear-gradient(130deg, {colors.accent} 20%, {colors.purple} 50%)",
                  animation: "spin",
                  filter: "blur(8rem)",
                  animationDuration: "7000ms",
                })}
              />
            </div>
            <Toaster />
          </PhotoProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
