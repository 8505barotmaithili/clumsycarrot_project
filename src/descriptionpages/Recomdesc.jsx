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

const Recomdesc = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://clumsy-server.onrender.com/products/${id}`)
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

      <div className="recomdesc-container">
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
              className="thumbnail-scroll-down"
              onClick={() => {
                const container = document.getElementById("thumbnail-scroll");
                container.scrollBy({ top: 100, behavior: "smooth" });
              }}
            >
              ⌄
            </div>
          </div>

          <div className="main-image-container">
            <img src={mainImage} alt={product.name} className="main-image" />
            <div className="complete-look">
              COMPLETE
              <br />
              THE LOOK
            </div>
          </div>
        </div>

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
                className={`size-box ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>

          <button className="add-to-bag" onClick={handleclick}>
            ADD TO BAG
          </button>

          <h2>Product details</h2>
          <div className="product-details">
            <div className="features">
              <h4>Features</h4>
              <ul>
                <li>Small huggie hoops with inner and outer diamond pavé</li>
                <li>Diamonds: 0.50 ct. t.w.; Color clarity: HI/I1I2</li>
                <li>14K white gold</li>
                <li>0.6"L</li>
                <li>Gemstones and diamonds may have been treated</li>
                <li>Photos may have been enhanced</li>
                <li>Weights are approximate</li>
                <li>White gold may require replating</li>
              </ul>
            </div>
            <div className="brand-info">
              <h4>About the brand</h4>
              <p>
                For over three decades, our buyers have traveled the world...
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

export default Recomdesc;
