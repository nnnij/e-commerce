import React from "react";
import ProductRow from "../Product/ProductRow";
import SupTitle from "../Utilitis/SupTitle";

const PriveteProduct = () => {
    const title = 'التوصيات الخاصة بك'
    const btntitle = 'عرص الكل'
  return (
    <div>
      <SupTitle title={title} btntitle={btntitle}/>
      <ProductRow/>
    </div>
  );
};

export default PriveteProduct;
