import React from "react";
import { useEffect, useState } from "react";
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
import v1 from "../public/V1.png";
import Image from "next/image";
// import { useEffect, useState } from "react";

import Footer from "../components/footer";
function Home() {
  const [discription, setDiscription] = useState([]);
  const [poster, setPoster] = useState([]);
  const domain = "http://192.168.18.95:8000/";
  // const poster = [];

  useEffect(() => {
    fetch("http://192.168.18.95:8000/api/portshow")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const heading = res;
        setPoster(heading.splice(-3));
        heading.splice(-3);
        setDiscription(heading);
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.portfolio_wrapper}>
          <h2 className={styles.ph}>SELECTED PROJECTS</h2>
          <div className={styles.phl}></div>
          <p className={styles.text}>Take a look at some of our best work!</p>
          {discription.map((data, index) => {
            if (data.id % 2 != 0) {
              return (
                <div key={index} className={styles.c1}>
                  <div className={styles.conl}>
                    <h3>{data.heading}</h3>
                    <p>{data.discription}</p>
                  </div>
                  <div className={styles.conr}>
                    <figure>
                      <Image
                        loader={() => {
                          return domain + data.url;
                        }}
                        src={domain + data.url}
                        alt="OBS TECHNOLOGIA"
                        width={data.width}
                        height={data.height}
                      />
                    </figure>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className={styles.c2}>
                  <div className={styles.conl}>
                    <h3>{data.heading}</h3>
                    <p>{data.discription}</p>
                  </div>
                  <div className={styles.conr}>
                    <figure>
                      <Image
                        loader={() => {
                          return domain + data.url;
                        }}
                        src={domain + data.url}
                        alt="OBS TECHNOLOGIA"
                        width={data.width}
                        height={data.height}
                      />
                    </figure>
                  </div>
                </div>
              );
            }
          })}

          <h2
            className={styles.ph}
            style={{ color: "#FFD400", padding: "150px 0px 0px 0px " }}
          >
            GRAPHIC DESIGN PROJECTS
          </h2>
          <div className={styles.phl}></div>
          <p className={styles.text}>Take a look at some of our Design Work!</p>

          <div className={styles.pwork}>
            {poster.map((data) => {
              return (
                <>
                  {" "}
                  <figure key={index}>
                    <Image
                      loader={() => {
                        return domain + data.url;
                      }}
                      src={domain + data.url}
                      alt="OBS TECHNOLOGIA"
                      width={data.width}
                      height={data.height}
                    />
                  </figure>
                  <h3>{data.heading}</h3>
                </>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
