import Link from "next/link";

import { MotionDiv } from "@/components/motion-div";
import { footerLinks } from "@/config";

export function Footer() {
  return (
    <footer>
      <MotionDiv
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <div>
          {footerLinks.map(({ href, label, target }) => (
            <Link key={href} href={href} target={target}>
              {label}
            </Link>
          ))}
        </div>
        <p>&copy; 2024 Upal Barua. All rights reserved</p>
      </MotionDiv>
    </footer>
  );
}
