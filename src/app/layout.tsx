"use client";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "@/styles/globals.scss";
import { outfit } from "./fonts";

const TOASTER_STYLES = {
  backgroundColor: "hsl(210, 3%, 16%)",
  color: "hsl(0, 0%, 100%)",
  fontSize: "1.125rem",
  boxShadow:
    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ActiveSectionContextProvider>
          <div className={outfit.className + " container"}>
            <Header />
            <PhotoProvider>{children}</PhotoProvider>
            <Footer />
            <Toaster
              toastOptions={{
                style: TOASTER_STYLES,
              }}
            />
          </div>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
