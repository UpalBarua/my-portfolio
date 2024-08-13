import { ReactNode } from "react";

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";

import styles from "@/styles/main-layout.module.scss";
import { vstack } from "styled-system/patterns";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div
      className={vstack({
        minH: "screen",
        "&>div:nth-child(2)": {
          flex: 1,
        },
      })}
    >
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
