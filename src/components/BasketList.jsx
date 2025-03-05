import { BasketItem } from "./BasketItem";

export function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    addQuantity = Function.prototype,
  } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);

  console.log(order);
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.offerId}
            {...item}
            removeFromBasket={removeFromBasket}
            addQuantity={addQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Basket is empty</li>
      )}
      <li className="collection-item active">Total coasts: {totalPrice}$</li>
      <button className="secondary-content btn buy">Buy</button>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}
