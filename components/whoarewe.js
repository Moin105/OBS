import React from "react";
import styles from "../styles/Home.module.scss";
function WhoAreWe() {
  return (
    <>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.wrw}>
            {" "}
            <p className={styles.yh}>WHO ARE WE?</p>
            <p className={styles.bh}>
              We are one of the fastest growing IT family in Pakistan.
            </p>
            <p className={styles.wrwp}>
              OBS Technologia is one of the fastest-growing IT companies
              providing various solutions and services across industries. We
              provide complete solutions that include the development of mobile
              apps, web apps, and fin-tech solutions. Our Clientage has grown
              exponentially within years as we have had the privilege of working
              with clients from America, Australia, the United Kingdom, Saudi
              Arabia, Germany, India, Russia, and the Central Republic of
              Africa. Our current target is to provide cost-effective &
              user-friendly solutions using the latest technological trends.{" "}
            </p>
          </div>
        </div>
        <div className={styles.wrwbg}>
          <h2>
            “We are changing the way technology happens. We have over dozens of
            mobile applications running on different Platforms across the
            world.”
          </h2>
        </div>
      </div>
    </>
  );
}

export default WhoAreWe;
