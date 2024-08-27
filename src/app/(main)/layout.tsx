import { ReactNode } from "react";

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";

import { vstack } from "styled-system/patterns";
import { css } from "styled-system/css";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
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
  );
}
