import React from "react";
import Image from "next/image";
import web from "../public/web.png";
import gd from "../public/gd.png";
import ad from "../public/ad.png";
import marketing from "../public/marketing.png";
import seo from "../public/seo.png";
import os from "../public/os.png";
// import web from "../public/web.png";
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
                    Our team creates web solutions including websites & web
                    applications.
                  </p>
                </div>
              </div>

              <div className={styles.box}>
                <figure className={styles.bi}>
                  <Image src={gd} alt="web" width={72} height={72} />
                </figure>
                <div className={styles.detail}>
                  <h4>Graphic Design | UI/UX</h4>
                  <p>
                    Without UI/UX an application is like a suit without a man.
                    We create visually appealing, digital interfaces that
                    attract and retain users.
                  </p>
                </div>
              </div>

              <div className={styles.box}>
                <figure className={styles.bi}>
                  <Image src={ad} alt="web" width={64.96} height={69.39} />
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
                  <Image src={marketing} alt="web" width={84} height={72} />
                </figure>
                <div className={styles.detail}>
                  <h4>Marketing</h4>
                  <p>
                    Want to sell a product? Our Experts provide PPC, SMM, SMO
                    services ensuring that we win the trust of Your Customers
                  </p>
                </div>
              </div>

              <div className={styles.box}>
                <figure className={styles.bi}>
                  <Image src={seo} alt="web" width={83} height={73.56} />
                </figure>
                <div className={styles.detail}>
                  <h4>SEO</h4>
                  <p>
                    We understand different elements and their working in Search
                    Engine Optimization. Hire us and turn the traffic into
                    customers
                  </p>
                </div>
              </div>

              <div className={styles.box}>
                <figure className={styles.bi}>
                  <Image src={os} alt="web" width={83} height={80} />
                </figure>
                <div className={styles.detail}>
                  <h4>Other Services</h4>
                  <p>
                    We can deliver a broad range of quality products and
                    solutions to meet your operational needs.
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
