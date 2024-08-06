import Image from "next/image";
import { FacebookIcon } from "lucide-react";

import styles from "./hero2.module.scss";
import { css } from "styled-system/css";

export function Hero2() {
  return (
    <section
      className={css({
        bg: "slate.800",
        color: "slate.50",
      })}
    >
      <div className={styles.intro}>
        <div className={styles.header}>
          <div className={styles.about}>
            <Image
              className={styles.avatar}
              src="/images/avatar.svg"
              alt="avatar"
              height="100"
              width="100"
            />
            <div>
              <h4 className={styles.headline}>Hello 👋, I'm Upal.</h4>
              <span className={styles.message}>Full-stack developer</span>
            </div>
          </div>
          <div className={styles.social}>
            {Array(3)
              .fill("")
              .map((_, i) => (
                <a key={i} target="_blank">
                  <FacebookIcon className={styles.icon} />
                </a>
              ))}
          </div>
        </div>
        <div>
          <h1 className={styles.heading}>
            I craft intuitive and dynamic web experiences with an eye for design
            and a passion for coding.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
      </div>
    </section>
  );
}
