import React from "react";
import Image from "next/image";
import portfolio from "../public/portfolio.png";
import styles from "../styles/Home.module.scss";

function Portfolio() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.portfolio}>
          <div className={styles.pleft}>
            <Image src={portfolio} width={946} alt="portfolio " height={835} />
          </div>
          <div className={styles.pright}>
            <h4>OUR PORTFOLIO</h4>
            <p>
              At OBS Technologia, we are ensuring to compete with the ever
              challenging and diverse market of Apple App store by our
              innovative, creative and eye catching applications.
            </p>
            <p>
              We believe in the excellence of our applications through our best
              professional team. Over the time we have coordinated with number
              of local and foreign clients and worked on different projects from
              different domains.
            </p>
            <h3>Want to see our projects ? Click on the Button!</h3>
            <button>Let’s go</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
