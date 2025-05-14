import React from "react";
import SupTitle from "../Utilitis/SupTitle";
import DistinctProductRow from "../DistinctProduct/DistinctProductRow";

const DistinctProduct = () => {
  const title = "المنتجات المميزة";
  const btntitle = "عرض الكل";
  return (
    <div>
      <SupTitle title={title} btntitle={btntitle} />
      <DistinctProductRow/>
    </div>
  );
};

export default DistinctProduct;
