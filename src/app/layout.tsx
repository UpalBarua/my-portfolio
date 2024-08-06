import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

import { PhotoProvider } from "@/components/photo-provider";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext";
import { container } from "styled-system/patterns";
import { outfit } from "./fonts";

import "react-photo-view/dist/react-photo-view.css";
import "react-quill/dist/quill.snow.css";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={outfit.className}>
      <body
        className={container({
          bg: "bg",
          color: "fg",
          scrollBehavior: "smooth",
        })}
      >
        <ActiveSectionContextProvider>
          <PhotoProvider>
            {children}
            <Toaster />
          </PhotoProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
