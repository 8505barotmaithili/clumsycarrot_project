// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const RecentlyViewedSlider = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const updateItems = () => {
//       const stored = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
//       setItems(stored); // update full list
//     };

//     updateItems(); // initial load

//     window.addEventListener("recentlyViewedUpdated", updateItems);

//     return () => {
//       window.removeEventListener("recentlyViewedUpdated", updateItems);
//     };
//   }, []);

//   if (items.length === 0) return null;

//   return (
//     <div style={{ width: "95%", margin: "auto", marginTop: "5%" }}>
//       <h2 className="text-2xl font-bold mb-4">Recently Viewed</h2>

//       <style>
//         {`
//           .swiper-button-next,
//           .swiper-button-prev {
//             color: black !important;
//           }
//         `}
//       </style>

//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={20}
//         slidesPerView={6}
//         slidesPerGroup={6}
//         navigation
//       >
//         {items.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="bg-white shadow-md rounded-xl overflow-hidden relative"
//               style={{
//                 textAlign: "center",
//                 background: "white",
//                 borderRadius: "1rem",
//               }}
//             >
//               {item.isNew && (
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: 10,
//                     right: 10,
//                     backgroundColor: "red",
//                     color: "white",
//                     padding: "2px 8px",
//                     borderRadius: "12px",
//                     fontSize: "0.75rem",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   New
//                 </div>
//               )}
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 style={{ height: "300px", width: "100%", objectFit: "cover" }}
//               />
//               <div className="p-2">
//                 <h5 className="text-sm font-medium">
//                   {item.brand}
//                   <br />
//                   {item.price}
//                 </h5>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <div>
//         <h2> Shop Bloomingdale's Online - Like No Other Store in the World</h2>{" "}
//         <p style={{ fontSize: "13px" }}>
//           {" "}
//           Like no other store in the world, Bloomingdale's elevates life to an
//           artform. Because the way we dress, how we live, and how we move
//           through our space and our day tells the story of us, Bloomingdale's
//           website and stores have, from the beginning, strived to help you
//           celebrate your past and create your future. Curated for the mosaic of
//           nuances and experiences that make you who you are, our collections
//           come from beloved fashion houses and little-known designers alike.
//           They are the embodiment of everyday luxury and have the power to
//           transform not only your look, but your life.
//         </p>{" "}
//         <br></br>
//         <br></br>Show More
//       </div>
//     </div>
//   );
// };

// export default RecentlyViewedSlider;
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Recentlyviewed.css";

const RecentlyViewedSlider = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const updateItems = () => {
      const stored = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
      setItems(stored);
    };

    updateItems();

    window.addEventListener("recentlyViewedUpdated", updateItems);
    return () => {
      window.removeEventListener("recentlyViewedUpdated", updateItems);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="recently-viewed-container">
      <h2 className="recently-viewed-heading">Recently Viewed</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        slidesPerGroup={5}
        navigation
        breakpoints={{
          320: { slidesPerView: 1.5, slidesPerGroup: 1 },
          480: { slidesPerView: 2.2, slidesPerGroup: 2 },
          768: { slidesPerView: 3.2, slidesPerGroup: 3 },
          1024: { slidesPerView: 4, slidesPerGroup: 4 },
          1280: { slidesPerView: 6, slidesPerGroup: 6 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="recently-viewed-card">
              {item.isNew && <div className="recently-viewed-new-tag">New</div>}
              <img
                src={item.image}
                alt={item.name}
                className="recently-viewed-image"
              />
              <div className="recently-viewed-description">
                <h5>
                  {item.brand}
                  <br />
                  {item.price}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <br></br>
      <br></br>
      <div className="recently-viewed-footer">
        <h2> Shop Bloomingdale's Online - Like No Other Store in the World</h2>
        <p>
          Like no other store in the world, Bloomingdale's elevates life to an
          artform. Because the way we dress, how we live, and how we move
          through our space and our day tells the story of us, Bloomingdale's
          website and stores have, from the beginning, strived to help you
          celebrate your past and create your future. Curated for the mosaic of
          nuances and experiences that make you who you are, our collections
          come from beloved fashion houses and little-known designers alike.
          They are the embodiment of everyday luxury and have the power to
          transform not only your look, but your life.
        </p>
        <br />
        <br />
        Show More
      </div>
    </div>
  );
};

export default RecentlyViewedSlider;
