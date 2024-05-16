import { ReactNode } from "react";

import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/navbar/navbar";

import styles from "@/styles/main-layout.module.scss";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div className={styles.mainLayout}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
