import clsx from "clsx";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

import { PhotoProvider } from "@/components/photo-provider";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext";
import { outfit } from "./fonts";

import "@/styles/globals.scss";
import "react-photo-view/dist/react-photo-view.css";
import "react-quill/dist/quill.snow.css";

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

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={clsx(outfit.className, "container")}>
        <ActiveSectionContextProvider>
          <PhotoProvider>
            {children}
            <Toaster
              toastOptions={{
                style: TOASTER_STYLES,
              }}
            />
          </PhotoProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
