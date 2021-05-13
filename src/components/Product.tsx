import React, { FunctionComponent } from "react";
import "./Product.css";

interface Props {
  title: string;
  image: string;
  price: number;
  rating: number;
}
export const Product: FunctionComponent<Props> = (props) => {
  return (
    <div className="product">
      <div className="product_info">
        <p>{props.title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
          {Array(props.rating)
            .fill(props.rating)
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={props.image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
};
