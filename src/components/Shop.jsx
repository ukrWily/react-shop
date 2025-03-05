import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

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
  const [isBasketShow, setIsBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const handleBasketShow = (item) => {
    setIsBasketShow(!isBasketShow);
  };

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

  const addQuantity = (itemId, sign) => {
    const newOrder = order.map((el) => {
      if (el.offerId === itemId) {
        const newQuantity = el.quantity + sign;
        return {
          ...el,
          quantity: newQuantity < 1 ? 1 : newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.offerId === item.offerId
    );
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.offerId !== itemId);
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList addToBasket={addToBasket} goods={goods} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          addQuantity={addQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}
