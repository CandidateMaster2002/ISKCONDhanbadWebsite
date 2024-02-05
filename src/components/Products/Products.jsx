import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";




import { ProductsData } from "../../InfoAndData";
const Products = () => {
  return (
    <div>
      <div className="container dark:bg-gray-950">
        {/* Header section */}
        <Heading title="Our Services"/>
        {/* Body section */}
        <ProductCard data={ProductsData} />
      </div>
    </div>
  );
};

export default Products;
