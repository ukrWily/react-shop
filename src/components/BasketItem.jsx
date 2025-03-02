import React from "react";

export function BasketItem(props) {
  const { id, name, price, quantity } = props;

  return (
    <div>
      <li className="collection-item">
        {name} x{quantity} = {price}
        <span className="secondary-content">
          <i className="material-icons basket-delete">close</i>
        </span>
      </li>
    </div>
  );
}
