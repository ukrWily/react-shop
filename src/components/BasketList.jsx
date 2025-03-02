import { BasketItem } from "./BasketItem";

export function BasketList(props) {
  const { order = [] } = props;

  return (
    <div>
      <ul className="collection">
        <li className="collection-item active">Basket</li>
        {order.length ? (
          order.map((item) => <BasketItem key={item.Id} {...item} />)
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active">Total coasts: 0</li>
      </ul>
    </div>
  );
}
