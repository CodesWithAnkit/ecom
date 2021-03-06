import { UserActionTypes } from './user.types';
const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;

// const INITIAL_STATEA = {
//   currentUsers: null
// };

// const currentUsersReducers = (state = INITIAL_STATEA, action) => {
//   switch (action.type) {
//   }
// };
