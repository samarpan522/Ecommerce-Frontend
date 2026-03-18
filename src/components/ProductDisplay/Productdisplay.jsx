import React from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";

const Productdisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name} </h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>344</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            रु {product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            रु {product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Explore our collection designed for comfort, style, and everyday wear.
          Each piece combines modern design with practicality, ensuring you look
          and feel your best for any occasion
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category">
          {" "}
          <span>Category :</span>Women, T-shirt,Crop Top{" "}
        </p>
        <p className="productdisplay-right-category">
          {" "}
          <span>Tags :</span>Modern, Latest{" "}
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
