"use client";

import { dashboardNavLinks } from "@/config";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import styles from "./layout.module.scss";
import { usePathname } from "next/navigation";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: Readonly<DashboardLayoutProps>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  console.log(pathname);

  return (
    <main className={styles.dashboard}>
      <aside className={styles.sidebar} data-open={isSidebarOpen}>
        <div>
          <h2 className={styles.title}>Dashboard</h2>
          <button
            className={styles.toggle}
            aria-label="sidebar toggle"
            onClick={() => setIsSidebarOpen(false)}
          >
            <IoMdClose />
          </button>
        </div>
        <nav className={styles.navigation}>
          {dashboardNavLinks.map(({ label, href, Icon }) => (
            <Link
              className={styles.link}
              href={href}
              data-active={pathname?.startsWith("/dashboard" + href)}
            >
              <Icon className={styles.icon} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <div className={styles.content}>
        <div>
          <button
            className={styles.toggle}
            aria-label="sidebar toggle"
            onClick={() => setIsSidebarOpen(true)}
          >
            <HiDotsHorizontal />
          </button>
          <h2 className={styles.title}>Dashboard</h2>
        </div>
        <div>{children}</div>
      </div>
    </main>
  );
}
