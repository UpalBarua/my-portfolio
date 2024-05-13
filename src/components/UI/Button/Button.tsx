import type { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  variant: "primary" | "secondary" | "rounded";
  href?: Url;
  target?: string;
  asLink?: boolean;
  type?: string;
};

export const Button = ({
  children,
  variant,
  asLink,
  href,
  target,
  type,
  ...restProps
}: ButtonProps) => {
  return asLink ? (
    <Link
      className={styles.Button}
      href={href || "#"}
      data-variant={variant}
      target={target}
      {...restProps}
    >
      {children}
    </Link>
  ) : (
    <button className={styles.Button} data-variant={variant} {...restProps}>
      {children}
    </button>
  );
};
