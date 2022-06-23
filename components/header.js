import React from "react";
import logo from "../public/logo.png";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

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
          <li>Agency</li>
          <li>Portfolio</li>
          <li>
            <a href="#services">Services </a>
          </li>
          <li>
            <a href="#contact" smooth="true">
              Contact
            </a>
          </li>
        </ul>
        <ul className="right-nav">
          <li>About</li>
          <li className={styles.btn}>Let&apos;s Talk</li>
        </ul>
      </header>
    </>
  );
}

export default Header;
