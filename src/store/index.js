import { createStore } from "redux";

import { products } from "../data.json";

function reducer (state = { products : [], isOpen :false, selectedOrder: "lowest" }, action) {
  switch (action.type) {
    case "highest":
      state.selectedOrder = action.type;
      state.products = [...products].sort((a, b) => b.price - a.price);
      return {...state, products: state.products, selectedOrder : state.selectedOrder};
      case "lowest":
        state.selectedOrder = action.type;
        state.products = [...products].sort((a, b) => a.price - b.price);
        return {...state, products: state.products, selectedOrder : state.selectedOrder};
      case "isOpen" :
        state.isOpen = !state.isOpen;    
        return {...state, isOpen: state.isOpen};  
    default:
      state.products = [...products]
      return {...state, products: state.products, selectedOrder: state.selectedOrder}
  }
}

let store = createStore(reducer);
export default store;
