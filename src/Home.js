import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home_row">
        <Product
          id="12321341"
          title="Machine Learning: Step-by-Step Guide To Implement Machine Learning Algorithms with Python (Artificial Intelligence Book 2)"
          price={13.38}
          rating={4}
          image="https://m.media-amazon.com/images/I/51z5Hi7uHsL.jpg"
        />
        <Product
          id="32451231"
          title="Apple MacBook Air 13-inch (i5/8GB/128GB)"
          price={586.8}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/1974/9033/products/mba_sep18_1024x1024.png?v=1571565771"
        />
      </div>
      <div className="home_row">
        <Product
          id="24352361"
          title="Air Jordan 1 High OG sneakers"
          price={815}
          rating={5}
          image="https://cdn.flightclub.com/TEMPLATE/165290/1.jpg"
        />
        <Product
          id="12435135"
          title="Executive Back Adjustable PU Leather Swivel Office Chair with Massage Function (Black/Beige) - Without Foot Rest"
          price={64.52}
          rating={5}
          image="https://my-test-11.slatic.net/shop/77c9e8d3bbd3fd68d4e06b76f38c4afa.jpeg"
        />
        <Product
          id="12531661"
          title="Optimum Nutrition Gold Standard Whey Protein 5.5 lbs - Double Rich Chocolate"
          price={11.96}
          rating={4}
          image="https://cdn.store-assets.com/s/22159/i/14662713.jpeg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12465785"
          title="Samsung 49 CHG90 Super Ultra-Wide Monitor - Matte dark blue black"
          price={999.99}
          rating={5}
          image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6115/6115611_sd.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
