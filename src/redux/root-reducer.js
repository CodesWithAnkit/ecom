import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
// import shoppingReducer from "./cart/shopping.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
  // shopping: shoppingReducer
});

// installing redux redux-logger react-redux for intiating redux
