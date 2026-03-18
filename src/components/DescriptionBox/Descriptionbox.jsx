import React from "react";
import "./DescriptionBox.css";

const Descriptionbox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (344)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that allows customers to
          browse, select, and purchase products easily from anywhere at any
          time. It provides a smooth shopping experience with well-organized
          categories, detailed product information, secure payment options, and
          fast order processing. By combining convenience, variety, and
          reliability, an e-commerce site helps users find what they need
          quickly while offering businesses an effective way to reach and serve
          customers digitally.
        </p>
        <p>
          An e-commerce website is a digital marketplace where users can explore
          a wide range of products, compare prices, and make purchases online
          with ease. It is designed to save time and effort by offering simple
          navigation, clear product details, and secure checkout processes.
          Through online shopping, customers enjoy convenience while businesses
          can connect with a larger audience and grow their sales efficiently.
        </p>
      </div>
    </div>
  );
};

export default Descriptionbox;
