import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "../public/logo.png";

function Footer() {
  return (
    <>
      <div className={styles.wrapper} id="about">
        <div className={styles.footer}>
          <div className={styles.footer_row}>
            <div className={styles.b1}>
              <figure className={styles.logos}>
                <Image
                  src={logo}
                  alt="OBS TECHNOLOGIA"
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
              <p>
                OBS Technologia is one of the fastest-growing IT companies
                providing various solutions and services across industries
              </p>
            </div>
            <div className={styles.b2}>
              <h3>Call us</h3>
              <p>051-8892643</p>
              <p>0304-4366760</p>
            </div>
            <div className={styles.b2}>
              <h3 className={styles.hadd}>Address</h3>
              <p className={styles.address}>
                Office # 2, 3rd Floor Huzaifah Centre I-8 Markaz, Islamabad
              </p>
            </div>
            <div className={styles.b2}>
              <h3>Email</h3>
              <p className={styles.email}>Ceo@obstechnologia.com</p>
              <p className={styles.email}>hr@obstechnologia.com</p>
            </div>
          </div>
          <div className={styles.bottom_footer}>
            <p>@2021 FUTURE,OBS Technologia,All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;