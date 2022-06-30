import React from "react";
import logo from "../public/logo.png";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <figure className={styles.hlogo}>
          <Image
            src={logo}
            alt="OBS TECHNOLOGIA"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <ul className={styles.center_nav}>
          <li>
            <Link href="/">Agency</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/#services">Services </Link>
          </li>
          <li>
            <Link href="/#contact" smooth="true">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="right-nav">
          <li>
            {" "}
            <Link href="/#about" smooth="true">
              About
            </Link>
          </li>
          <li className={styles.btn}>Let&apos;s Talk</li>
        </ul>
      </header>
    </>
  );
}

export default Header;
