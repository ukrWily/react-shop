import React from "react";

export function BasketItem(props) {
  const {
    offerId,
    displayName,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    addQuantity = Function.prototype,
  } = props;

  return (
    <div>
      <li className="collection-item item">
        {displayName}
        <div>
          <button className="sign" onClick={() => addQuantity(offerId, 1)}>
            +
          </button>
          {quantity}
          <button
            className="sign sign-minus"
            onClick={() => addQuantity(offerId, -1)}
          >
            -
          </button>
          x {price.finalPrice} = {quantity * price.finalPrice}$
          <span className="secondary-content"></span>
          <i
            className="material-icons basket-delete"
            onClick={() => removeFromBasket(offerId)}
          >
            close
          </i>
        </div>
      </li>
    </div>
  );
}
