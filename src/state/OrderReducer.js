export default function OrderReducer(state, action) {
  switch (action.type) {
    case "setOrder":
      return setOrder(action);
    default:
      throw new Error(`${action.type} action not found`);
  }
  function setOrder(action) {
    const { orderList } = action;
    return orderList;
  }
}
