import { GoodsItem } from "./GoodsItem";

export function GoodsList({ goods = [], onClick }) {
  // console.log(...goods);
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem onClick={onClick} key={item.offerId} {...item} />
      ))}
    </div>
  );
}
