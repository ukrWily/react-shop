import { GoodsItem } from "./GoodsItem";

export function GoodsList({ goods = [], addToBasket = Function.prototype }) {
  // console.log(...goods);
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map(
        (item, i) =>
          i < 9 && (
            <GoodsItem addToBasket={addToBasket} key={item.offerId} {...item} />
          )
      )}
    </div>
  );
}
