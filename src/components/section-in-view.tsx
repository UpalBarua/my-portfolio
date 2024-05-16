"use client";

import { HTMLAttributes, ReactNode } from "react";

import useSectionInView from "@/hooks/useSectionInView";
import type { SectionNames } from "@/types";

type SectionInViewProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  sectionName: SectionNames;
  threshold?: number;
};

export function SectionInView({
  sectionName,
  children,
  ...restProps
}: Readonly<SectionInViewProps>) {
  const { ref } = useSectionInView(sectionName);
  return (
    <div ref={ref} {...restProps}>
      {children}
    </div>
  );
}
