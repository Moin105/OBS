import React from "react";
// import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import pf1 from "../public/pf1.png";
import pf2 from "../public/pf2.png";
import pf3 from "../public/pf3.png";
import pf4 from "../public/pf4.png";
import pf5 from "../public/pf5.png";
import pf6 from "../public/pf6.png";
import pf7 from "../public/pf7.png";
import pf8 from "../public/pf8.png";
import pw1 from "../public/pw1.png";
import pw2 from "../public/pw2.png";
import pw3 from "../public/pw3.png";
import Image from "next/image";

import Footer from "../components/footer";
function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.portfolio_wrapper}>
          <h2 className={styles.ph}>SELECTED PROJECTS</h2>
          <div className={styles.phl}></div>
          <p className={styles.text}>Take a look at some of our best work!</p>
          <div className={styles.c1}>
            <div className={styles.conl}>
              <h3>FightAlerts</h3>
              <p>
                Sick of missing your favorite fights? Fight alerts has got your
                back. Fight alerts is a mobile application that makes every MMA
                fan&apos;s life easy by scheduling alerts for upcoming UFC
                fights. We helped the client with the mobile app design and
                development. Design process extended to the marketing bit as
                well where we helped our client with the posters and flyers.{" "}
              </p>
            </div>
            <div className={styles.conr}>
              <figure>
                {" "}
                <Image
                  src={pf1}
                  alt="OBS TECHNOLOGIA"
                  width={807}
                  height={576}
                />
              </figure>
            </div>
          </div>
          <div className={styles.c2}>
            <div className={styles.conl}>
              <h3>Payfran</h3>
              <p>
                Payfran, is an International money transfer mobile application.
                This application is designed and developed specifically for the
                safest and most convenient international money transfer. As of
                now, PayFran is a popular and trusted money transfer service
                among the African diaspora within Europe. We developed the
                mobile application as well as the Website.{" "}
              </p>
            </div>
            <div className={styles.conr}>
              <figure>
                {" "}
                <Image
                  src={pf2}
                  alt="OBS TECHNOLOGIA"
                  width={576}
                  height={629}
                />
              </figure>
            </div>
          </div>

          <div className={styles.c1}>
            <div className={styles.conl}>
              <h3>I-ZERO</h3>
              <p>
                iZero is an online platform (“Services”) to enable those seeking
                Temporary Staffing for their projects (“Employer”) and for
                individuals or freelancers seeking temporary work (“staff”) to
                connect. iZero is an interactive online staffing service that is
                open to all. It is an invaluable app that caters for all aspects
                of zero hour and flexible contracts for both employers and
                staff. The platform allows for the full administration of
                searching, booking, contracting and compliance.
              </p>
            </div>
            <div className={styles.conr}>
              <figure>
                {" "}
                <Image
                  src={pf3}
                  alt="OBS TECHNOLOGIA"
                  width={640}
                  height={576}
                />
              </figure>
            </div>
          </div>
          <div className={styles.c2}>
            <div className={styles.conl}>
              <h3>VO Rides</h3>
              <p>
                Vorides is a carpooling platform that allows millions of people
                to get to their destinations safely. Vorides is a carpooling app
                designed for the sole purpose of connecting Drivers and
                Passengers who are going in the same direction, to share both
                the trip and the associated costs of travel. Vorides enables its
                users to post, search, and request rides. Users communicate with
                each other to book a seat or seats only.
              </p>
            </div>
            <div className={styles.conr}>
              <figure>
                {" "}
                <Image
                  src={pf4}
                  alt="OBS TECHNOLOGIA"
                  width={726}
                  height={597}
                />
              </figure>
            </div>
          </div>
          <div className={styles.c1}>
            <div className={styles.conl}>
              <h3>MediaMath</h3>
              <p>
                Media Math Pvt Ltd is an emerging real estate marketing agency
                based in Islamabad, Pakistan. The company has introduced new and
                innovative marketing methods to transform the real estate
                industry in Pakistan. Media Math has pioneered the concepts of
                organic farming and we helped them with the design and
                development of their website.
              </p>
            </div>
            <div className={styles.conr}>
              <figure>
                {" "}
                <Image
                  src={pf5}
                  alt="OBS TECHNOLOGIA"
                  width={761}
                  height={576}
                />
              </figure>
            </div>
          </div>
          <div className={styles.c2}>
            <div className={styles.conl}>
              <h3>Translays</h3>
              <p>
                Translays is a professional and world-leading Translation
                Company that translates every language that is spoken worldwide.
                They provide top-quality translation solutions within a few
                hours and their ultimate objective is to unite commerce through
                impeccable translation services. We helped them with the design
                as well as development of their website.
              </p>
            </div>
            <div className={styles.conr}>
              <figure>
                {" "}
                <Image
                  src={pf6}
                  alt="OBS TECHNOLOGIA"
                  width={675}
                  height={576}
                />
              </figure>
            </div>
          </div>
          <div className={styles.c1}>
            <div className={styles.conl}>
              <h3>MarketingDXP</h3>
              <p>
                Media Math Pvt Ltd is an emerging real estate marketing agency
                based in Islamabad, Pakistan. The company has introduced new and
                innovative marketing methods to transform the real estate
                industry in Pakistan. Media Math has pioneered the concepts of
                organic farming and we helped them with the design and
                development of their website.
              </p>
            </div>
            <div className={styles.conr}>
              <figure>
                {" "}
                <Image
                  src={pf7}
                  alt="OBS TECHNOLOGIA"
                  width={749}
                  height={640}
                />
              </figure>
            </div>
          </div>
          <div className={styles.c2}>
            <div className={styles.conl}>
              <h3>FlashMath</h3>
              <p>
                Wildcat FlashMath is a mobile application designed to quiz
                students on various Math topics. This app is designed for
                Valdosta School Systems. Current students must use their account
                login to access the mobile application. The various math topics
                include Telling Time, Counting Money, Fractions, Addition,
                Subtraction, Multiplication, Division, and Word Problems
              </p>
            </div>
            <div className={styles.conr}>
              <figure>
                {" "}
                <Image
                  src={pf8}
                  alt="OBS TECHNOLOGIA"
                  width={576}
                  height={576}
                />
              </figure>
            </div>
          </div>
          <h2
            className={styles.ph}
            style={{ color: "#FFD400", padding: "150px 0px 0px 0px " }}
          >
            GRAPHIC DESIGN PROJECTS
          </h2>
          <div className={styles.phl}></div>
          <p className={styles.text}>Take a look at some of our Design Work!</p>
          <div className={styles.pwork}>
            <figure>
              <Image
                src={pw1}
                alt="OBS TECHNOLOGIA"
                width={1096}
                height={685}
              />
            </figure>
            <h3>Poster Design</h3>
            <span className={styles.span}></span>
            <figure>
              <Image src={pw2} alt="OBS TECHNOLOGIA" width={879} height={765} />
            </figure>
            <h3>Landing Page Design</h3>
            <span className={styles.span}></span>
            <figure>
              <Image
                src={pw3}
                alt="OBS TECHNOLOGIA"
                width={1372}
                height={838}
              />
            </figure>
            <h3>Social Media Post Design</h3>
            <span className={styles.span}></span>
          </div>
        </div>
        <Footer />
        {/* <Testimonials /> */}
      </div>
    </>
  );
}

export default Home;
