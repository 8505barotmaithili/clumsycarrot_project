// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Headline from "../Components/Headline";
// import Small_nav from "../Components/Small_nav";
// import Title from "../Components/Title";
// import Navbar from "../Components/Navbar";
// import Recommand from "../Components/Recommand";
// import RecentlyViewedSlider from "../Components/Recentlyview";
// import Footer from "../Components/Footer";
// import { useCart } from "../Context/CartContext";
// import { useAuth } from "../Context/AuthContext";

// const Handbagdesc = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [mainImage, setMainImage] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [loading, setLoading] = useState(true);

//   const { addToCart } = useCart();
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(` http://localhost:3000/handbags/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         setMainImage(data.images?.[0] || data.images);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [id]);

//   if (loading || !product) return <p>Loading...</p>;

//   const sizes = ["XXS", "XS", "S", "M", "L", "XL"];

//   const handleclick = () => {
//     if (!user) {
//       alert("Please login to add items to your cart.");
//       navigate("/login");
//       return;
//     }

//     addToCart(product);
//     alert("Item added to cart!");
//   };

//   return (
//     <div>
//       <Headline />
//       <Small_nav />
//       <Title />
//       <Navbar />
//       <hr></hr>

//       <div
//         style={{
//           display: "flex",
//           padding: "40px",
//           gap: "40px",
//           marginTop: "3%",
//         }}
//       >
//         {/* Left Section - Thumbnails + Main Image + 'Complete the Look' */}
//         <div style={{ display: "flex" }}>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: "10px",
//               marginTop: "20%",
//               marginLeft: "20%",
//             }}
//           >
//             <div
//               id="thumbnail-scroll"
//               style={{
//                 maxHeight: "500px",
//                 overflowY: "auto",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "10px",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
//               {product.images?.map((img, i) => (
//                 <img
//                   key={i}
//                   src={img}
//                   alt={`thumb-${i}`}
//                   style={{
//                     width: "60px",
//                     height: "90px",
//                     border:
//                       mainImage === img ? "2px solid black" : "1px solid #ccc",
//                     cursor: "pointer",
//                     objectFit: "cover",
//                   }}
//                   onClick={() => setMainImage(img)}
//                 />
//               ))}
//             </div>
//             <div
//               onClick={() => {
//                 const container = document.getElementById("thumbnail-scroll");
//                 container.scrollBy({ top: 100, behavior: "smooth" });
//               }}
//               style={{
//                 fontSize: "24px",
//                 cursor: "pointer",
//                 marginTop: "20px",
//               }}
//             >
//               ⌄
//             </div>
//           </div>

//           {/* Main Image */}
//           <div style={{ position: "relative", marginLeft: "30%" }}>
//             <img
//               src={mainImage}
//               alt={product.name}
//               style={{
//                 width: "400px",
//                 height: "500px",
//                 objectFit: "cover",
//                 transition: "transform 0.3s",
//                 cursor: "zoom-in",
//               }}
//               onMouseOver={(e) =>
//                 (e.currentTarget.style.transform = "scale(1.1)")
//               }
//               onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 left: "-80px",
//                 width: "60px",
//                 height: "60px",
//                 backgroundColor: "black",
//                 color: "white",
//                 borderRadius: "50%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "10px",
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 cursor: "pointer",
//               }}
//             >
//               COMPLETE
//               <br />
//               THE LOOK
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Product Details */}
//         <div style={{ width: "100%", marginLeft: "19%" }}>
//           <h2 style={{ fontWeight: "bold" }}>{product.brand}</h2>
//           <h3>{product.name}</h3>
//           <p style={{ fontWeight: "bold", fontSize: "18px" }}>
//             INR {product.price}
//           </p>
//           <p>
//             <strong>COLOR:</strong> {product.color || "Off-white"}
//           </p>
//           <p>
//             <strong>SIZE:</strong>{" "}
//             <span style={{ marginLeft: "10px", fontWeight: "normal" }}>
//               {selectedSize || "Please select"}
//             </span>
//           </p>
//           <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
//             {sizes.map((size) => (
//               <div
//                 key={size}
//                 onClick={() => setSelectedSize(size)}
//                 style={{
//                   border:
//                     selectedSize === size
//                       ? "2px solid black"
//                       : "1px solid #ccc",
//                   padding: "10px 20px",
//                   cursor: "pointer",
//                   background: selectedSize === size ? "#f7f7f7" : "white",
//                 }}
//               >
//                 {size}
//               </div>
//             ))}
//           </div>
//           <button
//             style={{
//               background: "black",
//               color: "white",
//               padding: "15px",
//               border: "none",
//               width: "56%",
//               fontWeight: "bold",
//               cursor: "pointer",
//               margin: "20px 0",
//             }}
//             onClick={handleclick}
//           >
//             ADD TO BAG
//           </button>

//           {/* Product details */}
//           <h2 style={{ marginTop: "40px" }}>Product details</h2>
//           <div
//             style={{
//               height: "400px",
//               width: "95%",
//               display: "flex",
//               gap: "30px",
//             }}
//           >
//             <div style={{ height: "400px", width: "50%" }}>
//               <h4>Features</h4>
//               <ul>
//                 <li>Small huggie hoops with inner and outer diamond pavé</li>
//                 <li>Diamonds: 0.50 ct. t.w.; Color clarity: HI/I1I2</li>
//                 <li>14K white gold</li>
//                 <li>0.6"L</li>
//                 <li>
//                   Almost all gemstones and blue and black diamonds have been
//                   treated to enhance their beauty and require special care
//                 </li>
//                 <li>Photo may have been enlarged and/or enhanced</li>
//                 <li>
//                   All gemstone carat weights (ct. t.w.) are approximate;
//                   variance may be 0.05 carat.
//                 </li>
//                 <li>
//                   White gold is surface-coated with rhodium to enhance metal
//                   color and shine; it may wear off over time requiring
//                   replating.
//                 </li>
//               </ul>
//             </div>
//             <div style={{ height: "400px", width: "50%" }}>
//               <h4>about the brand</h4>
//               <p>
//                 For over three decades, our buyers have traveled the world,
//                 partnering with leading designers and skilled artisans to craft
//                 exquisite fine jewelry befitting the Bloomingdale's name. The
//                 result is a covetable collection that's meant to be worn, mixed,
//                 layered, and made your own...
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Recommand />
//       <RecentlyViewedSlider />
//       <Footer />
//     </div>
//   );
// };

// export default Handbagdesc;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import Recommand from "../Components/Recommand";
import RecentlyViewedSlider from "../Components/Recentlyview";
import Footer from "../Components/Footer";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import "./Descmedia.css";

const Handbagdesc = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/handbags/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.images?.[0] || data.images);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading || !product) return <p>Loading...</p>;

  const sizes = ["XXS", "XS", "S", "M", "L", "XL"];

  const handleclick = () => {
    if (!user) {
      alert("Please login to add items to your cart.");
      navigate("/login");
      return;
    }

    addToCart(product);
    alert("Item added to cart!");
  };

  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />
      <hr />

      <div className="recomdesc-container">
        {/* Left Section - Thumbnails + Main Image + 'Complete the Look' */}
        <div className="recomdesc-left">
          <div className="thumbnails-wrapper">
            <div className="thumbnails" id="thumbnail-scroll">
              {product.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  className={`thumbnail ${mainImage === img ? "active" : ""}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
            <div
              onClick={() => {
                const container = document.getElementById("thumbnail-scroll");
                container.scrollBy({ top: 100, behavior: "smooth" });
              }}
              className="thumbnail-scroll-down"
            >
              ⌄
            </div>
          </div>

          {/* Main Image */}
          <div className="main-image-container">
            <img
              src={mainImage}
              alt={product.name}
              className="main-image"
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div className="complete-look">
              COMPLETE
              <br />
              THE LOOK
            </div>
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="recomdesc-right">
          <h2>{product.brand}</h2>
          <h3>{product.name}</h3>
          <p className="price">INR {product.price}</p>
          <p>
            <strong>COLOR:</strong> {product.color || "Off-white"}
          </p>
          <p>
            <strong>SIZE:</strong> {selectedSize || "Please select"}
          </p>
          <div className="size-options">
            {sizes.map((size) => (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`size-box ${
                  selectedSize === size ? "selected" : ""
                }`}
              >
                {size}
              </div>
            ))}
          </div>
          <button className="add-to-bag" onClick={handleclick}>
            ADD TO BAG
          </button>

          {/* Product details */}
          <h2>Product details</h2>
          <div className="product-details">
            <div className="features">
              <h4>Features</h4>
              <ul>
                <li>Small huggie hoops with inner and outer diamond pavé</li>
                <li>Diamonds: 0.50 ct. t.w.; Color clarity: HI/I1I2</li>
                <li>14K white gold</li>
                <li>0.6"L</li>
                <li>
                  Almost all gemstones and blue and black diamonds have been
                  treated to enhance their beauty and require special care
                </li>
                <li>Photo may have been enlarged and/or enhanced</li>
                <li>
                  All gemstone carat weights (ct. t.w.) are approximate;
                  variance may be 0.05 carat.
                </li>
                <li>
                  White gold is surface-coated with rhodium to enhance metal
                  color and shine; it may wear off over time requiring
                  replating.
                </li>
              </ul>
            </div>
            <div className="brand-info">
              <h4>About the brand</h4>
              <p>
                For over three decades, our buyers have traveled the world,
                partnering with leading designers and skilled artisans to craft
                exquisite fine jewelry befitting the Bloomingdale's name. The
                result is a covetable collection that's meant to be worn, mixed,
                layered, and made your own...
              </p>
            </div>
          </div>
        </div>
      </div>
      <Recommand />
      <RecentlyViewedSlider />
      <Footer />
    </div>
  );
};

export default Handbagdesc;
