import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Banner from "./banner";
import Header from "./header";
import Content from "./content";
import WhoAreWe from "./whoarewe";
import Portfolio from "./portfolio";
import Carousel from "./carousel";
import Ourteam from "./ourteam";
import Contact from "./contact";
import Footer from "./footer";

// import LinkZZZZ from "next/link";

export default function App() {
  return (
    <>
      <Head>
        <title>OBS TECHNOLOGIA</title>
        <meta name="viewport" content="width=device-width" />
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <div className={styles.container}>
        <Header />
        <Banner />
        <Content />
        <WhoAreWe />
        <Portfolio />
        <Carousel />
        <Ourteam />
        <Contact />
        <Footer />
        {/* <Testimonials /> */}
      </div>
    </>
  );
}
