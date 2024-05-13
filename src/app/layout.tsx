import PhotoProvider from "@/components/photo-provider";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext";
import "react-quill/dist/quill.snow.css";
import "@/styles/globals.scss";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "react-photo-view/dist/react-photo-view.css";
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

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={outfit.className + " container"}>
        <ActiveSectionContextProvider>
          <PhotoProvider>{children}</PhotoProvider>
          <Toaster
            toastOptions={{
              style: TOASTER_STYLES,
            }}
          />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
