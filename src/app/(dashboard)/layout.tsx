"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { BsTools } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosGitBranch, IoMdClose } from "react-icons/io";
import styles from "./layout.module.scss";
import { useState } from "react";

const dashboardNavLinks = [
  {
    label: "Skills",
    href: "/dashboard/skills",
    Icon: BsTools,
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    Icon: IoIosGitBranch,
  },
  {
    label: "Blog",
    href: "/dashboard/blog",
    Icon: GrArticle,
  },
] as const;

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: Readonly<DashboardLayoutProps>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            <Link className={styles.link} href={href}>
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
