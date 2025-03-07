export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((item) => item.offerId !== payload.id),
      };
    case "ADD_QUANTITY":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.offerId === payload.offerId) {
            const newQuantity = item.quantity + payload.quantity;
            return {
              ...item,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return item;
          }
        }),
      };
    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.offerId === payload.offerId
      );
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        return {
          ...state,
          order: [...state.order, newItem],
          alertName: payload.displayName,
        };
      } else {
        const newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
        return {
          ...state,
          order: newOrder,
          alertName: payload.displayName,
        };
      }
    }
    case "TOGGLE_BASKET":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    default:
      return state;
  }
}
