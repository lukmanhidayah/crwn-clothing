import { useState } from "react";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";
import SHOP_DATA from "./shop-data";

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

export default ShopPage;
