import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import wave from "../public/wave.png";
import phone from "../public/contactcell.png";
function Contact() {
  return (
    <>
      <div className={styles.wrapper} id="contact">
        <div className={styles.contl}>
          <div className={styles.contact}>
            <figure className={styles.waves}>
              <Image src={wave} alt="quote" layout="fill" objectFit="contain" />
            </figure>
            <div className={styles.contact_us}>
              <h3>Contact Us</h3>
              <p>We would love to hear from you.</p>
              <div className={styles.form}>
                <form>
                  <div className={styles.row}>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>

                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    className={styles.message}
                  />
                </form>
                <button className={styles.formtbtn}>Send</button>
              </div>
            </div>
            <figure className={styles.contact_cell}>
              <Image
                src={phone}
                alt="quote"
                layout="fill"
                objectFit="contain"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
