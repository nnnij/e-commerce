import React from "react";
import SupTitle from "../Utilitis/SupTitle";
import NewProductRow from "../NewProduct/NewProductRow";

const NewProductContainer = () => {
  const title = 'أحدث العروض'
  const btntitle = 'عرض الكل'
  return (
    <div>
      <SupTitle title={title} btntitle={btntitle} />
      <NewProductRow />
    </div>
  );
};

export default NewProductContainer;
