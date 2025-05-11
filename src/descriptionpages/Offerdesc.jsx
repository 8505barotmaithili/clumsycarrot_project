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

const Offerdesc = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://clumsy-server.onrender.com/offer/${id}`)
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

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login to add items to your cart.");
      navigate("/login");
      return;
    }

    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    addToCart({ ...product, selectedSize });
    alert("Item added to cart!");
  };

  return (
    <div>
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />

      <div
        style={{
          display: "flex",
          padding: "40px",
          gap: "40px",
          marginTop: "3%",
        }}
      >
        {/* Left: Images */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              marginTop: "20%",
              marginLeft: "20%",
            }}
          >
            <div
              id="thumbnail-scroll"
              style={{
                maxHeight: "500px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {product.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  style={{
                    width: "60px",
                    height: "90px",
                    border:
                      mainImage === img ? "2px solid black" : "1px solid #ccc",
                    cursor: "pointer",
                    objectFit: "cover",
                  }}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
            <div
              onClick={() => {
                const container = document.getElementById("thumbnail-scroll");
                container.scrollBy({ top: 100, behavior: "smooth" });
              }}
              style={{
                fontSize: "24px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              ⌄
            </div>
          </div>

          <div style={{ position: "relative", marginLeft: "30%" }}>
            <img
              src={mainImage}
              alt={product.name}
              style={{
                width: "400px",
                height: "500px",
                objectFit: "cover",
                transition: "transform 0.3s",
                cursor: "zoom-in",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "-80px",
                width: "60px",
                height: "60px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "bold",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              COMPLETE
              <br />
              THE LOOK
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div style={{ width: "100%", marginLeft: "19%" }}>
          <h3>{product.product_name}</h3>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>
            {product.price}
          </p>
          <p>
            <strong>COLOR:</strong> {product.color || "Off-white"}
          </p>
          <p>
            <strong>SIZE:</strong>{" "}
            <span>{selectedSize || "Please select"}</span>
          </p>

          <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
            {sizes.map((size) => (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  border:
                    selectedSize === size
                      ? "2px solid black"
                      : "1px solid #ccc",
                  padding: "10px 20px",
                  cursor: "pointer",
                  background: selectedSize === size ? "#f7f7f7" : "white",
                }}
              >
                {size}
              </div>
            ))}
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              background: "black",
              color: "white",
              padding: "15px",
              border: "none",
              width: "56%",
              fontWeight: "bold",
              cursor: "pointer",
              margin: "20px 0",
            }}
          >
            ADD TO BAG
          </button>

          <h2 style={{ marginTop: "40px" }}>Product details</h2>
          <div
            style={{
              height: "400px",
              width: "95%",
              display: "flex",
              gap: "30px",
            }}
          >
            <div style={{ width: "50%" }}>
              <h4>Features</h4>
              <ul>
                <li>Small huggie hoops with inner and outer diamond pavé</li>
                <li>Diamonds: 0.50 ct. t.w.; Color clarity: HI/I1I2</li>
                <li>14K white gold</li>
                <li>0.6"L</li>
                <li>Photo may have been enlarged and/or enhanced</li>
              </ul>
            </div>
            <div style={{ width: "50%" }}>
              <h4>About the brand</h4>
              <p>
                For over three decades, our buyers have traveled the world,
                partnering with leading designers and skilled artisans to craft
                exquisite fine jewelry befitting the Bloomingdale's name...
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

export default Offerdesc;
