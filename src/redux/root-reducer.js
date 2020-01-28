import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
// import shoppingReducer from "./cart/shopping.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
  // shopping: shoppingReducer
});

export default persistReducer(persistConfig, rootReducer);

// installing redux redux-logger react-redux for intiating redux
