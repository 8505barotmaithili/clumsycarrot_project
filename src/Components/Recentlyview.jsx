import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const RecentlyViewedSlider = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const updateItems = () => {
      const stored = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
      setItems(stored); // update full list
    };

    updateItems(); // initial load

    window.addEventListener("recentlyViewedUpdated", updateItems);

    return () => {
      window.removeEventListener("recentlyViewedUpdated", updateItems);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <div style={{ width: "95%", margin: "auto", marginTop: "5%" }}>
      <h2 className="text-2xl font-bold mb-4">Recently Viewed</h2>

      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: black !important;
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
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white shadow-md rounded-xl overflow-hidden relative"
              style={{
                textAlign: "center",
                background: "white",
                borderRadius: "1rem",
              }}
            >
              {item.isNew && (
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "red",
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  New
                </div>
              )}
              <img
                src={item.image}
                alt={item.name}
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="p-2">
                <h3 className="text-sm font-medium">
                  {item.name}
                  <br />
                  {item.price}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1> Shop Bloomingdale's Online - Like No Other Store in the World</h1>{" "}
        <br></br>
        Like no other store in the world, Bloomingdale's elevates life to an
        artform. Because the way we dress, how we live, and how we move through
        our space and our day tells the story of us, Bloomingdale's website and
        stores have, from the beginning, strived to help you celebrate your past
        and create your future. Curated for the mosaic of nuances and
        experiences that make you who you are, our collections come from beloved
        fashion houses and little-known designers alike. They are the embodiment
        of everyday luxury and have the power to transform not only your look,
        but your life. <br></br>
        <br></br>Show More
      </div>
    </div>
  );
};

export default RecentlyViewedSlider;
