import Item from "../Item/Item";
import { memo } from "react";

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map((prod) => {
        return (
          <div
            className="col-md-4 d-flex justify-content-center mb-3"
            key={prod.id}
          >
            <Item {...prod} />
          </div>
        );
      })}
    </div>
  );
};

export default memo(ItemList);
