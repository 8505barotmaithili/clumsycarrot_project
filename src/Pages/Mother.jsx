import React from "react";
import { Link } from "react-router-dom";
import Headline from "../Components/Headline";
import Small_nav from "../Components/Small_nav";
import Title from "../Components/Title";
import Navbar from "../Components/Navbar";
import Giftsection from "../Components/Giftsection";
import Footer from "../Components/Footer";
import "./Mother.css";

const Mother = () => {
  return (
    <div className="mother-container">
      <Headline />
      <Small_nav />
      <Title />
      <Navbar />

      <h1 className="mothers-heading">Mothers Day Special</h1>

      <div className="mothers-main-banner">
        <Link to="/">
          <img
            src="https://images.ctfassets.net/m3h9iuk14rnq/5Tol5dBQGpDe89q8EaLWvL/9f6dca7abea3844281a7ae7dc4a3845d/Group_93435.jpg?q=80"
            alt="Mothers Day Banner"
          />
        </Link>
        <h1 className="section-heading">Our Best Gifts</h1>

        <Giftsection />
      </div>

      <div className="gift-card-banner">
        <h1>Give her what she really wants</h1>
        <img
          src="https://images.ctfassets.net/m3h9iuk14rnq/7DRUtVZfFuwTn5MSyDh82k/8ea98728dfb4cae27e958cae0dafa8d6/mothers-day-gift-card.jpg"
          alt="Gift Card"
        />
      </div>

      <div className="treat-her-section">
        <h1>Treat Her</h1>
        <div className="treat-her-images">
          <img
            src="https://images.ctfassets.net/m3h9iuk14rnq/3ldolOLWtg5llOHu7zu7fA/5f265717f78ee822fe940621b6233951/2504_COS_DIGI_MDAY_BEAUTY_BOND_CREED_SL08.jpg?q=80"
            alt="Gift 1"
          />
          <img
            src="https://images.ctfassets.net/m3h9iuk14rnq/2PYWojj9eIsdwasx3Fpg9H/2c8f124eda8788099808e12ee8c44b0d/2503_DIG_RTW_MOTHERS_DAY_AGUA_BENDITA_OF03_068.jpg?q=80"
            alt="Gift 2"
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <p
            style={{
              textAlign: "justify",
              width: "90%",
              margin: "auto",
              fontSize: "15px",
            }}
          >
            <h1>distinctive gifts for everyone on your list Gifts for Her.</h1>
            Thoughtfully curated for the women in your life, our collection of
            gifts for her features special finds from brands like Maison Francis
            Kurkdjian, Baccarat, and David Yurman. With new and classic scents,
            artful objects, inspired jewelry, designer clothing, and more, it
            offers gift ideas for women from every walk of life. Gifts for Him.
            Whether he loves craft cocktails or artisanal coffee, prefers
            sophisticated basics or opulent styles, our men's gift selection
            makes it easy to find the perfect present. From weekday looks by
            Ralph Lauren to weekend vibes from Faherty, CREED fragrances to
            high-tech kitchen tools, with options for every facet of his life
            our gifts collection makes it easy to give him something truly
            unique. Gifts Ideas for Kids. Give them joy-inducing gifts created
            just for them. With baby booties and bikes, clothing and games, our
            collection includes gifts from UGG®, Tender Leaf Toys, Wonder & Wise
            by Asweets, and more, so you can treat your favorite little ones to
            a little extra fun. Hosting & Housewarming Gifts. Thank them for
            hosting or help celebrate their new space with covetable designs
            from Michael Aram, NEST New York, Voluspa, and more. Featuring
            hosting and housewarming gifts that are thoughtful and stylish, like
            photo frames that double as works of art, scented candles to set a
            mood, and crystal tumblers for cocktail hour, you'll find the
            perfect way to show your gratitude and fête your friends. Luxe
            Gifts. For decadent gifts, turn to our luxe collection. Curated to
            make indulging them simple, our selection features undeniably chic
            gifts for women and men who appreciate beautiful design at every
            level. And whether you choose LAGOS jewelry, a Saint Laurent purse,
            Moncler jacket, or an objet d'art for their home or office, you can
            give them something they'll cherish for years to come. Gifts Under
            $100. Thoughtful, meaningful, and elevated gifts can come at a range
            of price points, including under $100. Our edit of sophisticated,
            affordable gift ideas features unexpectedly luxurious options from
            brands like Longchamp, DIOR, Matouk, VIETRI, and more. Explore the
            newest selection of inspired gifts under $100.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mother;
