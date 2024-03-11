import "./ProductRecomand.css";
import ProductCard from "./ProductCard/ProductCard";
import Rectangle from "../../assets/Rectangle.svg";
import RightArrow from "../../assets/RightArrow.svg";
import LeftArrow from "../../assets/LeftArrow.svg";
import React, { useState } from "react";
function ProductRecomand() {
  // const [Products, setProducts] = useState([]);
  const Products = [
    {
      title: "Product 1",
      image: "image1.jpg",
      price: 100,
      rating: 3,
      comments: 10,
      id: 1,
    },
    {
      title: "Product 2",
      image: "image2.jpg",
      price: 200,
      rating: 3,
      comments: 10,
      id: 2,
    },
    {
      title: "Product 3",
      image: "image3.jpg",
      price: 300,
      rating: 3,
      comments: 10,
      id: 3,
    },
    {
      title: "Product 4",
      image: "image4.jpg",
      price: 400,
      rating: 3,
      comments: 10,
      id: 4,
    },
    {
      title: "Product 5",
      image: "image5.jpg",
      price: 500,
      rating: 3,
      comments: 10,
      id: 5,
    },
    {
      title: "Product 6",
      image: "image6.jpg",
      price: 600,
      rating: 3,
      comments: 10,
      id: 6,
    },
    {
      title: "Product 7",
      image: "image7.jpg",
      price: 700,
      rating: 3,
      comments: 10,
      id: 7,
    },
    {
      title: "Product 8",
      image: "image8.jpg",
      price: 800,
      rating: 3,
      comments: 10,
      id: 8,
    },
  ];
  return (
    <div className="ProductRecomand">
      <div className="Header">
        <div className="Title-Wrapper">
          <div className="Icon-Wrapper">
            <div className="Rectangle"></div>
            <div className="Text">Our Products</div>
          </div>
          <div className="Title">Explore Our Products</div>
        </div>
        <div className="Button-Wrapper">
          <img src={LeftArrow} alt="left" />
          <img src={RightArrow} alt="right" />
        </div>
      </div>
      <div className="Content">
        {Products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
      <button>View All Products</button>
    </div>
  );
}

export default ProductRecomand;
