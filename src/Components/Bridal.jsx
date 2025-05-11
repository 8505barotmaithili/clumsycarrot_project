import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "./Bridal.css";

const Bridal = () => {
  const [bridalItems, setBridalItems] = useState([]);

  useEffect(() => {
    const fetchBridalItems = async () => {
      try {
        const res = await axios.get(
          "https://clumsy-server.onrender.com/bridal"
        );
        setBridalItems(res.data);
      } catch (error) {
        console.error("Failed to fetch bridal items:", error);
      }
    };

    fetchBridalItems();
  }, []);

  const handleViewItem = (item) => {
    const id = item.id || item.name + item.image;
    const itemWithId = { ...item, id };
    const existing = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    const filtered = existing.filter((i) => i.id !== itemWithId.id);
    const updatedItem = { ...itemWithId, isNew: true };
    const updated = [updatedItem, ...filtered];
    const final = updated.slice(0, 10).map((itm, index) => ({
      ...itm,
      isNew: index === 0,
    }));
    localStorage.setItem("recentlyViewed", JSON.stringify(final));
    window.dispatchEvent(new Event("recentlyViewedUpdated"));
  };

  return (
    <div className="bridal-container">
      <h2 className="bridal-heading">Bridal Collection</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={6}
        slidesPerGroup={6}
        navigation
        breakpoints={{
          320: { slidesPerView: 1.5, slidesPerGroup: 1 },
          480: { slidesPerView: 2.2, slidesPerGroup: 2 },
          768: { slidesPerView: 3.2, slidesPerGroup: 3 },
          1024: { slidesPerView: 4, slidesPerGroup: 4 },
          1280: { slidesPerView: 6, slidesPerGroup: 6 },
        }}
      >
        {bridalItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div onClick={() => handleViewItem(item)} className="bridal-card">
              <Link to={`/bridal/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="bridal-image"
                />
              </Link>
              <div className="bridal-description">
                <h5>
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
