import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";

import DhamYatra from "../../assets/dhamyatra.png";
import GirlsEmpowerment from "../../assets/maataji_abhishekam.png";
import YouthEmpowerment from "../../assets/Presankalpa2023.png";
import BookDistribution from "../../assets/tribalbgdistr.png";
import TribalPreaching from "../../assets/tribalkirtansusakhapr.png";
import RathYatra from "../../assets/rathyatra.png";

const ProductsData = [
  {
    id: 1,
    img: DhamYatra,
    title: "Dham Yatra",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: YouthEmpowerment,
    title: "Youth Empowerment",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: GirlsEmpowerment,
    title: "Girls Empowerment",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: BookDistribution,
    title: "Book Distribution",
    price: "220",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: TribalPreaching,
    title: "Tribal Preaching",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: RathYatra,
    title: "Festivals",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img5,
    title: "Printed ",
    price: "220",
    aosDelay: "600",
  },
];
const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Services"/>
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
