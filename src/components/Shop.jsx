import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";

/**
 * params:
 * goods - масив товарів
 * loading - стан загрузки
 * order - кількість товарів в корзині
 * @returns
 */

export function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log({ ...data.shop });

        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  const handleAddGoods = (id) => {
    setOrder((prevOrder) => [...prevOrder, id]);
    console.log(order);
  };

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList onClick={handleAddGoods} goods={goods} />
      )}
    </main>
  );
}
