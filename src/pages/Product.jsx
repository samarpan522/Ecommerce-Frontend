import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import { ShopContext } from "../context/ShopContext";
import Productdisplay from "../components/ProductDisplay/Productdisplay";
import Descriptionbox from "../components/DescriptionBox/Descriptionbox";


const Product = () => {
  const { all_product } = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number (productId ))
  return (
  <div>
  <Breadcrums product={product}/>
  <Productdisplay product={product} />
  <Descriptionbox/>
  </div>
  )
};

export default Product;
