import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Testimonials from "./testimonials";
import Image from "next/image";
import next from "../public/next.png";
import prev from "../public/prev.png";

// import { data } from "./testimonialdata";
export default class NextJsCarousel extends Component {
  render() {
    const data = [
      {
        review:
          "OBS Technologia team has an extremely well-rounded skill set across IOS and Android mobile app development. The team was able to successfully bring my designs to life, within IOS and Android domain; by turning my wireframes and requirements into apps. ",
        cname: "NFL",
        id: "1",
      },
      {
        review:
          "We have been working with OBS Technologia for the third time. The team consists of very good and competent individuals. The work is carried out quickly and accurately on time. Very satisfied with this team’s work, and we hope to work more in the future. We recommend team OBS Technologia. ",
        cname: "PARTY",
        id: "2",
      },
      {
        review:
          "Osama and his team did a great job. They were able to build the app according to my specifications. We didn't complete the project on time; however, they communicated with me ahead of time so that I knew that I could expect delays but other than that, job well done. Best of luck team OBS Technologia!",
        cname: "WARAKA",
        id: "3",
      },
      {
        review:
          "Osama and company always get the job done! They worked on this project diligently and delivered a great product, as they always do. Osama is a good hire and an intelligent young man. He and his team work together to achieve the goals and like always, the result is amazing.",
        cname: "PAYFRAN",
        id: "4",
      },
      {
        review:
          "Team OBS Technologia is an exceptional talent. They know what they are doing and are very responsive. They were able to build the two apps that I needed for iOS and Android. The end product was the same as promised. I would recommend them to meet your IT needs. I will most definitely be using them again! ",
        cname: "FLASHMATH",
        id: "5",
      },
      {
        review:
          "Based on my working experience with OBS Technologia team, I will always recommend this team of talented developers. They are very smart and assist well in the brainstorming process. The team was able to work with me from design to final product.",
        cname: "VORIDES",
        id: "6",
      },
      {
        review:
          "Osama kept in regular contact and was clear from the beginning, about the capabilities of his team. Not only his team is proficient in developing mobile applications, but the graphic design skillset was clear in the UI/UX which was suggested by the team.",
        cname: "CASHME",
        id: "7",
      },
    ];
    console.log("data", data);
    const arrowStyles = {
      position: "absolute",
      top: "0",
      bottom: "auto",
      padding: ".4em",
      zIndex: 2,
      width: "55px",
      height: "100%",
    };
    return (
      <div>
        <Carousel
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  left: "0",
                  backgroundColor: "transparent",
                  border: "none",
                  margin: "auto 74px ",
                }}
              >
                {" "}
                <Image src={prev} alt="quote" width={52} height={52} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  right: 0,
                  background: "transparent",
                  border: "none",
                  margin: "auto 74px ",
                }}
              >
                {" "}
                <Image src={next} alt="quote" width={52} height={52} />
              </button>
            )
          }
          showStatus={false}
          showThumbs={false}
          // autoPlay={true}
          style={{ ...arrowStyles, left: 15 }}
        >
          {data.map((child, index) => {
            return (
              <Testimonials
                review={child.review}
                cname={child.cname}
                key={index}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}
