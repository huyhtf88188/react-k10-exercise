import { DELETE_USER, REGISTER_USER, SET_USER } from "../action/authAction";

export const initialState = {
  users: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    }
    case SET_USER: {
      return {
        ...state,
        users: action.payload,
      };
    }

    default:
      return state;
  }
};
