import React from "react";
// import banner from "../public/banner.png";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import img from "../public/right.png";
function Banner() {
  return (
    <>
      <div className={styles.banner_container}>
        {" "}
        <div className={styles.black}></div>
        <div className={styles.b}></div>{" "}
        <div className={styles.wrapper}>
          <div className={styles.banner}>
            <div className={styles.bl}>
              <p>Excellent IT services for your success</p>
              <h2>Innovative future of digital world.</h2>
              <p className={styles.bannerp}>
                We help businesses digitally transform by building innovative
                products{" "}
              </p>
            </div>
            <div className={styles.cover}>
              <div className={styles.br}>
                <Image
                  src={img}
                  alt="phone"
                  layout="fill"
                  objectFit="contain"
                  priority
                  smooth
                  className={styles.br}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
