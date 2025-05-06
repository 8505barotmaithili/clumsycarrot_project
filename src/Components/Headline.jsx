import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoPause } from "react-icons/io5";
import { BiSolidRightArrow } from "react-icons/bi";
import "./Headline.css";

const Headline = () => {
  const [icon, seticon] = useState(true);
  return (
    // navbar
    <div
      style={{
        height: "49px",
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          height: "30px",
          width: "100%",
          lineHeight: "30px",
          marginTop: "0.4%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <span
              style={{
                color: "white",

                fontSize: "12px",
              }}
            >
              Theory Semi-Annual Best Customer Event: Take up to $250 off
              qualifying purchases. Ends 4/27. INFO / SHOP NOW
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span style={{ color: "white", fontSize: "12px" }}>
              TWO DAYS ONLY: Bloomingdale’s Fine Collection 5-carat diamond
              tennis bracelet, $3,999 (reg. $13,000). Ends 4/27. SHOP NOW
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span style={{ color: "white", fontSize: "12px" }}>
              GET YOUR ORDER TODAY with Curbside or In-Store Pickup, or Same Day
              Delivery. SHOP NOW
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span style={{ color: "white", fontSize: "12px" }}>
              Get up to a $1,200 Gift Card with qualifying purchases! Offer ends
              4/27. Gift Cards expire 5/11. INFO / SHOP NOW
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span style={{ color: "white", fontSize: "12px" }}>
              Fine jewelry: Save 50–70% on Bloomingdale’s Fine Collection. Ends
              4/27. SHOP NOW
            </span>
          </SwiperSlide>
        </Swiper>

        <button
          onClick={() => seticon(!icon)}
          style={{
            backgroundColor: "black",
            border: "none",
            marginRight: "1%",
            fontSize: "10px",
          }}
        >
          {icon ? (
            <IoPause
              style={{
                color: "white",
                fontSize: "30px",
              }}
            />
          ) : (
            <BiSolidRightArrow
              style={{
                color: "white",
                fontSize: "30px",
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Headline;
