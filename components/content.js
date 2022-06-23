import React from "react";
import Image from "next/image";
import web from "../public/web.png";
import styles from "../styles/Home.module.scss";
import circle from "../public/circle.png";
import mobiles from "../public/mobiles.png";

function Content() {
  return (
    <>
      <div className={styles.wrapper} id="services">
        <div className={styles.content}>
          <p className={styles.yh}>OUR SERVICES</p>
          <p className={styles.bh}>
            Our services are great for individuals, startups and enterprises
          </p>
          <div className={styles.layout}>
            <div className={styles.left}>
              <div className={styles.box}>
                <figure className={styles.bi}>
                  <Image src={web} alt="web" width={72} height={72} />
                </figure>
                <div className={styles.detail}>
                  <h4>Web Development</h4>
                  <p>
                    We offer a full cycle of Android and iOS mobile application
                    design, integration, and management services.
                  </p>
                </div>
              </div>

              <div className={styles.box}>
                <figure className={styles.bi}>
                  <Image src={web} alt="web" width={72} height={72} />
                </figure>
                <div className={styles.detail}>
                  <h4>Graphic Design | UI/UX</h4>
                  <p>
                    We offer a full cycle of Android and iOS mobile application
                    design, integration, and management services.
                  </p>
                </div>
              </div>

              <div className={styles.box}>
                <figure className={styles.bi}>
                  <Image src={web} alt="web" width={72} height={72} />
                </figure>
                <div className={styles.detail}>
                  <h4>App Development</h4>
                  <p>
                    We offer a full cycle of Android and iOS mobile application
                    design, integration, and management services.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.center}>
              <Image src={circle} alt="circle" width={576} height={576} />
              <figure className={styles.mobile}>
                <Image src={mobiles} alt="mobile" width={619} height={860} />
              </figure>
            </div>

            <div className={styles.right}>
              <div className={styles.box}>
                <figure className={styles.bi}>
                  <Image src={web} alt="web" width={72} height={72} />
                </figure>
                <div className={styles.detail}>
                  <h4>App Development</h4>
                  <p>
                    We offer a full cycle of Android and iOS mobile application
                    design, integration, and management services.
                  </p>
                </div>
              </div>

              <div className={styles.box}>
                <figure className={styles.bi}>
                  <Image src={web} alt="web" width={72} height={72} />
                </figure>
                <div className={styles.detail}>
                  <h4>App Development</h4>
                  <p>
                    We offer a full cycle of Android and iOS mobile application
                    design, integration, and management services.
                  </p>
                </div>
              </div>

              <div className={styles.box}>
                <figure className={styles.bi}>
                  <Image src={web} alt="web" width={72} height={72} />
                </figure>
                <div className={styles.detail}>
                  <h4>App Development</h4>
                  <p>
                    We offer a full cycle of Android and iOS mobile application
                    design, integration, and management services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
