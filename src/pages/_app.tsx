import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext";
import "@/styles/globals.scss";
import { LazyMotion, domAnimation } from "framer-motion";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export const outfit = localFont({
  src: "../../public/fonts/Outfit.ttf",
});

const TOASTER_STYLES = {
  backgroundColor: "hsl(210, 3%, 16%)",
  color: "hsl(0, 0%, 100%)",
  fontSize: "1.125rem",
  boxShadow:
    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <ActiveSectionContextProvider>
        <div className={outfit.className + " container"}>
          <Header />
          <PhotoProvider>
            <Component {...pageProps} />
          </PhotoProvider>
          <Footer />
          <Toaster
            toastOptions={{
              style: TOASTER_STYLES,
            }}
          />
        </div>
      </ActiveSectionContextProvider>
    </LazyMotion>
  );
}
