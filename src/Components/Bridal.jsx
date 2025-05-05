import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Bridal = () => {
  const [bridalItems, setBridalItems] = useState([]);

  useEffect(() => {
    const fetchBridalItems = async () => {
      try {
        const res = await axios.get("http://localhost:3000/bridal");
        setBridalItems(res.data);
      } catch (error) {
        console.error("Failed to fetch bridal items:", error);
      }
    };

    fetchBridalItems();
  }, []);

  const handleViewItem = (item) => {
    // Ensure every item has a unique id (fallback if missing)
    const id = item.id || item.name + item.image;
    const itemWithId = { ...item, id };

    const existing = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    // remove previous instance
    const filtered = existing.filter((i) => i.id !== itemWithId.id);

    // add to top
    const updatedItem = { ...itemWithId, isNew: true };
    const updated = [updatedItem, ...filtered];

    // keep only latest N items
    const final = updated.slice(0, 10).map((itm, index) => ({
      ...itm,
      isNew: index === 0,
    }));

    localStorage.setItem("recentlyViewed", JSON.stringify(final));
    window.dispatchEvent(new Event("recentlyViewedUpdated"));
  };

  return (
    <div
      className="p-4"
      style={{
        width: "95%",
        margin: "auto",
        marginTop: "7%",
      }}
    >
      <h2 className="text-2xl font-bold mb-4 ">Bridal Collection</h2>
      <br></br>
      {/* Inline style injection for Swiper arrows */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: black !important;
          }
          .swiper-pagination {
            display: none !important;
          }
        `}
      </style>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={6}
        slidesPerGroup={6}
        navigation
      >
        {bridalItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleViewItem(item)}
              className="bg-white shadow-md rounded-xl overflow-hidden"
              style={{
                textAlign: "center",
                background: "white",
                borderRadius: "1rem",
              }}
            >
              <Link to={`/bridal/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ height: "300px", width: "100%", objectFit: "cover" }}
                />
              </Link>
              <div className="p-2">
                <h5 className="text-sm font-medium">
                  {item.name}
                  <br />
                  {item.price}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bridal;
