import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";




import { ProductsData } from "../../InfoAndData";
const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Services"/>
        {/* Body section */}
        <ProductCard data={ProductsData} />
      </div>
    </div>
  );
};

export default Products;
