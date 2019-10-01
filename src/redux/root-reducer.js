import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer
});

// installing redux redux-logger react-redux for intiating redux
