import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Fragment, ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
