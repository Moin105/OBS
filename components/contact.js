import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import wave from "../public/wave.png";
import phone from "../public/contactcell.png";
import { useState } from "react";
function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    };
    fetch("http://192.168.18.95:8000/api/contactus", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log("`88", res));
  };

  return (
    <>
      <div className={styles.wrapper} id="contact">
        <div className={styles.contl}>
          <div className={styles.contact}>
            <figure className={styles.waves}>
              <Image
                src={wave}
                alt="quote"
                layout="fill"
                objectFit="contain"
                smooth
              />
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
                      value={inputs.name}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={inputs.email}
                      onChange={handleChange}
                    />
                  </div>

                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    className={styles.message}
                    value={inputs.message}
                    onChange={handleChange}
                  />
                </form>
                <button onClick={handleSubmit} className={styles.formtbtn}>
                  Send
                </button>
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
